import React from 'react';

export default function Child(props) {

    function handleClick(){
        alert('child button clicked');
        props.parentHandleClick();
    }

    return (
        <p>
            Props : {props.fromParent}
            <button onClick={handleClick} >Click me</button>
        </p>
    )
}