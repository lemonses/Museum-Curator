import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import MyExhibit from './components/MyExhibit'
import PageNotFound from './components/PageNotFound';

function App() {

  return <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home search="painting"/>}></Route>
      <Route path='/search/:searchTerm/:page' element={<Home/>}></Route>
      <Route path='/myExhibit' element={<MyExhibit/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
    </Routes>
    
  </>
    
  
}

export default App
