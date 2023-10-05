import React from 'react';
import styled from "styled-components";
import GlobalStyle from "./styles/createGlobalStyle.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";

const StyleApp = styled.div`
  //background-color: orangered;
  padding: 20px;
`

function App(props) {
    return (
        <>
            <GlobalStyle/>
            <StyleApp>
                <Row>
                    <Row type='horizontal'>
                        <Heading as='h1'>The Wild Oasis</Heading>
                        <div>
                            <Heading as='h2'>Check in and out</Heading>
                            <Button onClick={() => alert('Check in')}>Check in</Button>
                            <Button variation='secondary' size='small' onClick={() => alert('Check out')}>Check out</Button>
                        </div>
                    </Row>
                    <Row>
                        <Heading as='h3'>Form</Heading>
                        <form>
                            <Input type='number' placeholder='Number of guests'/>
                            <Input type='number' placeholder='Number of guests'/>
                        </form>
                    </Row>
                </Row>
            </StyleApp>
        </>
    );
}

export default App;