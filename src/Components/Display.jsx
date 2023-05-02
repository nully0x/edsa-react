import React from 'react';
function Display (props){
    return(
        <div>
            <h2> Current currency is {props.currency} </h2>
        </div>
    );
}
export default Display