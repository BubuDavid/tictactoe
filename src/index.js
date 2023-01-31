import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { TTProvider } from './Hooks/Context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<TTProvider>
	    <App />
		</TTProvider>
  </React.StrictMode>
)