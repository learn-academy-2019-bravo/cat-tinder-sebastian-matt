import React, {Component} from 'react';
import './App.css';
import {
    Route, Link
} from 'react-router-dom'


export default class Home extends Component {
 render(){ 
     return (
        <div>
            <h1>"home"</h1>
            <Route>
            <nav>
             <ul>
               <li>
                <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/signup/">Signup</Link>
               </li>
               <li>
                 <Link to="/catprofiles/">Profiles</Link>
               </li>
               <li>
               <Link to="/newcat/">Add Cat</Link>
               </li>
             </ul>
           </nav>
            </Route>
        </div>
      );
    }
}


