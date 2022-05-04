import { ActionType } from "../action-types";
import { CountryLoadAction } from "../actions";

interface CountriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const countriesReducer = (state: CountriesState = initialState, action: CountryLoadAction): CountriesState => {
    switch (action.type) {
        case ActionType.LOAD_COUNTRIES:
            return { loading: true, error: null, data: [] }
        case ActionType.LOAD_COUNTRIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.LOAD_COUNTRIES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default: return state;
    }
}

export default countriesReducer;