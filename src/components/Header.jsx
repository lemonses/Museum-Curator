import { useNavigate } from "react-router-dom"

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
        <button onClick={myExhibitNav}>My Exhibit</button>
        <button onClick={homeNav}>Home</button>
    </div>
}

export default Header