import { useEffect, useState } from "react"
import ExhibitTile from "./ExhibitTile"
import { getMetObjects, getVaObjects } from "../../api/api"
import ExhibitModal from "./ExhibitModal"
import { formatResponse } from "../../api/utilities"
import { useNavigate } from "react-router-dom"

function ExhibitContainer({searchTerm,page}){
    const [exhibits,setExhibits] = useState()
    const [maxPage,setMaxPage] = useState()
    const [error,setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [show,setShow] = useState(false)
    const [modalExhibit,setModalExhibit] = useState()
    const navigate = useNavigate()
    const handleClose = () => {setShow(false)}

    useEffect(()=>{
        setIsLoading(true)
        Promise.all([getMetObjects(searchTerm,page),getVaObjects(searchTerm,page)])
        .then((objects)=>{
            console.log(objects[0])
            if(objects[0] !== 'no results'){
                const vaTotal = objects[1][1]
                const metTotal = objects[0].pop()
                const newMaxPage = Math.ceil(Math.min(metTotal/20,vaTotal/20))
                setExhibits(objects[1][0].concat(objects[0]))
                setMaxPage(newMaxPage)
                setModalExhibit(formatResponse(objects[1][0][0]))
                setIsLoading(false)
                setError(false)
            }else{
                const vaTotal = objects[1][1]
                const newMaxPage = Math.ceil(vaTotal/20)
                setExhibits(objects[1][0])
                setModalExhibit(formatResponse(objects[1][0][0]))
                setMaxPage(newMaxPage)
                setIsLoading(false)
                setError(false)
            } 
        })
        .catch(err=>{
            console.log(err)
            setError(err)
            setIsLoading(false)
        })

    },[searchTerm,page])

    function createNavButtons(){
        let pageArr = [1]
        for(let i=0;i<8;i++){
            if((+page+i) !== 1 && (+page+i)<maxPage ){
                pageArr.push(+page+i)
            }
        }
        if(!pageArr.includes(maxPage)){
            pageArr.push(maxPage)
        }
        
        return <ol>
            {addPageDownButton()}
            {pageArr.map((i)=>{
                return <button className='nav-button' key={`unique${i}`} onClick={changePage}>{i}</button>
            })
            }
            {addPageUpButton()}
        </ol>
    }

    function addPageDownButton(){
        if(page>1){
            return <button className="nav-button" onClick={changePage}>{"<"}</button>
        }
    }

    function addPageUpButton(){
        if(page<maxPage){
            return <button className="nav-button" onClick={changePage}>{">"}</button>
        }
    }

    function changePage(e){
        if(e.target.innerText === '>'){
            page ++
            
        }else if(e.target.innerText === '<'){
            page --
        }else{
            page = e.target.innerText
        }
        navigate(`/search/${searchTerm}/${page}`)
    }

    if (error){
        return <p>An error has occured</p>
    }

    if (isLoading) {
        return <p>Loading ...</p>
    }
    return <div>
        <div>
        {createNavButtons()}
        </div>
        <ul className="gallery">
            {exhibits.map((exhibit,i)=>{
                return <li className="gallery-item" key={i}><ExhibitTile exhibit={exhibit} setShow={setShow} setModalExhibit={setModalExhibit}/></li>
            })}
        </ul>
        <ExhibitModal exhibit={modalExhibit} show={show} onHide={handleClose}/>
        <div>
        {createNavButtons()}
        </div>
    </div>
}

export default ExhibitContainer