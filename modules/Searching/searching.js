// modules/Searching/searching.js
import { linearSearch, binarySearch } from "./searchingAlgorithms.js";  // ✅ fixed spelling

let array = [];
let delay = 500;

const barsContainer = document.getElementById("bars");
const sizeInput = document.getElementById("size");
const targetInput = document.getElementById("target");
const algorithmSelect = document.getElementById("algorithm");

// ✅ query all button elements
const generateBtn = document.getElementById("generate");
const customBtn = document.getElementById("customBtn");
const startBtn = document.getElementById("start");

// Render bars
function renderBars(arr) {
  barsContainer.innerHTML = "";
  const maxVal = Math.max(...arr);
  arr.forEach(val => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${(val / maxVal) * 100}%`;
    bar.textContent = val;
    barsContainer.appendChild(bar);
  });
}

// Delay helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate random array
generateBtn.addEventListener("click", () => {
  const size = parseInt(sizeInput.value);
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  if (algorithmSelect.value === "binary") array.sort((a, b) => a - b);
  renderBars(array);
});

// Custom array input
customBtn.addEventListener("click", () => {
  const input = document.getElementById("customInput").value;
  array = input.split(",").map(Number).filter(x => !isNaN(x));
  if (algorithmSelect.value === "binary") array.sort((a, b) => a - b);
  renderBars(array);
});

// Start search
startBtn.addEventListener("click", async () => {
  const target = parseInt(targetInput.value);
  if (array.length === 0) return alert("Generate or enter an array first!");
  
  toggleControls(true);

  if (algorithmSelect.value === "linear") {
    await linearSearch(array, target, delay, sleep);
  } else {
    await binarySearch(array, target, delay, sleep);
  }

  toggleControls(false);
});

function toggleControls(disabled) {
  sizeInput.disabled = disabled;
  targetInput.disabled = disabled;
  algorithmSelect.disabled = disabled;
  generateBtn.disabled = disabled;
  customBtn.disabled = disabled;
  startBtn.disabled = disabled;
}
