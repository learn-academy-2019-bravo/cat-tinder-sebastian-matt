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
import NewCat from './NewCat'
import { getCats } from './api'

export default class Routes extends Component{
    constructor(props){
        super(props)
        this.state={
            cats: []
        }
    }
        componentWillMount() {
      getCats().then(APIcats => {
    	    debugger
    	  this.setState({ cats: APIcats })
    	})
    }
    render(){
        const { cats } = this.state
        const { addCat } = this
        return(
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" render={(props) => <SignUp {...props} addCat={addCat} />}/>
                <Route path="/newcat" component={NewCat}/>
                <Route path="/catprofiles" render={(props) => <CatProfiles cats={cats} />} />
                </Switch>
            </div>
            );
    }
}