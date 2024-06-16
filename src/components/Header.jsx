import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"

function Header(){
    const navigate = useNavigate()
    function myExhibitNav(){
        navigate('/myExhibit')
    }
    function homeNav(){
        navigate('/')
    }
    return <div>
        <h1>Museum Curator</h1>
        <button className="nav-button" onClick={myExhibitNav}>My Exhibit</button>
        <button className="nav-button" onClick={homeNav}>Home</button>
        <SearchBar/>
    </div>
}

export default Header