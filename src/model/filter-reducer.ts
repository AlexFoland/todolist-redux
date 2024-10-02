import { FilterValuesType } from "../App"

type ChangeFilterACType = {
    type: 'CHANGE_FILTER',
    payload: {
        filter: FilterValuesType
    }
}

export const changeFilterAC = (filter: FilterValuesType) => {
    return {
        type: 'CHANGE_FILTER',
        payload: {
            filter
        }
    } as const
}

export const filterTasksReducer = (state: FilterValuesType, action: ChangeFilterACType) => {
    switch (action.type) {
        case 'CHANGE_FILTER': 
            return action.payload.filter

        default: 
            return state
    }
} 

