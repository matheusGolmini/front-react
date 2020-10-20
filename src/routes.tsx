import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produts from './pages/Products'
import Contact from './pages/Contact'
import SugnUp from './pages/SignUp'
import Login from './pages/Login'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/Products" exact component={Produts}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/SignUp" exact component={SugnUp}/>
            <Route path="/Login" exact component={Login}/>
        </BrowserRouter>
    )
}

export default Routes;