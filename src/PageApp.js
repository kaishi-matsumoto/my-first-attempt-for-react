import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";



/*API実装前*/ 
/* const page_data_list = [
        {
            id: 1,
            title: "id1の記事"
        },
        {
            id: 2,
            title: "id2の記事"
        }
    ] */




/*API実装前*/
const PageApp =()=>{
    construtor(props){
        super(props)
        this.state={
            pages: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/pages')
        .then((results)=>{
            console.log(results)
            this.setState({pages: results.data})
        })
        .catch(()=>{
            console.log(data)
        })
    }
        return(
            <Router>
                <Theme>
                    <Title>Page</Title>
                    <Message>記事を表示します。</Message>
                    <Switch>
                        <Route path='/page/:id' component={PageInfo} />
                        <Route component={PageList} />
                    </Switch>
                </Theme>
            </Router>
        )
}





/*API実装前(page_data_list)*/
class PageList extends React.Component{
    render(){
        const pageList = page_data_list.map(e => (
            <li key={e.id}>
                <Link to={'/page/' + e.id}>id:{e.id}</Link>
            </li>
        ))
        return(
            <div>
                <Black>
                    {pageList}
                </Black>
            </div>
        )
    }
}


/*API実装前(page_data_list) */
class PageInfo extends React.Component{
    render(){
        const {params} = this.props.match
        const id = parseInt(params.id, 10)
        const page = page_data_list.filter(e => e.id === id)[0]
        return(
            <div>
                <div>{id}:{page.title}</div>
                <div><PageList /></div>
            </div>
            
        )
    }
}



const Black = styled.ul`
    list-style: none;
`;

const Theme = styled.div`
    text-align: center;	
`

const Title = styled.h1`
    color: #000000;
`

const Message = styled.p`

`




export default PageApp;
