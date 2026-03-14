const width = 200
const height = 100

let grid: number[][] = Array.from({ length: height}, () => 
  Array.from ({ length: width}, () => Math.random() > 0.7 ? 1: 0))

function countNeighbours(x: number, y: number){
  let count = 0;

  for( let dy = -1; dy <= 1; dy++){
    for (let dx = -1; dx <= 1; dx++ ) {
      if (dy === 0 && dx === 0) continue;

      const nx = x + dx;
      const ny = y + dy;

      if(
        nx >= 0 &&
        nx < width &&
        ny >= 0 &&
        ny < height
        )
        {
          count += grid[ny][nx]
        }
    }
  }
  return count;
}

function step() {
  const next = grid.map(row => [ ...row])

  for(let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++){
      const neighbours = countneighbours(x,y)

      if(grid[y][x] === 1){
        if(neighbours < 2 || neighbours > 3) next[y][x] = 0
      } else {
        if(neighbours === 3) next[y][x] = 1
      }
    }
  }
  grid = next
}

function draw(){
  console.clear()

  for(const row of grid){
    console.log(
      row.map(cell => (cell ? "X": " ")).join("")
    )
  }
}

setInterval(() => {
  draw()
  step()
},200)

