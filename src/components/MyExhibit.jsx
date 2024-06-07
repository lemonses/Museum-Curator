import { useContext } from "react"
import { UserExhibitContext } from "./contexts/UserExhibit"

function MyExhibit(){
    const {userExhibit} = useContext(UserExhibitContext)
    console.log(userExhibit)
    return <div>
    <ul>
        {userExhibit.map((exhibit,i)=>{
            return <li key={i}><p>{exhibit.title}</p></li>
        })}
    </ul>
</div>
}

export default MyExhibit