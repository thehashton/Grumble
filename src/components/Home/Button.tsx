import React from 'react';

const Button = (props: any) => {
    return (
     <button className={'button' + props.className} onClick={props.onClick}> {props.buttonText} </button>
   )}
   export default Button;