import { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem';
var count=localStorage.getItem("count",0);
const Todo = () => {
    const [todos,setTodo] = useState([]);
    const inputRef = useRef();
    
    const addTodo = ()=>{
        setTodo([...todos,{id:count++,task:inputRef.current.value,isCompleted:false}])
        localStorage.setItem("count",count);
    }

    const toggleTodo=(id)=>{
        let todos=JSON.parse(localStorage.getItem('todos'))
        for(let i=0;i<todos.length;i++){
            if(todos[i].id===id){
                todos[i].isCompleted=!todos[i].isCompleted
                break;
            }
        }
        setTodo(todos)
    }

    const deleteTask=(id)=>{
        let todos = JSON.parse(localStorage.getItem('todos'))
        todos = todos.filter((item)=>item.id!=id)
        setTodo(todos)
    }

    useEffect(()=>{
        setTodo(JSON.parse(localStorage.getItem("todos")))
    },[])

    useEffect(()=>{
        console.log(todos)
        setTimeout(()=>{
            localStorage.setItem("todos",JSON.stringify(todos))
        },300)
    },[todos])

  return (
    <div className='todo'>
        <div className='todo-list'>
            <h3>To-do List</h3>
            <div>
                <input ref={inputRef} className='todo-input' placeholder='add your Task' type='text'/>
                <button className='todo-add' onClick={addTodo}>add</button>
            </div>
            {todos.map((item,index)=> <TodoItem key={index}{...item} toggleTodo={toggleTodo} deleteTask={deleteTask}/> )}
        </div>
    </div>
  )
}

export default Todo
