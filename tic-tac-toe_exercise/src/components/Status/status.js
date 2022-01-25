import React from 'react';

function Status(props){
    const {getStatus} = props;
    return(
        <div className="getStatus">{getStatus()}</div>
    )
}

export default Status;