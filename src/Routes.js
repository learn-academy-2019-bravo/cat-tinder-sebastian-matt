import React, {Component} from 'react'
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom'

//Routes
import CatProfiles from './CatProfiles'
import Home from './HomePg'
import SignUp from './signUp'

export default class Routes extends Component{
    
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/catprofiles" component={CatProfiles} />
                </Switch>
            </div>
            );
    }
}