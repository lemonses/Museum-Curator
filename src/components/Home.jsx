import ExhibitContainer from "./exhibits/ExhibitContainer"
import { useParams } from "react-router-dom"

function Home ({search}){
    let page
    if (!search){
        search = useParams().searchTerm
        page = useParams().page
    }else page = 1
    return (<>
        <ExhibitContainer searchTerm={search} page={page}/>
    </>)
}

export default Home