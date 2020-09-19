import { Action, Reducer } from 'redux'

export interface InitialState  {
    id: number
    title: string,
    description?: string
    completed: boolean
}

export interface ITodo {
    title: string,
    description?: string
}

export const initialState: InitialState[] = [
    { id: 1, title: 'Yo!', description: 'Try adding some todos!', completed: false },
]

export enum ActionType {
    AddTodo,
    DeleteTodo,
    CompleteTodo
} 

export interface DispatchAction extends Action {
    payload: InitialState
}

const Actions = {
    [ActionType.AddTodo]: (state: InitialState[], { payload }: DispatchAction): InitialState[] => ([ ...state, payload ]),
    [ActionType.DeleteTodo]: (state: InitialState[], { payload }: DispatchAction): InitialState[] => state.filter((el) => el.id !== payload.id) ,
    [ActionType.CompleteTodo]: (state: InitialState[], { payload }: DispatchAction): InitialState[] =>  state.map(
        (todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
    ),
    default: (state: InitialState[]) => state
}



export const rootReducer: Reducer<InitialState[], DispatchAction> = (state = initialState, action) => {
    const reducerReturn = Actions[action.type as ActionType] || Actions.default

    return reducerReturn(state, action)
}