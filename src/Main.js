import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

/* import { Link as LinkS } from 'react-scroll'; */

import Home from './components/Home';
import About from './components/About';
import PageApp from './PageApp';
import { MobileIcons } from './components/NavbarElements';
import { FaBars } from 'react-icons/fa';

const Main = () =>{
    return(
        <Router>
            <Bar1>
                <MobileIcons>
                    <FaBars />
                </MobileIcons>
                <NavBarContainer className="navbar">
                    <NavLogo className="bar_item"><NavLinks className="bar_link" to="/">Home</NavLinks></NavLogo>
                    <NavLogo className="bar_item"><NavLinks className="bar_link" to="/about">About</NavLinks></NavLogo>
                    <NavLogo className="bar_item"><NavLinks className="bar_link" to="/page">Page</NavLinks></NavLogo>
                </NavBarContainer>
                
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route path={'/page'} component={PageApp} />
            </Bar1>        
        </Router>
    ) 
}

const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`

const Bar1 = styled.nav`
    margin-left: -40px;
    width: 100%;
    padding: 40px;
    .bar_item{
        display: flex;
    }
    .bar_link:hover{
        top: 7px;
        color: #008000;
    }
    .bar_link{
        color: #fff;
        text-decoration: none;
        font-family: 'Bangers', cursive;
    }
    
`;

const NavBarContainer = styled.ul`
    display: flex;
    background: #444444	;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0 24px;
    justify-content: space-evenly;
    
`;

const NavLogo = styled.li`
    justify-self: end;
    cursor: pointer;
    font-size: 1.0rem;

`;

export default Main;
