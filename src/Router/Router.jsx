import React, { Component } from 'react'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import { BrowserRouter , Route , Link } from "react-router-dom"

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/"><Step1 /></Route>
                    <Route path="/step2"><Step2 /></Route>
                </BrowserRouter>   
                
            </div>
        )
    }
}
