import { useEffect, useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import SearchResults from "./SearchResults"

const SearchForm = () => {
    const [countrylistLoaded, setCountrylistLoaded] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [countryName, setCountryName] = useState('')
    const { searchUniversities, loadCountryList } = useActions()

    const { loading, error, data } = useTypedSelector((state) => state.universities)
    const countryListData = useTypedSelector((state) => state.countries.data)
    useEffect(() => {
        if (!countrylistLoaded) {
            loadCountryList()
            setCountrylistLoaded(true)
        }
    }, [])
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchUniversities(countryName, searchText)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={searchText}
                    placeholder="University name text"
                    onChange={(e) => setSearchText(e.target.value)} />
                <select
                    name="countries"
                    onChange={(e) => setCountryName(e.target.value)}>
                    <option>--All countries--</option>
                    {countryListData
                        && countryListData.length > 0
                        && countryListData.map((country) => <option value={country}>{country}</option>)}
                </select>
                <button>Search</button>
            </form>
            {loading && <span>Loading...</span>}
            {error && <span>{error}</span>}
            {data && data.map((universityData, index) =>
                <SearchResults
                    name={universityData.name}
                    index={index}
                    webPage={universityData.webPage} />)}
        </div>
    )
}

export default SearchForm