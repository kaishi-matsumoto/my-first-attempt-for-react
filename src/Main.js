import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

const Main = () =>{
    return(
        <Router>
            <Bar1>
                
                    <ul className="navbar">
                        <li className="bar_item"><Link className="bar_link" to="/">Home</Link></li>
                        <li className="bar_item"><Link className="bar_link" to="/about">About</Link></li>
                        {/* <li className="bar_item"><Link className="bar_link" to="/contact">Contact</Link></li> */}
                    </ul>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/about'} component={About} />
            </Bar1>        
        </Router>
    )
}



const Bar1 = styled.div`
    padding: 40px;
    .bar_item{
        display: flex;
    }
    .bar_link:hover{
        top: 7px;
    }
`;





export default Main;
