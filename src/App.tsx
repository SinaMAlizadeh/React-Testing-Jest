import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './Components/Todo/Todo';
import { Routes, Route } from "react-router-dom";
import Followers from './Components/Followers/Followers';
const App = () => {
  return (
    <div className="App">
         <Routes>
             <Route path="/" element={<TodoComponent/>}/>
             <Route path="/followers" element={<Followers/>}/>      
         </Routes>
    </div>
  );
}

export default App;
