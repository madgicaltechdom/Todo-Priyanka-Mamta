import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

const From = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo]);





    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    // const oncatChange = (event) => {
    //     (event.target.value);
    // };



    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }


    }
    return (
        <div>
            <div className="cate"> 
             {/* <select name="category" > */}
                {/* <option value="Très important">Très important</option>
                <option value="Important">Important</option>
                <option value="A faire">A faire</option> */}
            {/* </select>  */}
            {/* <button className="addBtn">Add</button>  */}
             </div>
            {/* <input  onChange={oncatChange}></input> */}

            




            <form onSubmit={onFormSubmit}>
                <button>+</button>
                <input
                    type="text"
                    placeholder='Enter a Todo...'
                    className='task-input'
                    value={input}
                    required
                    onChange={onInputChange}
                />

                <button className="button-add" type="submit">
                    {editTodo ? "ok" : "+"}
                </button>


            </form>
        </div>
    )
}


export default From



