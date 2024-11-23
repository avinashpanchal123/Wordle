import React, { useState, useEffect } from 'react';
import './WordleBoard.css';

const WordleBoard = () => {
    const rows = 6;
    const cols = 5;

    const [grid, setGrid] = useState(
        Array(rows).fill().map(() => Array(cols).fill(''))
    );
    const [activeRow, setActiveRow] = useState(0);
    const [activeCell, setActiveCell] = useState(0);

    useEffect(() => {
        // Add keydown listener to the window
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();

            if (/^[A-Z]$/.test(key)) {
                updateCell(key);
            }
            else if (event.key === 'Backspace') {
                handleBackspace();
            }
            else if (event.key === 'Enter') {
                handleEnter();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            // Cleanup listener on unmount
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeRow, activeCell, grid]);

    const updateCell = (key) => {
        if (activeCell < cols && activeRow < rows) {
            const updatedGrid = [...grid];
            updatedGrid[activeRow][activeCell] = key;
            setGrid(updatedGrid);

            setActiveCell((prev) => Math.min(prev + 1, cols));
        }
    };

    const handleBackspace = () => {
        if (activeCell > 0) {
            const updatedGrid = [...grid];
            updatedGrid[activeRow][activeCell - 1] = '';
            setGrid(updatedGrid);

            setActiveCell((prev) => Math.max(prev - 1, 0));
        }
    };

    const handleEnter = () => {
        if (activeCell === cols) {
            setActiveRow((prev) => Math.min(prev + 1, rows));
            setActiveCell(0);
        } else {
            alert('Please complete the row before pressing Enter!');
        }
    };

    return (
        <div id="wordleBoard">
            {grid.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`wordle-row ${
                        rowIndex === activeRow ? 'active-row' : ''
                    }`}
                >
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            className={`cell ${
                                rowIndex === activeRow && colIndex === activeCell
                                    ? 'active-cell'
                                    : ''
                            }`}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default WordleBoard;