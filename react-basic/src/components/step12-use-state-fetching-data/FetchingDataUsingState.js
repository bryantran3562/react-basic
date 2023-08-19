import React, {useState, useEffect} from 'react'

import axios from 'axios'


function FetchingDataUsingState() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
            setLoading(false)
            setErrorMessage('')
            setPosts(res.data)
         })
         .catch(err => {
            setPosts([])
            setLoading(false)
            setErrorMessage('Something went wrong')
         })
    })


  return (
    <div>
        <h2>FetchingDataUsingState</h2>
        {
            // BT - If loading == True then displaying 'loading' message. Otherwise, display all posts
            loading ? 'Loading' : posts.map((post) => {return <li key={post.id}> { post.title }</li>})
            
        }
        {
            //BT - If there is a error message, then displaying the error message.Otherwise, display nothing.
            errorMessage ? errorMessage : null
        }

    </div>
  )
}

export default FetchingDataUsingState