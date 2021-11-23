import React from "react"
import Quoteform from "./quoteform"

const Editquote=(props)=>{
    const{id,name,body,editItem,handeltoggle}=props

    const formsubmission=(formdata)=>{
        editItem(formdata)
    }


    return(
        <div>
            <h2> Edit quote</h2>
            <Quoteform  id={id} name={name} body={body} formsubmission={formsubmission} handeltoggle={handeltoggle}/>
        </div>



    )

    
}
export default Editquote