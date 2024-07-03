import {AppStateType} from "../store";
export const getSearch = (state : AppStateType) : boolean => {
    return state.loaderData.search
}