import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ExhibitContainer from './components/exhibits/ExhibitContainer'
import Home from './components/Home'

function App() {

  return <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    
  </>
    
  
}

export default App
