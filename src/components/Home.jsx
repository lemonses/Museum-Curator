import SearchBar from "./SearchBar"
import ExhibitContainer from "./exhibits/ExhibitContainer"
import { useParams } from "react-router-dom"

function Home ({search}){
    let page
    if (!search){
        search = useParams().searchTerm
        page = useParams().page
    }else page = 1
    return (<>
        <SearchBar/>
        <ExhibitContainer searchTerm={search} page={page}/>
    </>)
}

export default Home