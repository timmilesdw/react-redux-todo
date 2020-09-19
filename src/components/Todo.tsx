import React from 'react'

import { Button, Card } from 'antd'
import { InitialState } from '../store/root-reducer'

import { CheckOutlined } from '@ant-design/icons'

interface Props extends InitialState {
    handleDelete: (id: number) => void
    handleComplete: (id: number) => void
}

export const Todo: React.FC<Props> = ({ id, title, description, completed, handleDelete, handleComplete }) => { 
    return (
        <Card 
            title={ title } 
            extra={
                <>
                    <Button onClick={() => { handleComplete(id) }} type="link">Complete</Button>
                    <Button onClick={() => { handleDelete(id) }} type="link">Delete</Button>
                    { completed ? <CheckOutlined /> : null }
                </>
            } 
            style={{ width: 300 }}
            hoverable
            >
            { description ? <p>{description}</p> : <p>no description here</p> }
        </Card>
    )
}
