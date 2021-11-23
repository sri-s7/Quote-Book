import React from 'react'
import Quoteform from './quoteform'

const Addquote=(props)=>{
    const{addItem}=props

    const formsubmission=(formdata)=>{
        addItem(formdata)

    }

    return(
    <div>
    <h1>add quote</h1>
    <Quoteform  formsubmission={formsubmission}/>
    </div>)
}

export default Addquote