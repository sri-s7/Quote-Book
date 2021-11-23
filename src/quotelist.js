import React from 'react'
import Quoteitem from './quoteitem'


const Quotelist=(props)=>{
    const {quotes,removeItem,editItem}=props

  return (
    <div>
     {(quotes.length==0)?
        (<div>
         <h1>No quotes found</h1>
         <p>Add your first quote</p>
         </div>):
         (<h2> My Quotes-{quotes.length}</h2>)
      }
      {quotes.map((q)=>{
         return(<Quoteitem key={q.id}{...q} removeItem={removeItem} editItem={editItem}/>)
     })}

     
     </div>
  )
}
  export default Quotelist