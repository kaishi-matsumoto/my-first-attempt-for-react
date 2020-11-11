import React from 'react';
/* import './Home.css'; */
import styled from 'styled-components';



/* class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="">bar</label>
        <input type="text" onChange={() => {console.log("I'm clicked.")}} />
      </React.Fragment>
    ) 
  }
} */



class Home extends React.Component{
  
  render(){
    return(
      <Theme>
        <Title>FAVER</Title>
        <p>好きなコンテンツを共有しましょう。</p> 
      </Theme>
    );
  }
}


const Theme = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-family: 'Impact';
  color: #e6855e;
`;

export default Home;

