import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import HomePage from './homePage/HomePage'

class Layout extends React.Component {

  render()  {
    return  (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        {/*<HomePage/>*/}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;