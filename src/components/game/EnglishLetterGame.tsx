'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Trophy, 
  Star, 
  RefreshCw, 
  Zap, 
  Target,
  Crown,
  Flame
} from 'lucide-react'

interface Tile {
  id: string
  letter: string
  row: number
  col: number
  isMatched: boolean
  isAnimating: boolean
}

interface GameStats {
  score: number
  moves: number
  level: number
  combo: number
  highScore: number
}

const GRID_SIZE = 8
const LETTERS = ['A', 'E', 'I', 'O', 'U', 'R', 'S', 'T', 'L', 'N', 'C', 'D', 'G', 'H', 'B', 'F', 'P', 'M', 'V', 'W', 'Y', 'K', 'J', 'X', 'Z', 'Q']

const EnglishLetterGame = () => {
  const [grid, setGrid] = useState<Tile[][]>([])
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null)
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    moves: 0,
    level: 1,
    combo: 0,
    highScore: 0
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  const generateTile = (row: number, col: number): Tile => ({
    id: `${row}-${col}-${Date.now()}`,
    letter: LETTERS[Math.floor(Math.random() * Math.min(LETTERS.length, 10 + gameStats.level))],
    row,
    col,
    isMatched: false,
    isAnimating: false
  })

  const initializeGrid = useCallback(() => {
    const newGrid: Tile[][] = []
    for (let row = 0; row < GRID_SIZE; row++) {
      newGrid[row] = []
      for (let col = 0; col < GRID_SIZE; col++) {
        newGrid[row][col] = generateTile(row, col)
      }
    }
    return newGrid
  }, [gameStats.level])

  const startGame = () => {
    setGameStarted(true)
    setGameStats(prev => ({ ...prev, score: 0, moves: 0, level: 1, combo: 0 }))
    setGrid(initializeGrid())
  }

  const findMatches = (currentGrid: Tile[][]): Set<string> => {
    const matches = new Set<string>()
    
    // Check horizontal matches (2 or more)
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE - 1; col++) {
        const letter = currentGrid[row][col].letter
        const consecutiveLetters = [currentGrid[row][col].id]
        
        for (let nextCol = col + 1; nextCol < GRID_SIZE; nextCol++) {
          if (currentGrid[row][nextCol].letter === letter) {
            consecutiveLetters.push(currentGrid[row][nextCol].id)
          } else {
            break
          }
        }
        
        if (consecutiveLetters.length >= 2) {
          consecutiveLetters.forEach(id => matches.add(id))
        }
      }
    }
    
    // Check vertical matches (2 or more)
    for (let col = 0; col < GRID_SIZE; col++) {
      for (let row = 0; row < GRID_SIZE - 1; row++) {
        const letter = currentGrid[row][col].letter
        const consecutiveLetters = [currentGrid[row][col].id]
        
        for (let nextRow = row + 1; nextRow < GRID_SIZE; nextRow++) {
          if (currentGrid[nextRow][col].letter === letter) {
            consecutiveLetters.push(currentGrid[nextRow][col].id)
          } else {
            break
          }
        }
        
        if (consecutiveLetters.length >= 2) {
          consecutiveLetters.forEach(id => matches.add(id))
        }
      }
    }
    
    return matches
  }

  const removeMatches = (currentGrid: Tile[][], matches: Set<string>): Tile[][] => {
    return currentGrid.map(row =>
      row.map(tile => ({
        ...tile,
        isMatched: matches.has(tile.id),
        isAnimating: matches.has(tile.id)
      }))
    )
  }

  const dropTiles = (currentGrid: Tile[][]): Tile[][] => {
    const newGrid = currentGrid.map(row => [...row])
    
    for (let col = 0; col < GRID_SIZE; col++) {
      let writePosition = GRID_SIZE - 1
      
      for (let row = GRID_SIZE - 1; row >= 0; row--) {
        if (!newGrid[row][col].isMatched) {
          if (row !== writePosition) {
            newGrid[writePosition][col] = { ...newGrid[row][col], row: writePosition }
          }
          writePosition--
        }
      }
      
      for (let row = writePosition; row >= 0; row--) {
        newGrid[row][col] = generateTile(row, col)
      }
    }
    
    return newGrid
  }

  const calculateScore = (matches: Set<string>): number => {
    const baseScore = matches.size * 10
    const comboBonus = gameStats.combo * 5
    const levelBonus = gameStats.level * 2
    return baseScore + comboBonus + levelBonus
  }

  const processMatches = useCallback(async () => {
    setIsProcessing(true)
    let currentGrid = [...grid]
    let totalScore = 0
    let comboCount = 0
    
    while (true) {
      const matches = findMatches(currentGrid)
      
      if (matches.size === 0) break
      
      comboCount++
      totalScore += calculateScore(matches)
      
      currentGrid = removeMatches(currentGrid, matches)
      setGrid(currentGrid)
      
      await new Promise(resolve => setTimeout(resolve, 300))
      
      currentGrid = dropTiles(currentGrid)
      setGrid(currentGrid)
      
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    setGameStats(prev => ({
      ...prev,
      score: prev.score + totalScore,
      combo: comboCount,
      level: Math.floor((prev.score + totalScore) / 500) + 1,
      highScore: Math.max(prev.highScore, prev.score + totalScore)
    }))
    
    setIsProcessing(false)
  }, [grid, gameStats.combo, gameStats.level, gameStats.score])

  const swapTiles = (tile1: Tile, tile2: Tile) => {
    const newGrid = grid.map(row => [...row])
    
    const temp = newGrid[tile1.row][tile1.col]
    newGrid[tile1.row][tile1.col] = { ...newGrid[tile2.row][tile2.col], row: tile1.row, col: tile1.col }
    newGrid[tile2.row][tile2.col] = { ...temp, row: tile2.row, col: tile2.col }
    
    setGrid(newGrid)
    setGameStats(prev => ({ ...prev, moves: prev.moves + 1 }))
    
    const matches = findMatches(newGrid)
    if (matches.size > 0) {
      setTimeout(() => processMatches(), 100)
    } else {
      // Swap back if no matches
      setTimeout(() => {
        const revertGrid = newGrid.map(row => [...row])
        const temp = revertGrid[tile1.row][tile1.col]
        revertGrid[tile1.row][tile1.col] = { ...revertGrid[tile2.row][tile2.col], row: tile1.row, col: tile1.col }
        revertGrid[tile2.row][tile2.col] = { ...temp, row: tile2.row, col: tile2.col }
        setGrid(revertGrid)
      }, 300)
    }
  }

  const handleTileClick = (tile: Tile) => {
    if (isProcessing || !gameStarted) return
    
    if (!selectedTile) {
      setSelectedTile(tile)
    } else {
      const isAdjacent = 
        (Math.abs(selectedTile.row - tile.row) === 1 && selectedTile.col === tile.col) ||
        (Math.abs(selectedTile.col - tile.col) === 1 && selectedTile.row === tile.row)
      
      if (isAdjacent) {
        swapTiles(selectedTile, tile)
      }
      setSelectedTile(null)
    }
  }

  const getTileColor = (letter: string, isSelected: boolean, isMatched: boolean, isAnimating: boolean) => {
    if (isMatched || isAnimating) return 'bg-red-500 text-white scale-110'
    if (isSelected) return 'bg-yellow-400 text-[#0a233b] scale-110 ring-4 ring-yellow-300'
    
    const vowelColors = {
      'A': 'bg-blue-500 text-white',
      'E': 'bg-green-500 text-white',
      'I': 'bg-purple-500 text-white',
      'O': 'bg-orange-500 text-white',
      'U': 'bg-pink-500 text-white'
    }
    
    return vowelColors[letter as keyof typeof vowelColors] || 'bg-gray-600 text-white'
  }

  useEffect(() => {
    if (gameStarted && grid.length > 0) {
      const initialMatches = findMatches(grid)
      if (initialMatches.size > 0) {
        processMatches()
      }
    }
  }, [])

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a233b] to-[#1a3a52] flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-[#0a233b]" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Letter Match Game</CardTitle>
            <p className="text-gray-300">Match English letters to score points!</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-white space-y-2">
              <h3 className="font-semibold">How to Play:</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Click a letter, then click an adjacent letter to swap</li>
                <li>• Match 2 or more same letters horizontally or vertically</li>
                <li>• Longer matches give more points</li>
                <li>• Build combos for bonus points</li>
                <li>• Unlimited gameplay - play forever!</li>
              </ul>
            </div>
            <Button 
              onClick={startGame}
              className="w-full bg-yellow-400 text-[#0a233b] hover:bg-yellow-300 font-bold"
              size="lg"
            >
              Start Game
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a233b] to-[#1a3a52] p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Game Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Letter Match Game</h1>
          <p className="text-gray-300">Match English letters and score points!</p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-yellow-400 text-2xl font-bold">{gameStats.score}</div>
              <div className="text-gray-300 text-sm">Score</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-blue-400 text-2xl font-bold">{gameStats.moves}</div>
              <div className="text-gray-300 text-sm">Moves</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-green-400 text-2xl font-bold">{gameStats.level}</div>
              <div className="text-gray-300 text-sm">Level</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-purple-400 text-2xl font-bold">{gameStats.combo}x</div>
              <div className="text-gray-300 text-sm">Combo</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-red-400 text-2xl font-bold">{gameStats.highScore}</div>
              <div className="text-gray-300 text-sm">High Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Game Grid */}
        <div className="flex justify-center mb-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
            <div className="grid grid-cols-8 gap-1">
              {grid.map((row, rowIndex) =>
                row.map((tile, colIndex) => (
                  <button
                    key={tile.id}
                    onClick={() => handleTileClick(tile)}
                    disabled={isProcessing}
                    className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-lg font-bold text-lg md:text-xl
                      transition-all duration-300 transform hover:scale-105
                      ${getTileColor(tile.letter, selectedTile?.id === tile.id, tile.isMatched, tile.isAnimating)}
                      ${isProcessing ? 'cursor-not-allowed' : 'cursor-pointer'}
                      shadow-lg
                    `}
                  >
                    {tile.letter}
                  </button>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Game Controls */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={startGame}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              New Game
            </Button>
          </div>
          
          <div className="text-gray-300 text-sm">
            <p>Match 2 or more letters • Build combos for bonus points • Unlimited gameplay!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnglishLetterGame