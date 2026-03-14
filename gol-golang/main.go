package main

import (
	"fmt"
	"math/rand"
)

width := 20
height := 10
grid := make([][]int, height)

func createGrid() {
	for c := 0; c < height; c++ {
		grid[c] = make([]int, width)

		for r := 0; r < width; r++{
			if rand.Float64() > 0.7 {
				grid[c][r] = 1
			}
		}
	}
}

func checkNeighbours(grid [][]int,x, y, width, height int) int {
	count := 0

	for dc := -1; dc <= 1; dc++ {
		for dr := -1; dr <= 1; dr++ {
			if dr == 0 && dc == 0  {
				continue
			}

			nc := c + dc
			nr := r + dr

			if nc >= 0 && nc < width && nr >= 0 && nr < height {
				count += grid[nc][nr] 
			}  
		}
	}

	return count;
}

