import React from 'react';

function Status(props){
    const {getStatus} = props;
    return(
        <div id="getStatus">{getStatus()}</div>
    )
}

export default Status;