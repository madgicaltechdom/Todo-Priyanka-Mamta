

import Navbar from "./components/Navbar";
import "./App.css";
import TodoList from "./components/TodoList";
// import Home from "./pages/Home";
import { userData } from "./components/userData";


import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const App = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })

        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          userData.user=resObject.user
          console.log(resObject.user)
        })
        .catch((err) => {
          console.log(err);
        });
    
    };
    getUser();
  }, []);

  
  

  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
           <Route path="/" element={<TodoList />} />
           <Route
             path="/Login"
             element={user ? <Navigate to="/" /> : <Login />}
           />
        </Routes> 
      </div>
      
    </BrowserRouter>
    <div>
      {/* <Home/> */}
    </div>
    </div>
  );
};

export default App;



