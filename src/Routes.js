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
            profiles: [
                {
                    id: 1,
                    name: 'Napolean',
                    age: 7,
                    bio: 'acts like a dog'
                },
                {
                    id: 2,
                    name: 'Franklin',
                    age: 2,
                    bio: 'acts like a cat'
                },
                {
                    id: 3,
                    name: 'Sergeant',
                    age: 4,
                    bio: 'likes to claw late at night'
                }
            ]
            
        }
    }
    addCat = (name, age, bio)=>{
        const {profiles} = this.state
        console.log("addCat Ran")
        console.log(profiles)

        
        var newProfile = {  id: "NA",
                        name: document.getElementById("formName").value,
                        age: document.getElementById("formAge").value,
                        bio: document.getElementById("formBio").value
                    }
        profiles.push(newProfile)
        this.setState({profiles})
        console.log(profiles)
       
        
    }
    render(){
        const { profiles } = this.state
        const { addCat } = this
        return(
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" render={(props) => <SignUp {...props} addCat={addCat} />}/>
                <Route path="/catprofiles" render={(props) => <CatProfiles {...props} profiles={profiles} />} />
                </Switch>
            </div>
            );
    }
}