import React from 'react';
import {Route} from 'react-router-dom';
import './css/index.css';

import Landing from './Components/landing';
import Enrollment from "./Components/enrollment";
import Employment from "./Components/Employment";

function App() {
  return (

    <div className="App">

        <Route exact path = '/'>

            <Landing />

        </Route>

        <Route path ='/enrollment'>

            <Enrollment />

        </Route>

        <Route path ='/employment'>

            <Employment />

        </Route>



    </div>
  );
}

export default App;
