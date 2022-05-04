import { UniversityData } from "../state/actions"

export interface UniversityDataVisual extends UniversityData {
    index: number;
}

const SearchResults: React.FC<UniversityDataVisual> = ({ name, webPage, index }) => {
    return <div>
        {index + 1}.
        {webPage &&
            <a
                href={webPage}
                target="_blank"
                rel="noreferrer">{name}</a>}
        {!webPage && name}
    </div>
}

export default SearchResults