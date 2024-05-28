import { useState } from "react"
import SearchBar from "./SearchBar"
import ExhibitContainer from "./exhibits/ExhibitContainer"

function Home (){
    const [search, setSearch] = useState("painting")
    return (<>
        <SearchBar setSearch={setSearch}/>
        <ExhibitContainer searchTerm={search}/>
    </>)
}

export default Home