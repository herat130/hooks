import React, { useEffect, useState } from 'react';
import Child from './Child';

export default function Foo() {
    const [fromParent, setFromParent] = useState('initial props from parent');

    function parentHandleClick() {
        alert("parent handle clicked fired");
    }

    useEffect(() => {
        setTimeout(() => {
            setFromParent('prop changed');
        }, 2000)
    })

    return (
        <div>
            <Child fromParent={fromParent} parentHandleClick={parentHandleClick} />
            <p>Foo component</p>
        </div>
    )
}