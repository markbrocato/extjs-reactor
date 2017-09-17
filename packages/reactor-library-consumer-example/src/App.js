import React, { Component } from 'react';
import { Container } from '@extjs/ext-react';
import { MyGrid } from '@extjs/reactor-library-example';

export default class App extends Component {

    render() {
        return (
            <Container fullscreen layout="fit">
                 <MyGrid/> 
            </Container>
        )
    }

}