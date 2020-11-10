import React from 'react';
import styled from 'styled-components';

class About extends React.Component{
    render(){
        return(
            <Theme>
                <Title>About</Title>
                <Message>あかん系(ガチ勢)をSPAで実装した。</Message>
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