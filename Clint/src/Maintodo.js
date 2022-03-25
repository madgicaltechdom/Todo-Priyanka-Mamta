import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import From from './components/Form';
import TodoList from './components/TodoList';
// import Main from './Main';






const Maintodo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  







































  return (
    <div>
      <input/>
      {/* <Main/> */}
    
       <div className="container">
      <div className="app-wrapper">
      <div>
        <Header />
        



       </div>
       <div>
        <From
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
 





    



     </div>
   </div>
  </div>
    
  );


  // <div className="container">
  //   <div className="app-wrapper">
  //     <div>
  //       <Header />



  //     </div>
  //     <div>
  //       <From
  //         input={input}
  //         setInput={setInput}
  //         todos={todos}
  //         setTodos={setTodos}
  //         editTodo={editTodo}
  //         setEditTodo={setEditTodo}
  //       />
  //     </div>
  //     <div>
  //       <TodoList todos={todos}
  //         setTodos={setTodos}
  //         setEditTodo={setEditTodo}
  //       />
  //     </div>






  //   </div>

  // </div>


}


export default Maintodo;