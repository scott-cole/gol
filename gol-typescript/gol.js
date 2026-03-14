var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var width = 200;
var height = 100;
var grid = Array.from({ length: height }, function () {
    return Array.from({ length: width }, function () { return Math.random() > 0.7 ? 1 : 0; });
});
function countNeighbours(x, y) {
    var count = 0;
    for (var dy = -1; dy <= 1; dy++) {
        for (var dx = -1; dx <= 1; dx++) {
            if (dy === 0 && dx === 0)
                continue;
            var nx = x + dx;
            var ny = y + dy;
            if (nx >= 0 &&
                nx < width &&
                ny >= 0 &&
                ny < height) {
                count += grid[ny][nx];
            }
        }
    }
    return count;
}
function step() {
    var next = grid.map(function (row) { return __spreadArray([], row, true); });
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var neighbours = countNeighbours(x, y);
            if (grid[y][x] === 1) {
                if (neighbours < 2 || neighbours > 3)
                    next[y][x] = 0;
            }
            else {
                if (neighbours === 3)
                    next[y][x] = 1;
            }
        }
    }
    grid = next;
}
function draw() {
    console.clear();
    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
        var row = grid_1[_i];
        console.log(row.map(function (cell) { return (cell ? "X" : " "); }).join(""));
    }
}
setInterval(function () {
    draw();
    step();
}, 200);
