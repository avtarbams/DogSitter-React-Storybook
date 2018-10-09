import { fetchGETApiData } from "../../network/APIManager";
import { TYPES } from "./Constants";

export function fetchRequest() {
    const apiUrl = '';
    return (dispatch: any) => {
        fetchGETApiData(apiUrl, {}, TYPES.ONE, dispatch)
    }
}


/**
 * Reducer for the TableData & Actions
 * @param state 
 * @param action 
 */
export function ExampleReducer(state: {}, action: any) {
    switch (action.type) {
        case TYPES.ONE:
            return { ...state, ONE: action.payload };
        case TYPES.TWO:
            return { ...state, TWO: action.payload };
        case TYPES.THREE:
            return { ...state, THREE: action.payload };
        default:
            return { ...state }
    }
}
