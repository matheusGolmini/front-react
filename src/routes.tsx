import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Lading'
import TeacherForm from './pages/TeacherForm'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;