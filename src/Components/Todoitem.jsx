import React from 'react'
import styles from "./Todoitem.module.css"
function Todoitem({ item, todos, setTodos }) {

  function handleDelete(item){
    console.log("Deleted", item);
    setTodos( todos.filter((todo) => todo !== item));
  }
  function handleTask(name){
   const newArray =  todos.map((todo)=>todo.name === name ? {...todo, done:!todo.done} : todo);
      setTodos(newArray);
  }

  const className = item.done? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
      <span className={className} onClick={()=>handleTask((item.name))}>{item.name}</span>
      <span><button  onClick={()=>handleDelete(item)} className={styles.delbutton}>x</button></span>
      </div>
         
      <hr className={styles.line} />
    </div>

  )
}
export default Todoitem