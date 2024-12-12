import './App.css';
import NavBar from './components/NavBar.jsx';
import Comments from './components/Comments.jsx'
import Threads from './components/Threads.jsx'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"



function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path = "/" element = {<Threads />}/>
      <Route path = "/comments/:threadKey" element = {<Comments currentUserId = "1" />}/> 
    </Routes>
    
    {/* ADD BACKEND CONNECTION TO RETRIEVE COMMENT HERE <Comments currentUserId="1" threadKey='125'/>  */}   
    </>
  );
}

export default App;
