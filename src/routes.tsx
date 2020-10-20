import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produts from './pages/Products'
import Contact from './pages/Contact'
import SugnUp from './pages/SignUp'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/Products" exact component={Produts}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/SignUp" exact component={SugnUp}/>
        </BrowserRouter>
    )
}

export default Routes;