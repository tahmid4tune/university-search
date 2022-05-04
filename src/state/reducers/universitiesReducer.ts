import { ActionType } from "../action-types";
import { Action, UniversityData } from "../actions";

interface UniversitiesState {
    loading: boolean;
    error: string | null;
    data: UniversityData[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const universitiesReducer = (state: UniversitiesState = initialState, action: Action): UniversitiesState => {
    switch (action.type) {
        case ActionType.SEARCH_UNIVERSITIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_UNIVERSITIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_UNIVERSITIES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default: return state;
    }
}

export default universitiesReducer;