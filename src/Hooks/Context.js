import { createContext, useState } from "react"

const TTContext = createContext()

function TTProvider(props) {
	const rows = 3,
		cols = 3,
		totalCells = rows * cols,
		initialSymbols = Array.from(Array(totalCells), () => (''))
	
	const [symbols, setSymbols] = useState(initialSymbols)
	const [showWinningMessage, setShowWinningMessage] = useState(false)
	const [currentTurn, setCurrentTurn] = useState('x')

	const checkIfWinner = () => {
		return 0
	}

	const getModelMove = () => {
		
	}

	const drawOnCell = (nCell) => {
		const newSymbols = [...symbols]
		if (newSymbols[nCell] === '') newSymbols[nCell] = currentTurn
		else return

		if (currentTurn === 'x') setCurrentTurn('circle')
		if (currentTurn === 'circle') setCurrentTurn('x')

		setSymbols(newSymbols)

		checkIfWinner(symbols, setShowWinningMessage)
	}

	return (
		<TTContext.Provider value={{
			rows, cols, totalCells,
			symbols, setSymbols,
			showWinningMessage, setShowWinningMessage,
			currentTurn, setCurrentTurn,
			drawOnCell
		}} >
			{props.children}
		</TTContext.Provider>
	)
}


export default TTContext
export { TTProvider }