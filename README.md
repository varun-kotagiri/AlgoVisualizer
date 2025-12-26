# 🚀 AlgoVisualizer

**AlgoVisualizer** is an interactive, web-based tool that visualizes popular **sorting** and **searching algorithms** in real-time.  
It helps users — especially students and developers — understand how algorithms work by animating steps like comparisons, swaps, and traversals visually in the browser.

📍 **Live Demo:**  
https://varun-kotagiri.github.io/AlgoVisualizer/

---

## 🧠 Overview

Algorithm visualization is a powerful educational technique to make abstract algorithmic concepts concrete and understandable. AlgoVisualizer allows users to:

✔ See how classic algorithms operate *step-by-step*  
✔ Adjust array size and animation speed  
✔ Choose between sorting and searching visualizations  
✔ Interactively watch elements move, compare, and swap  

This project uses **vanilla JavaScript**, **HTML**, and **CSS** — no libraries or frameworks — making it lightweight and easy to understand.

---

## 🔍 Features

### 🔹 Sorting Algorithms
The app visually demonstrates how common sorting methods reorganize data:
- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**
- **Merge Sort**
- **Quick Sort**

_Elements are represented by vertical bars whose heights correspond to their values. Visual cues show comparisons and swaps in motion._

### 🔹 Searching Algorithms
Visualize how searching works over an array:
- **Linear Search**
- **Binary Search**

_Elements are highlighted as they are checked, showing how the algorithm finds (or doesn’t find) the target._

### 🎛️ Custom Controls
- Adjustable **array size**  
- Adjustable **animation speed**  
- Start, pause, reset, and replay animations  
- Clean, responsive UI for focused learning

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **HTML** | Structure & layout |
| **CSS** | Styling and visuals |
| **JavaScript** | Algorithm logic & animation |

This project avoids frameworks and external dependencies to keep the learning focus on core technologies.

---

## 📁 Project Structure

AlgoVisualizer/
├── modules/ # JavaScript modules for logic & UI
├── index.html # Main application HTML
├── searching.html # Searching algorithm visualization page
├── sorting.html # Sorting algorithm visualization page
├── style.css # Project styling
└── README.md # Documentation


---

## 🧠 How It Works

1. **Select an algorithm** from the dropdown.
2. **Configure array size** and **speed**.
3. Press **Start** to watch the algorithm run.
4. The visualization highlights:
   - Comparisons
   - Swaps
   - Traversals  
   helping you intuitively understand algorithm behavior.

Behind the scenes, the JavaScript logic manipulates DOM elements representing array bars and updates them based on algorithm steps.

---

## 🔧 Getting Started

### 📌 Clone the Repo

```bash
git clone https://github.com/varun-kotagiri/AlgoVisualizer.git
cd AlgoVisualizer

🚀 Future Enhancements

Here are some features you could add:

Pathfinding visualizations (A*, Dijkstra, BFS, DFS)

Graph & tree algorithm visualizations

Complexity metrics displayed alongside animations

Dark mode / theme support

Mobile responsiveness improvements


👤 Author

Varun Kotagiri
GitHub: https://github.com/varun-kotagiri

