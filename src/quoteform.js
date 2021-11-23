import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'



const Quoteform=(props)=>{
    const[name,setName]=useState("")
    const[body,setBody]=useState("")
    //destructuring callback from the parent component

    const{addItem}=props

const handelsubmit=(e)=>{
  e.preventDefault()
  const formdata={
      id:uuidv4(),
      name:name,
      body:body
  }
  addItem(formdata)
  //reset form
  setName('')
  setBody('')
}

const handelnamechange=(e)=>{
   setName(e.target.value)
  }

  const handelbodychange=(e)=>{
    setBody(e.target.value)
   }

  return (
    <div>
     <h2>Add quotes</h2>
     <form onSubmit={handelsubmit}>
         <label>Name</label><br/>
         <input type="text" value={name} onChange={handelnamechange}/><br/>
         <label>Body</label><br/>
         <textarea value={body} onChange={handelbodychange}/><br/>
         <input type="submit" value="save"/>
    </form>
     
     


    </div>
  )
}
  export default Quoteform