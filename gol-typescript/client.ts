async function fetchGrid() {
  const res = await fetch("/grid");
  const data = await res.json();
  renderGrid(data);
}

function renderGrid(grid: number[][]) {
  const gridEl = document.getElementById("grid");
  if (!gridEl) return;

  let str = "";
  for (const row of grid) {
    for (const cell of row) {
      str += cell ? "■" : " ";
    }
    str += "\n";
  }
  gridEl.textContent = str;
}

setInterval(fetchGrid, 500);
