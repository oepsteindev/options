import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';


import FairValue from './components/options/fairvalue'


import './App.css'

const App = () => {


 

    return (

        <div><Navbar bg="dark" variant="dark">Options :: Fair Value Calculator</Navbar>
        <div className='container'>
        <FairValue></FairValue>
            </div>
            </div>
    );
}

export default App
