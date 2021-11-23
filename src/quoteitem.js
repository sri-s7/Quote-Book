import React from 'react'

const Quoteitem=(props)=>{
    const {id,name,body}=props
    
    return(
        <div>
              <blockquote>{body}-{name}</blockquote>
        </div>

    )

}

export default Quoteitem