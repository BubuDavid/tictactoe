import React, { useContext } from 'react'
import TTContext from '../../Hooks/Context'
import './Cell.css'

function Cell({ nCell }) {
	
	const {
		rows, cols,
		symbols,
		drawOnCell
	} = useContext(TTContext)
	
	let top = true,
		bottom = true,
		left = true,
		right = true,
		totalCells = rows * cols,
		borderStyle = '1px solid black',
		thisClass = 'cell ' + symbols[nCell]
	
	if (nCell >= 0 && nCell < cols) top = false
	if (nCell >= totalCells - rows) bottom = false
	if (nCell % cols === 0) left = false
	if ((nCell + 1) % cols === 0) right = false


	const cellStyles = {
		borderBottom: bottom ? borderStyle: 'none',
		borderTop: top ? borderStyle: 'none',
		borderLeft: left ? borderStyle: 'none',
		borderRight: right ? borderStyle: 'none',
	}

	return (
		<div
			className={thisClass}
			style={cellStyles}
			onClick={() => drawOnCell(nCell)}
		>
		</div>
	)
}

export default Cell