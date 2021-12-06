import {ADD_TASK} from '../Constants/action-types'
import {TASK_IS_DONE} from '../Constants/action-types'
import {EDIT_TASK } from '../Constants/action-types'


const initialState ={
    todos: [
        {
            task: "Start Learning FullStuck JS",
            done: true,
            id: Math.random()
        },
        {
            task: " Finish the front-end Part",
        done: true,
        id: Math.random()
        },
        {
            task: "Finish the Back-end Part ",
        done: false,
        id: Math.random()
        },
        {
            task: "Learn Redux",
        done: true,
        id: Math.random()
        },
        
            
        ]
    }
    
    export default function toDosReducer (state=initialState , action){
        const {type, payload} =action;
        switch (type) { 
            case (ADD_TASK):{
                return {
                todos:[
                    ...state.todos, 
                    { 
                    task: payload.newToDo,
                    done: false,
                    id: Math.random() 
                    }
                    ]
                }
            }

            case (TASK_IS_DONE):{
                return {
                todos: state.todos.map(task=> task.id === payload.id ? {...task, done: !task.done} : task)
                }
            }

            case (EDIT_TASK ):{
              
                return {
                todos: state.todos.map(object=> object.id === payload.id ? {...object, task: payload.task} : object)  
            }
            }
            
        
            default:
                return state;
        
        }
    }