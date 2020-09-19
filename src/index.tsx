import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

import { Provider as AlertProvider } from 'react-alert'

import { AlertTemplate } from './components/Alert'
import { options } from './alert.config'

import './styles/index.css'

ReactDOM.render(
	<AlertProvider template={AlertTemplate} {...options}>
		<Provider store={store}>
			<App />
		</Provider>,
	</AlertProvider>,
	document.getElementById('root')
);