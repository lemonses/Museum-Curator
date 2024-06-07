import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserExhibitProvider } from './components/contexts/UserExhibit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserExhibitProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserExhibitProvider>
    
    
)
