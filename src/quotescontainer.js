import React,{useState,useEffect}from 'react'
import Quotelist from './quotelist'
import Quoteform from './quoteform'
import Quoteitem from './quoteitem'


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

  return (
    <div>
    
     {quotes.map((q)=>{
         return(<Quoteitem key={q.id}{...q}/>)
     })}

     <Quoteitem />
     <Quotelist quotes={quotes}/>
     <Quoteform  addItem={addItem}/>
     
     


    </div>
  )

}
export default Quotescontainer