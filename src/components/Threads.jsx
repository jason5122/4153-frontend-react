import { useState, useEffect } from 'react';
import {
    getComments as getCommentsApi
} from './api.js'
import Comments from './Comments.jsx'
import { Link, useParams } from 'react-router-dom'



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
                    <li key = {thread.threadKey} className = "thread-itemk">
                        <Link to={`/comments/${thread.threadKey}`}> {thread.threadTitle}</Link> 
                    </li>
                ))}
            </ul>
    
        </div>
    );

}
export default Threads;