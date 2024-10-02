import { v1 } from "uuid";
import { TaskType } from "../App";

type TodolistReducerActionsType = AddTaskACType | RemoveTaskACType | ChangeTaskStatusACType

// type AddTaskACType = {
//     type: 'ADD_TASK',
//     payload: {
//         title: string
//     }
// }

// type RemoveTaskACType = {
//     type: 'REMOVE_TASK',
//     payload: {
//         id: string
//     }
// }

// type ChangeTaskStatusACType = {
//     type: 'CHANGE_TASK_STATUS',
//     payload: {
//         taskId: string, 
//         taskStatus: boolean
//     }
// }

type AddTaskACType = ReturnType<typeof addTaskAC>;
type RemoveTaskACType = ReturnType<typeof removeTaskAC>;
type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>;

export const addTaskAC = (title: string) => {
    return {
        type: 'ADD_TASK' as const,
        payload: {
            title
        }
    }
} 

export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE_TASK' as const,
        payload: {
            id
        }
    }
}

export const changeTaskStatusAC = (taskId: string, taskStatus: boolean) => {
    return {
        type: 'CHANGE_TASK_STATUS' as const,
        payload: {
            taskId, 
            taskStatus
        }
    }
}
export const todolistsReducer = (state: TaskType[], action: TodolistReducerActionsType) => {
    switch (action.type) {
        case 'ADD_TASK': 
             const newTask = {
                 id: v1(),
                 title: action.payload.title,
                 isDone: false
             }
            return [newTask, ...state]
        
        case 'REMOVE_TASK':
            return state.filter((task) => task.id !== action.payload.id)

        case 'CHANGE_TASK_STATUS':
            return state.map(t => t.id === action.payload.taskId ? {...t, isDone: action.payload.taskStatus} : t )

        default:
            return state
    }
}




