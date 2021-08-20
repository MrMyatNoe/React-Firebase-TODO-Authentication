import { useState } from "react";
import {firebaseApp} from "../lib/firebase"

export default function Todo({todo}){


    const [newTaskName, setNewTaskName] = useState("");

    const completeTodo = () => {
        const todoRef = firebaseApp.database().ref("Todo").child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    }

    const editTodo = () => {
        const todoRef = firebaseApp.database().ref("Todo").child(todo.id);
        console.log('new task name : ',newTaskName)
        todoRef.update({
            taskName: newTaskName,
        });
    }

    const deleteTodo = () => {
        const todoRef = firebaseApp.database().ref("Todo").child(todo.id);
        todoRef.remove(todoRef)
    }

    const handleChange = (e) => {

        if(todo.complete === true){
            setNewTaskName(todo.taskName)
        } else {
            todo.taskName = ""
            setNewTaskName(e.target.value)
        }
    }
    return (
        <li className={todo.complete? "complete" : "list-item"}>
            <input type="text" 
                value={todo.taskName === "" ? newTaskName : todo.taskName} className="list" onChange={handleChange}/>
            <button className="button-complete task-button" onClick={completeTodo}> 
                <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={editTodo}>
                <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={deleteTodo}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
    )
}