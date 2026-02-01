
const svg = document.getElementById("board");

let isDrawing = false;
let currentLine = null;
let points = "";

svg.addEventListener("mousedown", function (e) {
  isDrawing = true;
  points = "";

  currentLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  currentLine.setAttribute("stroke", "black");
  currentLine.setAttribute("stroke-width", "2");
  currentLine.setAttribute("fill", "none");

  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  points += `${x},${y} `;
  currentLine.setAttribute("points", points);
  svg.appendChild(currentLine);
});

svg.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;

  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  points += `${x},${y} `;
  currentLine.setAttribute("points", points);
});

svg.addEventListener("mouseup", function () {
  isDrawing = false;
});

svg.addEventListener("mouseleave", function () {
  isDrawing = false;
});
