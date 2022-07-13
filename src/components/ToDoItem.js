import React, { useState } from 'react';

function ToDoItem(props) {

    const [checked, statusChange] = useState('unchecked');

    const [button, buttonStatusChange] = useState('toggleCompleted');

    function toggle() {
        if (checked === 'unchecked') {
            statusChange('checked');
            buttonStatusChange('toggleCompleted btnDone');
        }
        else {
            statusChange('unchecked');
            buttonStatusChange('toggleCompleted');
        }
    }

    const markAsComplete = () => {
        props.markAsComplete(props.text, props.index)
        toggle();
    }

    return (
        <li>
            <div className={checked}>
                {props.text}
                <button className={button} onClick={() => markAsComplete()}>&#10003;</button>
            </div>
        </li>
    );
}

export default ToDoItem;