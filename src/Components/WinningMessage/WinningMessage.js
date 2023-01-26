import React, {useState} from 'react'
import './WinningMessage.css'

function WinningMessage({ showWinningMessage, winnerMessage }) {
	let thisClass = 'winning-message'
	thisClass = thisClass + (showWinningMessage ? ' show' : null)
	
	return (
		<div
			className={thisClass}
			id='winningMessage'
		>
			<div>{winnerMessage}</div>
			<button id="restartButton">Restart</button>
		</div>
	)
}

export default WinningMessage