import { Component, useState } from 'react';
import './App.css';
import NavBar from './pages/Feed.jsx';


function Greeting({ name }) {
  return (
    <div class = "main-header">
      <h1>Hello, {name}!</h1>
    </div>
  ) 
}

function UserList() {
  const data = [
    { username: 'person1', email: 'person1@email.com' },
    { username: 'person2', email: 'person2@email.com' },
  ];

  return (
    <ul>
      {data.map((u) => <li key={u.username}>{u.email}</li>)}
    </ul>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Greeting name='Person 1' />
      <UserList /> 
      
    </>
  );
}

export default App;
