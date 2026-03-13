export type Grid = number[][];

export function createGrid(rows: number, cols: number): Grid {
  const grid: Grid = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
      row.push(Math.random() > 0.7 ? 1 : 0); 
    }
    grid.push(row);
  }
  return grid;
}

export function nextGeneration(grid: Grid): Grid {
  const rows = grid.length;
  const cols = grid[0].length;
  const newGrid: Grid = grid.map(arr => [...arr]);

  const getNeighbors = (r: number, c: number) => {
    let sum = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) sum += grid[nr][nc];
      }
    }
    return sum;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const neighbors = getNeighbors(r, c);
      if (grid[r][c] === 1) {
        newGrid[r][c] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[r][c] = neighbors === 3 ? 1 : 0;
      }
    }
  }

  return newGrid;
}
