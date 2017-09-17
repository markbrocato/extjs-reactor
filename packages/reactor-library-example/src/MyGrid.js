import React, { Component } from 'react';
import { Grid, Column } from '@extjs/ext-react';

export default class MyGrid extends Component {

    data = [
        { symbol: 'AAPL', name: 'Apple Computer' },
        { symbol: 'MSFT', name: 'Microsoft' }
    ]

    render() {
        return (
            <Grid data={this.data}>
                <Column text="Symbol" dataIndex="symbol" flex={1}/>
                <Column text="Name" dataIndex="name" flex={1}/>
            </Grid>
        )
    }

}