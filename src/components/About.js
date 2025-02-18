import React ,{useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] =useState({

        color:'black',
        backgroundColor: "white"

   })
    const[btntext,setBtnText] = useState("Enable Dark Mode")
   
   const toggleStyle =()=>{
    if(myStyle.color === "black"){
        setMyStyle({
            color:'white',
        backgroundColor: "black",
        border:'1px solid white'

        })
        setBtnText("Enable light Mode")
    }
    else{
        setMyStyle({
            color:'black',
        backgroundColor: "white"

        }) 
        setBtnText("Enable Dark Mode")
    }
   }

  return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextUtils
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Welcome to <strong>TextUtils</strong>, a simple yet powerful text manipulation tool designed to make your text processing tasks easier and more efficient. Whether you need to format, analyze, or edit your text, TextUtils provides a user-friendly interface to get the job done quickly.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What Does TextUtils Do?
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        <b>With TextUtils, you can:</b><br/>
            ✅ Convert text to uppercase/lowercase<br/>
            ✅ Count words and characters<br/>
            ✅ Copy text with one click<br/>
            ✅ Enable dark mode for better readability
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Technologies Used
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        <b>TextUtils is built using modern web technologies:</b><br/>
        <br/>
            <b>React.js</b>– For building an interactive and dynamic user interface<br/>
            
            <b>JavaScript (ES6)</b> – To add functionality and logic<br/>
            <b>HTML & CSS </b>– For structuring and styling the application<br/>
            <b>Bootstrap</b> – To enhance the design and responsiveness<br/>
            <b>React Router</b> – To enable seamless navigation between pages
        </div>
        </div>
    </div>
    </div>
    <button onClick= {toggleStyle} type="button" class="btn btn-primary my-2">{btntext}</button>
        </div>
  )
}
