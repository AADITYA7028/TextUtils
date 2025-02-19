
import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function Textform(props){

    const handleUpClick = ()=>{
        let newText =text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick=()=>{
        let newText1 = text.toLowerCase();
        setText(newText1);

       
    }
    const handleClearClick=()=>{
        let newText1 = "";
        setText(newText1);
            }

    const handleSenClick=()=>{
     let newText1= text
     .toLowerCase() // Convert the entire string to lowercase
     .split(" ") // Split the string into an array of words
     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
     .join(" "); // Join words back into a string

     setText(newText1);

      // another method for same purpose
    //  let newText1 = text
    //     .toLowerCase() // Convert entire text to lowercase
    //     .trim(); // Remove extra spaces from start and end

    // if (newText1.length > 0) {
    //     newText1 = newText1.charAt(0).toUpperCase() + newText1.slice(1); // Capitalize first letter
    // }

    // setText(newText1)
    }


    const handleCopy =()=>{
        // {use this comment part when you dont use "onChange" function to get value of textarea content}

        // var text = document.getElementById("myBox"); 
        // text.select();              
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard", "success");
        
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        }
    
    


    const [text,setText] = useState('Write your text here');

    return (
    <>
  <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
<div class="mb-3">
<textarea class="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8" value={text}></textarea>
</div>

<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>

<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>convert to lower case</button>


<button className="btn btn-primary mx-2 my-2" onClick={handleSenClick}>Convert To Sentence Case</button>

<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>

<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

  </div>


<div className="container my-4" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").filter((element) => {return element.length!==0}).length} Words  {text.length} Characters</p>
    <p>Needs {0.008* text.split(" ").filter((element) => {return element.length!==0}).length} Minutes To Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter text in box to preview'}</p>
</div>
        </>
    )
}