import React, { useState } from 'react';

const TodoForm = (props) => {

    const [value, setValue] = useState(' ');
    const [dateValue, setDateValue] = useState(' ');
    const [timeValue, setTimeValue] = useState(' ');

    const nameChangedHandler = (e) => {
        setValue(e.target.value);
    }
    const dateChangedHandler = (e) => {
        setDateValue(e.target.value);
    }
    const timeChangedHandler = (e) => {
        setTimeValue(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();     //to prevent DOM from reloading the page
        if (!value & !dateValue) return;
        props.addTodo({ value, dateValue, timeValue });
        setValue(' ');
        setDateValue(' ');
        setTimeValue(' ');
    }
    return (
        <div>
            <div className="addTodo-class">Add a Todo</div>
            <form onSubmit={submitHandler}>
                <input className="input-holder" type="text" placeholder="Add a ToDo" value={value} onChange={nameChangedHandler} />
                <input className="input-holder" type="date" placeholder="Date" value={dateValue} onChange={dateChangedHandler} />
                <input className="input-holder" type="time" placeholder="Time" value={timeValue} onChange={timeChangedHandler} />
                <input className="add" type="submit" value="Add" />
            </form>
        </div>
    );
}


export default TodoForm;