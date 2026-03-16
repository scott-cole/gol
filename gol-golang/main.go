package main

import (
	"fmt"
	"math/rand"
	"time"
)

var width = 100
var height = 100
var grid [][]int 

func createGrid(width, height int) {

	grid = make([][]int, height)

	for c := 0; c < height; c++ {
		grid[c] = make([]int, width)

		for r := 0; r < width; r++{
			if rand.Float64() > 0.7 {
				grid[c][r] = 1
			}
		}
	}
}

func checkNeighbours(grid [][]int, c, r, width, height int) int {
	count := 0

	for dc := -1; dc <= 1; dc++ {
		for dr := -1; dr <= 1; dr++ {

			if dr == 0 && dc == 0  {
				continue
			}

			nc := c + dc
			nr := r + dr

			if nc >= 0 && nc < height && nr >= 0 && nr < width {
				count += grid[nc][nr] 
			}  
		}
	}

	return count;
}

func nextGeneration() {

	nextGrid := make([][]int, height)
	for i := range nextGrid {
		nextGrid[i] = make([]int, width)
	}

	for c := 0; c < height; c++ {
		for r := 0; r < width; r++ {

			neighbours := checkNeighbours(grid, c, r, width, height)

			if grid[c][r] == 1 {
				if neighbours == 2 || neighbours == 3 {
					nextGrid[c][r] = 1
				}
			} else {
				if neighbours == 3 {
					nextGrid[c][r] = 1
				}
			}
		}
	}

	grid = nextGrid
}

func printGrid() {
	for c := 0; c < height; c++ {
		for r := 0; r < width; r++ {

			if grid[c][r] == 1 {
				fmt.Print("X")
			} else {
				fmt.Print(" ")
			}

		}
		fmt.Println()
	}
}

func main() {

	createGrid(width, height)

	for {
		fmt.Print("\033[H\033[2J") 

		printGrid()
		nextGeneration()

		time.Sleep(500 * time.Millisecond)
	}
}
