import React from 'react'
import './Cell.css'

function Cell({ nCell, totalRows, totalCols, symbols, setSymbols, currentTurn, setCurrentTurn, setShowWinningMessage }) {
	let top = true,
		bottom = true,
		left = true,
		right = true,
		totalCells = totalRows * totalCols,
		borderStyle = '1px solid black',
		thisClass = 'cell ' + symbols[nCell]
	
	if (nCell >= 0 && nCell < totalCols) top = false
	if (nCell >= totalCells - totalRows) bottom = false
	if (nCell % totalCols === 0) left = false
	if ((nCell + 1) % totalCols === 0) right = false


	const cellStyles = {
		borderBottom: bottom ? borderStyle: 'none',
		borderTop: top ? borderStyle: 'none',
		borderLeft: left ? borderStyle: 'none',
		borderRight: right ? borderStyle: 'none',
	}

	const drawOnCell = (nCell, currentTurn, setCurrentTurn, symbols, setSymbols) => {
		const newSymbols = [...symbols]
		if (newSymbols[nCell] === '') newSymbols[nCell] = currentTurn
		else return

		if (currentTurn === 'x') setCurrentTurn('circle')
		if (currentTurn === 'circle') setCurrentTurn('x')

		setSymbols(newSymbols)

		checkIfWinner(symbols, setShowWinningMessage)
	}

	const checkIfWinner = (symbols, setShowWinningMessage) => {
		const winningStates = [
			
		]
	}

	return (
		<div
			className={thisClass}
			style={cellStyles}
			onClick={() => drawOnCell(nCell, currentTurn, setCurrentTurn, symbols, setSymbols)}
		>
		</div>
	)
}

export default Cell