import React, {useState, useEffect} from 'react'

// BT - npm install axios
import axios from 'axios'

function SingleDataFetching() {

    // BT - Create variables. We need only one object to store the json object that we read from the
    //      https://jsonplaceholder.typicode.com/posts/${id}

    const [post, setPost] = useState({})

    // BT - We also need to have an id to read the user input to know which post id the user wants.

    const [id, setId] = useState(1)

    // BT - State of the button.

    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
        // BT - When button is clicked, we want to copy id to our setIdFromButton. Then we will
        //      have to make our useEffect depends or what the change on this setIdFromButton and
        //      if does, run the useEffect hook.
        // SUMMARY:
        //          The idea is that - we call our useEffect hook using the dependency change of the
        //          variable listed in the array of the useEffect hook. This is how to call the useEffect hook
        //          in your code. 

        setIdFromButton(id)
    }

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
         .then(res => {
            console.log(res)
            //###########################################################################################
            // BT - The reason, you are not using the ...posts is that, we are not updating the posts.
            //###########################################################################################
            setPost(res.data)
         })
         .catch(err => {
            console.log(err)
         })
    },[idFromButton])


  return (
    <div>
        <h2>DataFetching</h2>

        {/* BT - Read like this: an input that will set the value=id when there is an onChange event
                                 happen. We then setId(e.target.value) and then this will set the id
                                 in value
                onChange: When there is a change, we will get an event (e) object. The e.target.value is
                          a new value from the user input. We then use the setId to set the id to this new value.
        */}
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>

        <button onClick={handleClick}>Fetch Data</button>       

        <p>{ post.title }</p>
    </div>
  )
}

export default SingleDataFetching