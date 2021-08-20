import firebase from "firebase/firebase"
import { useEffect, useState } from "react"
import Todo from "./Todo"

export default function TodoList(){

    const [todoList, setTodoList] = useState()
    useEffect(() => {
        const todoRef = firebase.database().ref("Todo")
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val()
            console.log('todos : ',todos)
            const todoList = []
            for(let id in todos){
                todoList.push({id, ...todos[id]})
            }
            setTodoList(todoList)
            console.log('todolist : ',todoList)
        })
    }, [])

    return (
        <div>
            {todoList ? todoList.map((todo,index) => 
            <Todo todo={todo} key={index}/>) : ""}
        </div>
    )
}