import { useState } from "react"
import Board from "./Components/Board/Board"
import WinningMessage from './Components/WinningMessage/WinningMessage'

function App() {
	const rows = 3, cols = 3
	const totalCells = rows * cols
	const initialSymbols = Array.from(Array(totalCells), () => (''))
	const [symbols, setSymbols] = useState(initialSymbols)
	const [showWinningMessage, setShowWinningMessage] = useState(false)
  return (
		<div className="App">
			<Board
				rows={3}
				cols={3}
				symbols={symbols}
				setSymbols={setSymbols}
				setShowWinningMessage={setShowWinningMessage}
			/>
			<WinningMessage
				showWinningMessage={showWinningMessage}
				winnerMessage={'Las X ganaron'}
			/>
    </div>
  )
}

export default App
