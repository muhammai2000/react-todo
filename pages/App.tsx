 import React, { Component } from "react"
import {List} from "../components/List"
import {AppProps} from 'next/app'


function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo('')
}

export default function App ({Component, pageProps}: AppProps): any, 

    {
       
        const [todo, setTodo] = React.useState('')


        return (
         <div className="App">
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button type='submit'>Add Todo</button>
            </form>
            <List />
         </div>
    );
        }



function setTodos(arg0: any[]) {
    throw new Error("Function not implemented.")
}


function setTodo(arg0: string) {
    throw new Error("Function not implemented.")
}


export default App;
