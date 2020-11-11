import React from 'react';
import styled from 'styled-components';

class About extends React.Component{
    render(){
        return(
            <Theme>
                <Title>About</Title>
                <Message>このアプリでは、音楽でも映画でもなんでも好きなコンテンツを共有できます。</Message>
            </Theme>
        )
    }
}

const Theme = styled.div`
    text-align: center;	
`

const Title = styled.h1`
    color: #000000;
`

const Message = styled.p`

`

export default About;