import express from "express";
import path from "path";
import { createGrid, nextGeneration, Grid } from "./game";

const app = express();
const PORT = 3000;

let grid: Grid = createGrid(20, 40);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/client.js", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "client.js"));
}); 

app.get("/grid", (req, res) => {
  grid = nextGeneration(grid);
  res.json(grid);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
