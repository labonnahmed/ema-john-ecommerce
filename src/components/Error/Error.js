import React from 'react';

const Error = () => {
    const displayError= {
        textAlign:'center',
        color:'#f01818da',
        padding:' 100px'
    }

    return (
        <h3 style={displayError}>404, page not found</h3>
    );
};

export default Error;