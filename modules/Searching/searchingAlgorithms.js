// modules/Searching/searchingAlgorithms.js

export async function linearSearch(array, target, delay, sleep) {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < array.length; i++) {
    bars[i].style.background = "orange"; // checking
    await sleep(delay);

    if (array[i] === target) {
      bars[i].style.background = "green"; // found
      return true;
    } else {
      bars[i].style.background = "red"; // not match
    }
  }
  alert("Element not found!");
  return false;
}

export async function binarySearch(array, target, delay, sleep) {
  let left = 0, right = array.length - 1;
  const bars = document.querySelectorAll(".bar");

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    bars[mid].style.background = "orange";
    await sleep(delay);

    if (array[mid] === target) {
      bars[mid].style.background = "green"; // found
      return true;
    } else if (array[mid] < target) {
      bars[mid].style.background = "red";
      left = mid + 1;
    } else {
      bars[mid].style.background = "red";
      right = mid - 1;
    }
  }
  alert("Element not found!");
  return false;
}
