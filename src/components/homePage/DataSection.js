import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DataSection = ({section}) =>  {
    let classNames = `${section.id} block align-self-center`
     return (
        <div className={classNames}>
            <a href={section.githubLink}><h3>{section.title}</h3></a>                      
            <p>{section.body}</p>
            <p>{section.tech}</p>
        </div>
    )
}

export default DataSection
   
