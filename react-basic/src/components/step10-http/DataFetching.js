import React, {useState, useEffect} from 'react'

// BT - npm install axios
import axios from 'axios'

function DataFetching() {

    // BT - Create variables. We need an array of objects.

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
            console.log(res)
            //###########################################################################################
            // BT - The reason, you are not using the ...posts is that, we are not updating the posts.
            //###########################################################################################
            setPosts(res.data)
         })
         .catch(err => {
            console.log(err)
         })
    },[])


  return (
    <div>
        <h2>DataFetching</h2>
        
            <ul>
                {
                    posts.map((post) => {return <li key={post.id}> { post.title }</li>})
                }
            </ul>
        
    </div>
  )
}

export default DataFetching