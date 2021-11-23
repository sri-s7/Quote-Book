import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'



const Quoteform=(props)=>{
    
    //destructuring callback from the parent component

    const{formsubmission,name:author,id:slno,body:quote,handeltoggle}=props
    const[name,setName]=useState(author?author:"")
    const[body,setBody]=useState(quote?quote:"")
    const[id,setId]=useState(slno?slno:uuidv4())

const handelsubmit=(e)=>{
  e.preventDefault()
  const formdata={
      id:id,
      name:name,
      body:body
  }
  formsubmission(formdata)
  //reset form
  if (handeltoggle){
    handeltoggle()
  }
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