import React,{useState,useEffect}from 'react'
import Quotelist from './quotelist'
import Addquote from './Addquote'



const Quotescontainer=(props)=>{
    const [quotes,setQuotes]=useState([])
 
    //callback function to childcomponent
    const addItem=(quote)=>{
        const result=[quote, ...quotes]
      setQuotes(result)

    }
    //Local storage

    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('quotes')||[])
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])


    const removeItem=(id)=>{
        const result=quotes.filter((q)=>{
            return q.id!==id
        })
        setQuotes(result)

    }
    const editItem=(quote)=>{
      const result=quotes.map((q)=>{
        if(q.id===quote.id)
        {
          return {...q,...quote}
        }
        else{
          return {...q}
        }
      })
      setQuotes(result)
    }

  return (
    <div>
    
   
     
     <Quotelist quotes={quotes} removeItem={removeItem} editItem={editItem}/>
     <Addquote addItem={addItem} />
     
     


    </div>
  )

}
export default Quotescontainer