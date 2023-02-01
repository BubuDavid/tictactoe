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

	const drawOnCell = (nCell, onlyModelMove = false) => {
		
		const newSymbols = [...symbols]
		if (!onlyModelMove) {
			if (newSymbols[nCell] === '') newSymbols[nCell] = currentTurn
			else return

			// if (currentTurn === 'x') setCurrentTurn('circle')
			// if (currentTurn === 'circle') setCurrentTurn('x')

			setSymbols(newSymbols)
			checkIfWinner()
		}

		let nextModelMove = getModelMove(nCell)
		if (nextModelMove !== nCell) {
			newSymbols[nextModelMove] = 'circle'
			setSymbols(newSymbols)
			checkIfWinner()
		}

	}

	const getModelMove = (nCell) => {
		let nextMove = -1;
		while (true) {
			nextMove = Math.floor(Math.random() * (totalCells))
			if (symbols[nextMove] === '' && nextMove !== nCell) break
			
			let freeCounter = 0
			for (const symbol of symbols)
				if (symbol === '')
					freeCounter += 1
			
			if (freeCounter <= 1) break
		}
		return nextMove
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