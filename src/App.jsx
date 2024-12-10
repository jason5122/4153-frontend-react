import { Component, useState } from 'react';
import './App.css';
import NavBar from './components/Feed.jsx';
import Comments from './components/Comments.jsx'
function Greeting({ name }) {
  return (
    <div className = "main-header">
      <h1>Hello, {name}!</h1>
      <Comments currentUserId="1"/> {/* ADD BACKEND CONNECTION TO RETRIEVE COMMENT HERE*/}
    </div>
  ) 
}



function App() {
  return (
    <>
      <NavBar />
      <Greeting name='Person 1' />      
    </>
  );
}

export default App;