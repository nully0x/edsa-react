import React from 'react';

const Button = props => {

  return (

    <div>

      <button onClick={props.onClickHandler} > {props.text} </button>
    </div>

  )

};

export default Button;



