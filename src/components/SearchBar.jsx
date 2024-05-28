import { useEffect, useState } from "react"

function SearchBar({search,setSearch}) {
    const [currSearch, setCurrSearch] = useState('')

    function updateSearch(e){
        e.preventDefault()
        setCurrSearch(e.target.value)
    }

    function search() {
        setSearch(currSearch)
    }

    return <div>
        <input type="text" onChange={updateSearch} value={currSearch} placeholder="Search Here"></input>
        <button onClick={search}>Search</button>
    </div> 
}

export default SearchBar