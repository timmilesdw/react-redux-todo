import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Button } from 'antd'
import { TodoAdd } from './TodoAdd'
import { Todo } from './Todo'
import { useSelector } from 'react-redux'
import { InitialState } from '../store/root-reducer'
import { useRootDispatcher } from '../store/hooks/useRootDispatcher'

interface Props extends RouteComponentProps {}


export const Dash: React.FC<Props> = () => {
    
    const [addTodo, setAddTodo] = useState<boolean>(false)

    const handleShowAdd = () => setAddTodo(!addTodo)

    const state = useSelector<InitialState[], InitialState[]>((state: InitialState[]) => state)

    const rootDispatcher = useRootDispatcher()

    const handleDelete = (id: number) => {
        rootDispatcher.deleteTodo(id)
        console.log(`${id} deleted`)
    }

    const handleComplete = (id: number) => {
        rootDispatcher.completeTodo(id)
        console.log(`${id} completed`)
    }

    return (
        <div className="container todos">
            <Button onClick={handleShowAdd}> Add Todo </Button>
            { addTodo && <TodoAdd /> }
            <div className="todos-grid">
                { state && state.map((todo, i) => <Todo key={i} { ...{...todo, handleDelete, handleComplete } } />) }
            </div>
        </div>
    )
}
