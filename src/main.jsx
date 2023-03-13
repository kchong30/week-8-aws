import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthPage from './Auth/Page'
import App from "./App"
import './index.css'
import {Routes, Route, BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<AuthPage/>}/>
        <Route path = "/home" element = {<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
