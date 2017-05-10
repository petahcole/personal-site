import React, { PropTypes } from 'react';
import DataSection from './DataSection';

const DataBlock = ({data})  =>  {
    return  (
        <div>
            {data.map(section  =>   
                <DataSection key={section.id} section={section}/>
            )}
        </div>
    )
}

DataBlock.propTypes = {
    data: PropTypes.array.isRequired
}

export default DataBlock
