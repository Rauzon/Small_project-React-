import React, {useState, useRef} from 'react';
import {action} from '@storybook/addon-actions';

import {Simulate} from "react-dom/test-utils";


export default {
    title: 'input',
    // component: input,
};

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')

    const inputRef = React.createRef<HTMLInputElement>()

    const saveValue = () => {
        if(inputRef.current){
            const newValue = inputRef.current.value
            setValue(newValue);
        }
    }

    return <>
        <input  ref={inputRef} />
        <button onClick={saveValue}>press
        </button>
        Actual value: {value}
    </>
};
export const ControlledInput = () => <input value={'fixed value'}/>;


