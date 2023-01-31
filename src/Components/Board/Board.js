import React, { useContext } from 'react'
import TTContext from '../../Hooks/Context'
import Cell from '../Cell/Cell'
import './Board.css'

function Board() {

	const {
		currentTurn,
		totalCells,
		rows, cols
	} = useContext(TTContext)

	const boardStyles = {
		gridTemplateColumns: `repeat(${cols}, auto)`,
		gridTemplateRow: `repeat(${rows}, auto)`
	}


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
				/>
			))}
		</div>
	)
}

export default Board