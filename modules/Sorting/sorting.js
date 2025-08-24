import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './sortingAlgoritms.js';

let array = [];
let delay = 500; // default delay
let isSorting = false;

const barsContainer = document.getElementById("bars");
const sizeInput = document.getElementById("size");
const speedInput = document.getElementById("speed");
const algorithmSelect = document.getElementById("algorithm");
const generateBtn = document.getElementById("generate");
const startBtn = document.getElementById("start");
const customBtn = document.getElementById("customBtn");

// Generate random array
generateBtn.addEventListener("click", () => {
  if (isSorting) return;
  const size = parseInt(sizeInput.value);
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);
  renderBars(array);
});

// Set custom array
customBtn.addEventListener("click", () => {
  if (isSorting) return;
  const customInput = document.getElementById("customInput").value.trim();
  if (customInput === "") {
    alert("Input cannot be empty.");
    return;
  }
  const values = customInput.split(",").map(v => Number(v.trim()));
  if (values.some(isNaN)) {
    alert("Invalid input. Enter numbers separated by commas.");
    return;
  }
  array = values;
  renderBars(array);
});

// Start sorting
startBtn.addEventListener("click", async () => {
  if (isSorting || array.length === 0) return;
  isSorting = true;
  toggleControls(true);
  delay = parseInt(speedInput.value) * 1000;

  const algo = algorithmSelect.value;
  if (algo === "bubble") {
    await bubbleSort(array, renderBars, sleep, delay);
  } else if (algo === "selection") {
    await selectionSort(array, renderBars, sleep, delay);
  } else if (algo === "insertion") {
    await insertionSort(array, renderBars, sleep, delay);
  } else if (algo === "merge") {
    await mergeSort(array, renderBars, sleep, delay);
  } else if (algo === "quick") {
    await quickSort(array, renderBars, sleep, delay);
  }

  toggleControls(false);
  isSorting = false;
});

// Render bars
function renderBars(arr, colors = []) {
  barsContainer.innerHTML = "";
  if (arr.length === 0) return;
  const maxVal = Math.max(...arr);

  arr.forEach((val, i) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${(val / maxVal) * 100}%`;
    bar.style.background = colors[i] || "#4a90e2";
    bar.style.position = "relative";

    const label = document.createElement("span");
    label.className = "bar-label";
    label.textContent = val;

    bar.appendChild(label);
    barsContainer.appendChild(bar);
  });
}

// Helpers
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function toggleControls(disabled) {
  sizeInput.disabled = disabled;
  speedInput.disabled = disabled;
  algorithmSelect.disabled = disabled;
  generateBtn.disabled = disabled;
  customBtn.disabled = disabled;
  startBtn.disabled = disabled;
}
