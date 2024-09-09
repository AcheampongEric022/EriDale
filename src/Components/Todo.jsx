import React, { useState } from "react";
import Form from "./Form";
import Todolist from "./tODOLIST.JSX";
import Footer from "./Footer";
import styles from "./Todo.module.css"


function Todo() {
    const [todos, setTodos] = useState([]);

    const completed = todos.filter((todo) => todo.done).length;

    const total = todos.length;

    return (
        <div className={styles.todobg}>
            <Form todos={todos} setTodos={setTodos} />
            <Todolist setTodos={setTodos} todos={todos} />
            <br />
            <p className={styles.todoText}>
            EriDale is a modern and intuitive task management app designed 
            to simplify your daily routine. Built with React JS, Eridale 
            allows you to easily add, edit, and delete tasks, and stay on 
            schedule with its built-in timer. Accessible on every browser 
            and device, Eridale is perfect for students, professionals, and
             anyone looking to boost their productivity and stay organized."
             <br />How to use.... <br />
             1. Add a plan <br />
             2. After completeing the plan, click on the plan. <br />
             3. Click on the "x" button to delete plan
          
             <br />
             <a href="">Click here </a>
              to have access to my projects

          
            </p>
            <Footer completed={completed} total={total} />
        </div>
    );
}

export default Todo;
