import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Datafetch() {
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState('');
    const [posts,setPost]= useState([]);
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts') 
         .then(res=>{
           setLoading(false);
           setPost(res.data);
           setError('')
         }).catch(err=>{
             setLoading(false);
             setPost({});
             setError('Something went wrong');
         })       
    },[])
    
    return (
        <ul>
        {loading?'...Loading':posts&&posts.map(post=>(<li key={post.id}>{post.title}</li>))}
        {error?error:null}            
        </ul>
    )
}

export default Datafetch
