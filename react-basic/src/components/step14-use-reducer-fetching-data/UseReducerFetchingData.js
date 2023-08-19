import React, {useReducer, useEffect} from 'react'

import axios from 'axios'

//###############################################
// BT - We are dealing with an object now.
//###############################################
const initialState = {
    loading: true,
    error: '',
    posts: []
}

const reducer = (state, action) => {

    switch (action.type){
        case 'FETCH_SUCCESSFUL':
            return {
                loading: false,
                error: '',
                posts: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                loading: false,
                error: 'Something went wrong',
                posts: []               
            } 
        default:
            return state   
    }

}




function UseReducerFetchingData() {

    //########################################################################################################
    // BT - Still same as useState, pass in two argument to useReducer function, reducer, initialState.
    //      It will return a new state and a dispatch method for you to call or set the state.
    //########################################################################################################
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode1.com/posts')
         .then(res => {
            dispatch({type: 'FETCH_SUCCESSFUL', payload: res.data})
         })
         .catch(err => {
            dispatch({type: 'FETCH_FAILURE'})
         })
    })
    


  return (

    <div>
        <h2>UseReducerFetchingData</h2>
        {
            // BT - If loading == True then displaying 'loading' message. Otherwise, display all posts
            state.loading ? 'Loading' : state.posts.map((post) => {return <li key={post.id}> { post.title }</li>})
            
        }
        {
            //BT - If there is a error message, then displaying the error message.Otherwise, display nothing.
            state.error ? state.error : null
        }

    </div>
  )
}

export default UseReducerFetchingData