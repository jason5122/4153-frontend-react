import './../css_files/Threads.css'
import { useState, useEffect } from 'react';
import {
    getComments as getCommentsApi
} from './api.js'
import { Link } from 'react-router-dom'



function Threads(){
    const [isLoading, setLoading] = useState(false);
    const [threads, setThreads] = useState([]);



    useEffect(() => {
        setLoading(true);

        /*REPLACE GET COMMENTS API WITH ENDPOINT HERE 
        const request = axios.get('').then( ...... ) 
        */
        getCommentsApi().then(data => {
            const threadList = [];
            const threadKeySet = new Set();

            /*  Only retrieve unique threadKeys and their respective threadTitle */
            for (const dict of data){
                if (!threadKeySet.has(dict['threadKey'])){
                    threadKeySet.add(dict['threadKey']);
                    const subset = Object.fromEntries(
                        Object.entries(dict).filter(([key]) => key === "threadKey" || key === "threadTitle")
                    );
                    threadList.push(subset);
                }
            }
            setThreads(threadList);
        })
        setLoading(false);
    }, [])
    return (
        <div className = "threads">
            <h2 className = "threads-title"> Threads </h2>
            <ul className = "threads-list">
                {/* Get all thread topics */}
                {threads.map( thread => (
                    <li key = {thread.threadKey} className = "thread-items">
                        <Link 
                            to={`/comments/${thread.threadKey}`} 
                            state = {{threadTitle: thread.threadTitle}} 
                            className = "thread-links"> {thread.threadTitle} 
                        </Link> 
                    </li>
                ))}
            </ul>
    
        </div>
    );

}
export default Threads;