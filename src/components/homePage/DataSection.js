import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DataSection = ({section}) =>  {
     return (
        <div>
            <h3>{section.title}</h3>
            <p>TEST TEXT</p>
            <p>{section.body}</p>
            <p>{section.tech}</p>
        </div>
    )
}

export default DataSection
   
