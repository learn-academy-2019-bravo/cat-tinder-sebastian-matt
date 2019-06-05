import React, {Component} from 'react';
import './App.css';
import { Card } from 'react-bootstrap';


export default class SingleProfile extends Component {
 render(){ 
     const { profiles } = this.props
     return (
        <Card>
            <h3>{profiles[0].name}</h3>
            <h3>{profiles[1].name}</h3>
            <h3>{profiles[2].name}</h3>
        </Card>
      );
    }
}

