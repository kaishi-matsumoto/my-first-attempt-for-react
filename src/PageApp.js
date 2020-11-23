import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";
import axios from "axios"


class PageApp extends React.Component{
    constructor(){
        super()
        this.state={
            pages: undefined
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/pages')
        .then((results) => {
          console.log(results)
          this.setState({pages: results.data})
        })
        .catch((data) =>{
          console.log(data)
        })
      }
    render(){
        const { pages } = this.state
        
        if(!pages){
            return (<p>loading</p>)
        }
        const pageList = pages.map(e => (
            <SmallBlack className="number" key={e.id}>
                <Link to={'/page/' + e.id}>id:{e.id}</Link>
            </SmallBlack>
        ))
        return( 
            <Router>
                <Theme>
                    <Title>Page</Title>
                    <Message>記事を表示します。</Message>
                    <Main>
                        <Switch>
                            <Route path='/page/:id' render={routeProps => <PageInfo{...routeProps} pages={pages}/>} />;
                        </Switch>
                        <Black>
                            {pageList}
                        </Black>  
                    </Main>
                </Theme>
            </Router>
            
        )
    }
}

const SmallBlack = styled.li`
    text-decoration: none;
    flex: center;
`;



class PageInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {match, pages} = this.props
        const {params} = match
        const id = parseInt(params.id, 10)
        const title = pages.filter(e => e.id === id).map((article) => article.title) 
        return(
            <React.Fragment>
                <Parent>   
                    <Small className="bar_list">{id}:{title}</Small>

                </Parent>
            </React.Fragment>
            
        )
    }
}

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
