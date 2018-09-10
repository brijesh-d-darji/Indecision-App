import React from 'react';

const Action = (props) =>(
        <div >
            <button className= "big__button"
            onClick = {props.handlePick}
            disabled = {!(props.hasOptions)}
            >
            What should I Choose?</button>
            
        </div>
    );

export default Action;
