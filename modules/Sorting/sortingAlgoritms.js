/* ---------------- Sorting Algorithms ---------------- */

// Bubble Sort
export async function bubbleSort(array, renderBars, sleep, delay) {
  let arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      renderBars(arr, arr.map((_, idx) => idx === j || idx === j + 1 ? "yellow" : "#4a90e2"));
      await sleep(delay);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        renderBars(arr, arr.map((_, idx) => idx === j || idx === j + 1 ? "red" : "#4a90e2"));
        await sleep(delay);
      }
    }
  }
  renderBars(arr, arr.map(() => "green"));
  return arr;
}

// Selection Sort
export async function selectionSort(array, renderBars, sleep, delay) {
  let arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      renderBars(arr, arr.map((_, idx) => idx === minIdx || idx === j ? "yellow" : "#4a90e2"));
      await sleep(delay);
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    renderBars(arr, arr.map((_, idx) => idx <= i ? "green" : "#4a90e2"));
    await sleep(delay);
  }
  renderBars(arr, arr.map(() => "green"));
  return arr;
}

// Insertion Sort
export async function insertionSort(array, renderBars, sleep, delay) {
  let arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      renderBars(arr, arr.map((_, idx) => idx === j + 1 ? "yellow" : "#4a90e2"));
      await sleep(delay);
    }
    arr[j + 1] = key;
    renderBars(arr, arr.map((_, idx) => idx <= i ? "green" : "#4a90e2"));
    await sleep(delay);
  }
  renderBars(arr, arr.map(() => "green"));
  return arr;
}

// Merge Sort
export async function mergeSort(array, renderBars, sleep, delay) {
  let arr = array.slice();
  await mergeSortHelper(arr, 0, arr.length - 1, renderBars, sleep, delay);
  renderBars(arr, arr.map(() => "green"));
  return arr;
}

async function mergeSortHelper(arr, l, r, renderBars, sleep, delay) {
  if (l >= r) return;
  const m = Math.floor((l + r) / 2);
  await mergeSortHelper(arr, l, m, renderBars, sleep, delay);
  await mergeSortHelper(arr, m + 1, r, renderBars, sleep, delay);
  await merge(arr, l, m, r, renderBars, sleep, delay);
}

async function merge(arr, l, m, r, renderBars, sleep, delay) {
  let left = arr.slice(l, m + 1);
  let right = arr.slice(m + 1, r + 1);
  let i = 0, j = 0, k = l;

  while (i < left.length && j < right.length) {
    renderBars(arr, arr.map((_, idx) => idx === k ? "yellow" : "#4a90e2"));
    await sleep(delay);
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }

  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];

  renderBars(arr, arr.map((_, idx) => (idx >= l && idx <= r) ? "green" : "#4a90e2"));
  await sleep(delay);
}

// Quick Sort
export async function quickSort(array, renderBars, sleep, delay) {
  let arr = array.slice();
  await quickSortHelper(arr, 0, arr.length - 1, renderBars, sleep, delay);
  renderBars(arr, arr.map(() => "green"));
  return arr;
}

async function quickSortHelper(arr, low, high, renderBars, sleep, delay) {
  if (low < high) {
    let pi = await partition(arr, low, high, renderBars, sleep, delay);
    await quickSortHelper(arr, low, pi - 1, renderBars, sleep, delay);
    await quickSortHelper(arr, pi + 1, high, renderBars, sleep, delay);
  }
}

async function partition(arr, low, high, renderBars, sleep, delay) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    renderBars(arr, arr.map((_, idx) => idx === j || idx === high ? "yellow" : "#4a90e2"));
    await sleep(delay);
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      renderBars(arr, arr.map((_, idx) => idx === i || idx === j ? "red" : "#4a90e2"));
      await sleep(delay);
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  renderBars(arr, arr.map((_, idx) => idx === i + 1 ? "green" : "#4a90e2"));
  await sleep(delay);
  return i + 1;
}
