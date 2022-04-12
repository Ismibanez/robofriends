import React from 'react';


const Scroll= (props) => {
    return (
        <div style={{overflowx: 'scroll', border: '5px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;