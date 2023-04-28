import React from "react";

function CurremcySwitcher(props) {
    return(
        <button onClick={props.handleChangeCurrency}>
        Current currency is  { props.currency}. change it! </button> 
    );
    
}

export default CurremcySwitcher;