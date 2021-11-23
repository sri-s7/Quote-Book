import React from 'react'
import Editquote from './editquote'
import { useState } from 'react'

const Quoteitem=(props)=>{
    const {id,name,body,removeItem,editItem}=props
    const[toggle,settoggle]=useState(false)

    const handeltoggle=()=>{
        const result=!toggle
        settoggle(result)
    }

    

    
    
    return(
        <div>
            {toggle ?(<div><Editquote id={id} name={name} body={body} editItem={editItem} handeltoggle={handeltoggle}/>
            <button onClick={handeltoggle}>cancel</button></div>):
            <div>
            <blockquote>{body}-{name}</blockquote>
              <button onClick={handeltoggle}>edit</button>
              <button onClick={()=>{
                  const confirmremove=window.confirm('Are you sure?')
                  if(confirmremove){
                    removeItem(id)
                  }
                  }}>Remove</button>
            </div>
            }
              
              
        </div>

    )

}

export default Quoteitem