import React, { PropTypes } from 'react';
import Link from 'react-router';

const DataBlock = ({data})  =>  {
    return  (
        <div className="block"
             id={data.id}>
            <h3>{data.title}</h3>
            <p>TEST TEXT</p>
            <p>{data.body}</p>
        </div>
    )
}

DataBlock.propTypes = {
    data: PropTypes.object.isRequired
}

export default DataBlock
