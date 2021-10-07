import { useState } from "react"
import { toast } from "react-toastify";
import {firebaseApp} from '../lib/firebase'

export default function Form(){

    const [taskName,setTaskName] = useState("");

    const createTodo = (e) => {
        e.preventDefault()
         const todoRef = firebaseApp.database().ref('Todo');
         const todo = {
            taskName,
            completed: false
         }
        todoRef.push(todo)
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    return(
        <form onSubmit={createTodo}>
            <input 
                type="text"
                placeholder="Enter a task to do..."
                className="task-input"
                value={taskName}
                required
                onChange={handleChange}/>
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}