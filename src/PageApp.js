import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";
import axios from "axios"



const PageApp = () =>{
    const [page, setPage] = useState()
    
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3001/pages'
            );
            setPage(result.data);
        };
        fetchData();
    },[]);
    
    if(!page){
        return (<p>loading</p>)
    }

    
    return(
        <Router>
            <Theme>
                <Title>Page</Title>
                <Message>記事を表示します。</Message>
                <Main>
                    <Switch>
                        <Route path='/page/:id' render={routeProps => <PageInfo{...routeProps} pages={page}/>} />;
                    </Switch>
                    <Black>
                        {page && page.map(e => (
                            <SmallBlack className="number" key={e.id}>
                                <Link to={'/page/' + e.id}>id:{e.id}</Link>
                            </SmallBlack>
                        ))}
                    </Black>  
                </Main>
            </Theme>
        </Router>
    

    );
};

const PageInfo=(props)=>{
    const {match, pages} = props
    const {params} = match
    const id = parseInt(params.id, 10)
    const title = pages.filter(e => e.id === id).map((article) => article.title) 
    return(
        <React.Fragment>
                <Parent>   
                    <Small className="bar_list">{id}:{title}</Small>
                </Parent>
        </React.Fragment>
    );
}

const SmallBlack = styled.li`
    text-decoration: none;
    flex: center;
`;

 
const Main = styled.p`
    
`;

const Parent = styled.ul`
    flex: center;
    
    align-items: center;
    margin-right: 70px;
    text-decoration: none;
`;

const Black = styled.ul`
    list-style: none;
    
`;

const Small = styled.li`
    color: #000000;
    flex: center;
    list-style: none;
    .bar_list{
        text-decoration: none;
    }
    
`;

const Theme = styled.div`
    text-align: center;	
    text-decoration: none;
`

const Title = styled.h1`
    color: #000000;
`

const Message = styled.p`

`



export default PageApp;
