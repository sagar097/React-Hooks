import React,{useReducer,useEffect} from 'react';
import axios from 'axios';
const initialState={
    loading:true,
    post:{},
    error:''
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                ...state,
                error:'',
                posts:action.payload,
                loading:false
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error:'Something Went Wrong',
                posts:{},
                loading:false
            };
        default:
            return state;
    }
  }

function Datafetch2() {
 const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch({type:'FETCH_SUCCESS',payload:res.data});
            }).catch(err => {
                dispatch({type:'FETCH_ERROR'});
            })
    }, [])

    return (
        <div>
            <ul>
                {state.loading ? '...Loading' : state.posts && state.posts.map(post => (<li key={post.id}>{post.title}</li>))}
                {state.error ? state.error : null}
            </ul>
        </div>
    )
}

export default Datafetch2
