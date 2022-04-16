// Buddy List //

import React,{useState} from 'react'

const App = () => {

  const[input,setInput] = useState("");
  const[list,setList] = useState([])
  
  const submitHandler = e => {
    e.preventDefault();
    const newList = [...list,input]
    setList(newList)
    setInput("")
    
  }

   const deleteHandler = (result) =>{
    const newList = list.filter((value,index)=>index!==result)
    setList(newList)
   }

  return (
    <>
    <div style= {{backgroundImage:"https://scontent.fhyd10-1.fna.fbcdn.net/v/t1.6435-9/125993089_2772863292986186_8873404573245593143_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Y99WH0PJciAAX9pxEq_&_nc_ht=scontent.fhyd10-1.fna&oh=00_AT-8tH6Wo6N54arXR-QWBxlNwGwcoWELiQnP9e3NXy6emA&oe=6282425A"}}>
    <center>
    <img src='https://scontent.fhyd10-1.fna.fbcdn.net/v/t1.6435-9/125993089_2772863292986186_8873404573245593143_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Y99WH0PJciAAX9pxEq_&_nc_ht=scontent.fhyd10-1.fna&oh=00_AT-8tH6Wo6N54arXR-QWBxlNwGwcoWELiQnP9e3NXy6emA&oe=6282425A' width="200" height="200" />
    <form onSubmit={submitHandler}>
    <input type="text" autocomplete="off" aplaceholder='Enter the name' value={input} name="input" onChange={e=>setInput(e.target.value)} />
    <input type="submit" name="submit"/>
    </form>
    <div>Your Todo list is Here!!!</div>
    <div>
    {list.map((value,index)=><div>{value}<button style= {{backgroundColor:"green"}} onClick={()=>{deleteHandler(index)}}>Delete</button></div>)

  }
    </div>
    </center>
    </div>

    </>
  )
}

export default App;
