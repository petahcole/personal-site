import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as homeActions from '../../actions/homeActions'
import DataBlock from './DataBlock';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render()    {
       const {data} = this.props;
       return   (
           <DataBlock data={data}/>
       )
    }
}

HomePage.propTypes = {
    data: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps)   {
    console.log(state)
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch)   {
    return  {
        actions: bindActionCreators(homeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);