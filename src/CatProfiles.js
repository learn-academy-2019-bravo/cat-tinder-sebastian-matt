import React, {Component} from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

export default class CatProfiles extends Component {
 render(){ 
     const { profiles } = this.props
     function displayProfiles(profs){
         return profs.map((value, index)=>{
            return (
                <Card id="single-profile">
                        <h2>{value.name}</h2>
                        <h2>Age: {value.age}</h2>
                        <h2>Bio: {value.bio}</h2>
                </Card>)
         })
     }
     return (
        <div>
        <h1>Cat Profiles</h1>
        {displayProfiles(profiles)}
        </div>
      );
    }
}

