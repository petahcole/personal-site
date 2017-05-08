import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render()    {
       const {data} = this.props
       return   (
           <DataBlock data={data}/>
       )
    }
}