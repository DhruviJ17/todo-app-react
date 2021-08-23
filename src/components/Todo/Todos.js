import React, { useState } from 'react';
import Item from "./Item";
import TodoForm from "./Form";

function Todo() {
    const allTodos = [
        // { id: '1', text: "Dance", isDone: false },
        // { id: '2', text: "Sing", isDone: false },
        // { id: '3', text: "Paint", isDone: false }
    ]
    const [currentTodos, setNewTodos] = useState(allTodos);
    console.log(currentTodos);

    const itemRemoveHandler = (index) => {
        const todos = [...currentTodos];
        todos.splice(index, 1);
        setNewTodos(todos);
    }

    const itemStrikeHandler = (index) => {
        const todos = [...currentTodos];
        todos[index].isDone = !todos[index].isDone;
        setNewTodos(todos);
    }

    const addTodo = (todo) => {
        setNewTodos([...currentTodos, { data: todo }])
    }

    var date = new Date().toLocaleString().substring(0, 10);
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    if (min.length < 2) {
        min = '0' + min;
    }
    var timee = hours + ':' + min;
    console.log(date)
    console.log(timee)

    return (
        <div>
            <h2 className="h1">My Todo List</h2>
            <TodoForm
                addTodo={addTodo}
            />
            <div>
                {currentTodos.length ? (
                    currentTodos.map((item, index) => (
                        <Item
                            key={item.id}
                            status={item.isDone}
                            text={item.data.value}
                            date={item.data.dateValue}
                            time={item.data.timeValue}
                            done={() => itemStrikeHandler(index)}
                            remove={() => itemRemoveHandler(index)}
                        />
                    ))
                ) : null}
            </div>
        </div>
    )
}


export default Todo;