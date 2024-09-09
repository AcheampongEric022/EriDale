import React from 'react'
import { useState } from "react";
import styles from "./Form.module.css"

function Form({todos, setTodos}) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name: "", done: false});
   

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
    }
    return (
<>
        <form className={styles.todoform} onSubmit={handleSubmit} action="">
            <input className={styles.input}
                onChange={(e) => setTodo({name: e.target.value, done: false})}
                type="text"
                value={todo.name} placeholder='Add a Plan here...'
                required
            />
            <button className={styles.button} type="submit">Add</button>
        </form>

        </>

    )
}

export default Form