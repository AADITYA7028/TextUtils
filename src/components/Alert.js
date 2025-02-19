import React from 'react'

export default function Alert(props) {

    const capitalize =(word)=>{
        let lower = word.toLowerCase();
        let str = lower.charAt(0).toUpperCase();
        return str+lower.slice(1);
    }
    
  return (
         <div  style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${ props.alert.type} alert-dismissible fade show `} role="alert">
       <strong>{ capitalize(props.alert.type)} </strong>:  {props.alert.msg}
  
</div>}
</div>
      
  )
}
