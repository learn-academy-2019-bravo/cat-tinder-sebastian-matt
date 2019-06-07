import React, {Component} from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

export default class CatProfiles extends Component {
 render(){ 
     const { cats } = this.props
     function displayProfiles(){
         return cats.map((value, index)=>{
            return (
                <div>
                    <Card id="single-profile">
                            <h2>{value.name}</h2>
                            <h2>Age: {value.age}</h2>
                            <h2>Bio: {value.enjoys}</h2>
                    </Card>
                </div>
            )
         })
     }
     return (
        <div>
            <h1>Cat Profiles</h1>
            <div id="profiles-grid">
            {displayProfiles()}
            </div>
        </div>
      );
    }
}

