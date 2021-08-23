import React from 'react';


const Items = (props) => {
    let date = new Date().toLocaleString().substring(0, 10);
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    if (min.length < 2) {
        min = '0' + min;
    }
    let timee = hours + ':' + min;
    console.log(date)
    console.log(timee)
    return (
        <div>
            <div className={(props.time === timee & props.date === date) ? "item-class-neg" : "item-class"}>
                <span className={props.status ? "strike text" : "text"} onClick={props.done}>{props.text}</span>
                <span className={props.status ? "strike text1" : "text1"} onClick={props.done}>{props.date}({props.time})</span>
                <span className="remove-element" onClick={props.remove}>Remove</span>
            </div>
        </div>
    )
}




export default Items;