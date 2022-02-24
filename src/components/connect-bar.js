import React from 'react';

const ConnectBar = props => {

    return (
        <div className='ConnectStatus-container'>
            <p>{props.isConnected ? 'Connected' : 'Not connected'}</p>
        </div>
    );
}

export default ConnectBar;
