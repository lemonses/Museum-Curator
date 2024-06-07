import { createContext, useEffect, useState } from "react";

export const UserExhibitContext = createContext()

export const UserExhibitProvider = ({children}) => {
    const [userExhibit,setUserExhibit] = useState(()=>{
        if(window?.sessionStorage){
            const stickyExhibit = window.sessionStorage.getItem('userExhibit')
            if(stickyExhibit === null){
                return []
            }else{
                return JSON.parse(stickyExhibit)
            }
        }
    })

    useEffect(()=>{
        if(window.sessionStorage){
            window.sessionStorage.setItem('userExhibit',JSON.stringify(userExhibit))
        }
    },[userExhibit])

    return (
        <UserExhibitContext.Provider value={{userExhibit,setUserExhibit}}>
            {children}
        </UserExhibitContext.Provider>
    )
}