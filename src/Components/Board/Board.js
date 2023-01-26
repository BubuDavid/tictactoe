import React, {useState} from 'react'
import Cell from '../Cell/Cell'
import './Board.css'

function Board({ rows, cols, symbols, setSymbols, setShowWinningMessage }) {
	let totalCells = rows * cols
	const boardStyles = {
		gridTemplateColumns: `repeat(${cols}, auto)`,
		gridTemplateRow: `repeat(${rows}, auto)`
	}

	const [currentTurn, setCurrentTurn] = useState('x')

	return (
		<div
			className={'board ' + currentTurn}
			id='board'
			style={boardStyles}
		>
			{[...Array(totalCells)].map((cell, index) => (
				<Cell
					key={index}
					nCell={index}
					totalRows={rows}
					totalCols={cols}
					currentTurn={currentTurn}
					symbols={symbols}
					setSymbols={setSymbols}
					setCurrentTurn={setCurrentTurn}
					setShowWinningMessage={setShowWinningMessage}
				/>
			))}
		</div>
	)
}

export default Board