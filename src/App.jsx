import { Component, useState } from 'react';
import './App.css';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
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
      <Greeting name='Person 1' />
      <Counter />
      <UserList />
    </>
  );
}

export default App;
