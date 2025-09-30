import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'
import cross from '../assets/cross.svg'
const TodoItem = ({id,task,isCompleted, toggleTodo,deleteTask}) => {
  return (
    <div className="todo-item">
        <div onClick={()=>toggleTodo(id)} className='todo-task'>
            {isCompleted?<img src={checked}/>:<img src={unchecked}/>}
            <span className={isCompleted?"line":""}>{task}</span>
        </div>
        <img src={cross} onClick={()=>deleteTask(id)}/>
    </div>
  )
}

export default TodoItem
