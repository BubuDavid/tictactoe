import React from 'react'
import './Cell.css'

function Cell({ nCell, totalRows, totalCols, symbol }) {
	let top = true,
		bottom = true,
		left = true,
		right = true,
		totalCells = totalRows * totalCols,
		borderStyle = '1px solid black',
		thisClass = 'cell ' + symbol
	
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

	return (
		<div
			className={thisClass}
			style={cellStyles}
			data-cell
		>
		</div>
	)
}

export default Cell