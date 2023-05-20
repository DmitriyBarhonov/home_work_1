import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                return state.sort((a: UserType, b: UserType)=> a.name > b.name ? 1: -1 )  
            }
            if (action.payload === "down") {
                return state.sort((a: UserType, b: UserType)=> a.name < b.name ? 1: -1 )  
            }

            return state // need to fix
        }
        case 'check': {

            return [...state].filter(el => el.age >= 18 ? el : null) // need to fix
        }
        default:
            return state
    }
}
