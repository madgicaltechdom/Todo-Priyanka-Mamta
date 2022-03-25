
import React from 'react'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList=({todos,setTodos,setEditTodo})=>{
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed: !item.completed};
                }
                return item;
            })
        )
    }

    const handleedit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo)
    }




    const handledelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    }
    return(
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title}
                    className={'list ${todo.completed ? "complete":""}'} 
                    onChange={(event)=>event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>

                        </button>

                        <button className="button-edit task-button"onClick={()=>handleedit(todo)}>
                            <i className="fa fa-edit"></i>

                        </button>

                        <button className="button-delete task-button"onClick={()=>handledelete(todo)}>
                            <i className="fa fa-trash"></i>

                        </button>
                    </div>


                </li>
            )
            )}
        </div>
    )
}

export default TodoList;
