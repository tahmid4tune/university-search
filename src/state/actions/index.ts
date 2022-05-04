import { ActionType } from "../action-types";

interface SearchUniversitiesAction {
    type: ActionType.SEARCH_UNIVERSITIES;
}

export interface UniversityData {
    name: string;
    webPage: string;
}

interface SearchUniversitiesSuccessAction {
    type: ActionType.SEARCH_UNIVERSITIES_SUCCESS;
    payload: UniversityData[];
}
interface SearchUniversitiesErrorAction {
    type: ActionType.SEARCH_UNIVERSITIES_ERROR;
    payload: string;
}

export type Action = | SearchUniversitiesAction
    | SearchUniversitiesSuccessAction
    | SearchUniversitiesErrorAction

interface LoadCountryListAction {
    type: ActionType.LOAD_COUNTRIES;
}

interface LoadCountriesSuccessAction {
    type: ActionType.LOAD_COUNTRIES_SUCCESS;
    payload: string[];
}
interface LoadCountriesErrorAction {
    type: ActionType.LOAD_COUNTRIES_ERROR;
    payload: string;
}


export type CountryLoadAction = | LoadCountryListAction
    | LoadCountriesSuccessAction
    | LoadCountriesErrorAction
