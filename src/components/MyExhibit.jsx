import { useContext } from "react"
import { UserExhibitContext } from "./contexts/UserExhibit"

function MyExhibit(){
    const {userExhibit,setUserExhibit} = useContext(UserExhibitContext)

    if(!userExhibit.length){
        return <p>You're gallery is empty search for something to add it to the gallery</p>
    }

function removeFromExhibit(exhibit){
    setUserExhibit(userExhibit =>{
        let userCopy = [...userExhibit]
        const arrayNum = userExhibit.indexOf(exhibit)
        userCopy.splice(arrayNum,1)
        return userCopy
    })
}

    return <>
    <ul className="gallery">
        {userExhibit.map((exhibit,i)=>{
            return <li className="gallery-item" key={i}>
                <p>{exhibit.title}</p>
                <img src={exhibit.image} alt={exhibit.title}/>
                <p>Created by {exhibit.artist} {exhibit.date}</p>
                {exhibit.link !== "link unknown"?(
                        <p>View more about this piece <a href={exhibit.link}>here</a></p>
                    ):<p>The link to this piece could not be found</p>}
                    <button className="nav-button" onClick={()=>{removeFromExhibit(exhibit)}}>Remove from exhibit</button>
            </li>
        })}
    </ul>
</>
}

export default MyExhibit