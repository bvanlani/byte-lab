/*
 *  Author : Ethan Benzaquen
 *  Date   : 10/29/2025
 *  Description: PythonGUI.jsx is a React component that generates and displays
 *               a randomly generated maze using the Recursive Backtracking algorithm.
 *               Users can select the size of the maze and regenerate it on demand.
 */

import React, { useState, useEffect } from "react";
import robot from "../../assets/robot.png";

/**
 * PythonGUI Component
 * A React component that generates and displays a randomly generated maze
 * using the Recursive Backtracking algorithm.
 *
 * @param {Object} position - Optional prop (not used in current implementation)
 */
export default function PythonGUI({ position }) {
  // State for maze size (default: 10x10)
  const [mazeSize, setMazeSize] = useState(10);
  // State to hold the rendered JSX grid of maze cells
  const [grid, setGrid] = useState([]);

  // Regenerate maze whenever mazeSize changes
  useEffect(() => {
    setUpMaze();
  }, [mazeSize]);

  /**
   * Initialize a 2D grid with default cell properties
   * Each cell has:
   * - visited: false (for generation algorithm)
   * - walls: [top, left, right, bottom] — all true initially
   * - isStart: true only for (0,0)
   * - isEnd: true only for bottom-right cell
   */
  function initializeGrid() {
    const newGrid = [];
    for (let i = 0; i < mazeSize; i++) {
      const row = [];
      for (let j = 0; j < mazeSize; j++) {
        row.push({
          visited: false,
          walls: [true, true, true, true], // [top, left, right, bottom]
          isStart: i === 0 && j === 0,
          isEnd: i === mazeSize - 1 && j === mazeSize - 1,
        });
      }
      newGrid.push(row);
    }
    return newGrid;
  }

  /**
   * Main maze generation function using Recursive Backtracking
   * 1. Starts at (0,0)
   * 2. Uses a stack to track current path
   * 3. Randomly picks unvisited neighbor
   * 4. Removes wall between current and neighbor
   * 5. Backtracks when no unvisited neighbors remain
   */
  function setUpMaze() {
    const newDataGrid = initializeGrid();
    const stack = [];
    const start = { x: 0, y: 0 };

    // Mark starting cell as visited and push to stack
    newDataGrid[0][0].visited = true;
    stack.push(start);

    // Continue until all cells are visited (stack is empty)
    while (stack.length > 0) {
      const current = stack[stack.length - 1]; // Peek top of stack
      const neighbors = getNeighbors(current.x, current.y, newDataGrid);

      if (neighbors.length > 0) {
        // Choose random unvisited neighbor
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        stack.push({ x: next.x, y: next.y });

        // Remove wall between current and next cell
        removeWalls(current, next, newDataGrid);

        // Mark neighbor as visited
        newDataGrid[next.x][next.y].visited = true;
      } else {
        // No unvisited neighbors → backtrack
        stack.pop();
      }
    }

    // Convert data grid to JSX and update state
    const jsxGrid = renderGrid(newDataGrid);
    setGrid(jsxGrid);
  }

  /**
   * Get valid unvisited neighbors of a cell
   * Directions: up (0,-1), left (-1,0), down (0,1), right (1,0)
   * Returns array of {x, y, dirIdx} for valid neighbors
   */
  function getNeighbors(x, y, data) {
    const neighbors = [];
    const directions = [
      { dx: 0, dy: -1, idx: 0 }, // up
      { dx: -1, dy: 0, idx: 1 }, // left
      { dx: 0, dy: 1, idx: 2 },  // down
      { dx: 1, dy: 0, idx: 3 },  // right
    ];

    for (let d of directions) {
      const nx = x + d.dx;
      const ny = y + d.dy;

      // Check bounds and if unvisited
      if (nx >= 0 && nx < mazeSize && ny >= 0 && ny < mazeSize && !data[nx][ny].visited) {
        neighbors.push({ x: nx, y: ny, dirIdx: d.idx });
      }
    }
    return neighbors;
  }

  /**
   * Remove walls between two adjacent cells
   * Wall indices: [0: top, 1: left, 2: right, 3: bottom]
   * Based on direction of movement, disable appropriate walls
   */
  function removeWalls(current, next, data) {
    const dx = current.x - next.x;
    const dy = current.y - next.y;

    let currentWallIdx, nextWallIdx;

    if (dx === 1) {
      // Moving left: current loses left wall, next loses right wall
      currentWallIdx = 1; nextWallIdx = 3;
    } else if (dx === -1) {
      // Moving right
      currentWallIdx = 3; nextWallIdx = 1;
    } else if (dy === 1) {
      // Moving up
      currentWallIdx = 0; nextWallIdx = 2;
    } else if (dy === -1) {
      // Moving down
      currentWallIdx = 2; nextWallIdx = 0;
    }

    // Disable the shared walls
    data[current.x][current.y].walls[currentWallIdx] = false;
    data[next.x][next.y].walls[nextWallIdx] = false;
  }

  /**
   * Render the maze grid as JSX elements
   * Each cell is a div with conditional borders based on wall state
   * Outer walls are only drawn on the perimeter
   */
  function renderGrid(gridData) {
    return gridData.map((row, i) =>
      row.map((cell, j) => (
        <div
          key={`cell-${i}-${j}`}
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: "white",
            aspectRatio: "1/1",
            backgroundImage: (i === 0 && j === 0) ? `url(${robot})` : "none",
            backgroundImage: (i === 0 && j === 0) ? `url(${robot})` : "none",
            backgroundSize: "contain",        
            backgroundRepeat: "no-repeat",     
            backgroundPosition: "center",      
            // Top border only on first row or if wall exists
            borderTop: i === 0 ? (cell.walls[1] ? "2px solid blue" : "none") : "none",
            // Left border only on first column
            borderLeft: j === 0 ? (cell.walls[0] ? "2px solid blue" : "none") : "none",
            // Right and bottom borders always checked
            borderRight: cell.walls[2] ? "2px solid blue" : "none",
            borderBottom: cell.walls[3] ? "2px solid blue" : "none",
          }}
        />
      ))
    );
  }

  /**
   * Handle maze size selection change
   */
  const handleChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setMazeSize(newSize);
  };

  // UI Render
  return (
    <div
      className="rounded overflow-hidden shadow-sm col-4 bg-dark"
      style={{ minHeight: 300 }}
    >
      {/* Maze Display Container */}
      <div
        id="container"
        className="m-3 bg-light rounded robotDiv"
        style={{
          boxSizing: "border-box",
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${mazeSize}, 1fr)`,
          gridTemplateRows: `repeat(${mazeSize}, 1fr)`,
        }}
      >
        {grid}
      </div>

      {/* Controls */}
      <div className="p-3">
        <label htmlFor="mazeDrop">Choose a Maze Size:</label>
        <select
          id="mazeDrop"
          value={mazeSize}
          onChange={handleChange}
          className="ms-2"
        >
          {[5, 10, 15, 20].map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>

        {/* Manual regenerate button */}
        <button onClick={setUpMaze} className="ms-2 btn btn-primary btn-sm">
          Generate Maze
        </button>
      </div>
    </div>
  );
}