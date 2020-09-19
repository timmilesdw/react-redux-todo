import React from 'react'
import { Alert } from 'antd'

const AlertTemplate = ({ message, options, style }: any) => {
	return (
		<Alert
			style={{ ...style }}
			showIcon
			closable
			message={message}
			type={
				options.type === 'info'
					? 'info'
					: options.type === 'error'
					? 'error'
					: options.type === 'warning'
					? 'warning'
					: options.type === 'success'
					? 'success'
					: 'info'
			}
		>
			{ message }
		</Alert>
	)
}

export { AlertTemplate }
