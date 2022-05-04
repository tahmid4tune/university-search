import axios from "axios";
import { ActionType } from "../action-types";
import { Action, CountryLoadAction, UniversityData } from "../actions";
import { Dispatch } from "redux";
import { COUNTRY_LIST_API_URL, UNIVERSITY_API_URL } from "../../utils/api-url";

export const searchUniversities = (country: string | null = null, name: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_UNIVERSITIES
        });
        try {
            const { data } = await axios.get(`${UNIVERSITY_API_URL}`,
                {
                    params:
                    {
                        name: name,
                        ...(country && { country: country })
                    }
                })
            const names: UniversityData[] = data.map((result: any) => Object.assign(
                {
                    name: result.name,
                    ...(result.web_pages?.length && { webPage: result.web_pages[0] })
                }))

            dispatch({ type: ActionType.SEARCH_UNIVERSITIES_SUCCESS, payload: names })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_UNIVERSITIES_ERROR,
                payload: error.message
            })
        }
    }
}

export const loadCountryList = () => {
    return async (dispatch: Dispatch<CountryLoadAction>) => {
        dispatch({
            type: ActionType.LOAD_COUNTRIES
        });
        try {
            const { data } = await axios.get(`${COUNTRY_LIST_API_URL}`)
            const names = data.map((result: any) => result.name.common).sort()

            dispatch({ type: ActionType.LOAD_COUNTRIES_SUCCESS, payload: names })
        } catch (error: any) {
            dispatch({
                type: ActionType.LOAD_COUNTRIES_ERROR,
                payload: error.message
            })
        }
    }
}