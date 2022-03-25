
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Maintodo from './Maintodo';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/" element={<Maintodo/>}>

          </Route>

        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Maintodo/>
      <Main/> */}
    </div>
  );
}

export default App;


























// import React, { useState ,useEffect} from 'react'
// import './App.css'
// import Header from './components/Header';
// import From from './components/Form';
// import TodoList from './components/TodoList';
// const App=()=>{
//   const initialState=JSON.parse(localStorage.getItem("todos"))||[];
//   const [input,setInput]=useState("");
//   const [todos,setTodos]=useState(initialState);
//   const [editTodo,setEditTodo]=useState(null);

//   useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todos));
//   },[todos]);
//   return(
    
//   <div className="container">
//     <div className="app-wrapper">
//       <div>
//         <Header/>
      
//       </div>
//       <div>
//         <From
//         input={input}
//         setInput={setInput}
//         todos={todos}
//         setTodos={setTodos}
//         editTodo={editTodo}
//         setEditTodo={setEditTodo}
//         />
//       </div>
//       <div>
//         <TodoList todos={todos} 
//         setTodos={setTodos}
//         setEditTodo={setEditTodo}
//         />
//       </div>


      
      

      
//     </div>
  
//   </div>
//   )
// }


// export default App;