import React from 'react'
import Cell from '../Cell/Cell'
import './Board.css'

function Board({ rows, cols }) {
	let totalCells = rows * cols
	const boardStyles = {
		gridTemplateColumns: `repeat(${cols}, auto)`,
		gridTemplateRow: `repeat(${rows}, auto)`
	}

	return (
		<div
			className='board x'
			id='board'
			style={boardStyles}
		>
			{[...Array(totalCells)].map((cell, index) => (
				<Cell
					key={index}
					nCell={index}
					totalRows={rows}
					totalCols={cols}
				/>
			))}
		</div>
	)
}

export default Board