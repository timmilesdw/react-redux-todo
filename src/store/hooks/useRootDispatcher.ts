import { useDispatch } from 'react-redux'
import { ActionType, ITodo } from '../root-reducer'

export const useRootDispatcher = () => {
    const dispatch = useDispatch()
    return {
        createTodo: (values: ITodo) => dispatch({ type: ActionType.AddTodo, payload: { ...values, id: Math.round(Math.random() * 100), completed: false }}),
        deleteTodo: (id: number) => dispatch({ type: ActionType.DeleteTodo, payload: { id } }),
        completeTodo: (id: number) => dispatch({ type: ActionType.CompleteTodo, payload: { id } }),
    }
}