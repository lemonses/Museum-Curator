import {useState} from "react"
import { useNavigate } from "react-router-dom"

function SearchBar() {
    const navigate = useNavigate()
    const [currSearch, setCurrSearch] = useState('')

    function updateSearch(e){
        e.preventDefault()
        setCurrSearch(e.target.value)
    }

    function search() {
        if(currSearch){
            navigate(`/search/${currSearch}/1`)
            setCurrSearch('')
        }
    }

    return <div>
        <input id='searchBar' type="text" onChange={updateSearch} value={currSearch} placeholder="Search Here"></input>
        <button className="nav-button" onClick={search}>Search</button>
    </div> 
}

export default SearchBar