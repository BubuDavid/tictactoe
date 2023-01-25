import React from 'react'
import './WinningMessage.css'

function WinningMessage() {
	return (
		<div
			className='winning-message'
			id='winningMessage'
		>
			<div data-winning-message-text></div>
			<button id="restartButton">Restart</button>
		</div>
	)
}

export default WinningMessage