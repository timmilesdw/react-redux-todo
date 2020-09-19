import { Dash } from "./components/Dash";
import { Home } from "./components/Home";

export const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: 'todos', 
        component: Dash 
    }
]