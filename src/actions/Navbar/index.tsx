import { HOME } from "./Constants";

export function setSelectedNavItem(navId: number) {
    return (dispatch: any) => {
        dispatch({ type: HOME.NAVBARITEM, payload: navId });
    }
}

export function setSelectedSubNavItem(navId: number) {
    return (dispatch: any) => {
        dispatch({ type: HOME.SUBNAVBARITEM, payload: navId });
    }
}



export function NavBarReducer(state: {}, action: any) {
    switch (action.type) {
        case HOME.NAVBARITEM:
            return { ...state, NAVBARITEM: action.payload };
        case HOME.SUBNAVBARITEM:
            return { ...state, SUBNAVBARITEM: action.payload };
        default:
            return { ...state }
    }
}