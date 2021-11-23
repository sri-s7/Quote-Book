import React from 'react'


const Quotelist=(props)=>{
    const {quotes}=props

  return (
    <div>
     {(quotes.length==0)?
        (<div>
         <h1>No quotes found</h1>
         <p>Add your first quote</p>
         </div>):
         (<h2> My Quotes-{quotes.length}</h2>)
      }
     
     </div>
  )
}
  export default Quotelist