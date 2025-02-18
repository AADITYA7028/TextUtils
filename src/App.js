
import './App.css';
import About from './components/About';
import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [ mode, setMode] = useState('light')//Whether dark mode is enable or not

  const [alert , setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type    })
  }
 setTimeout(()=>{
  setAlert(null);
 },1500)

  const toggleMode =()=>{
    if(mode === "light"){
      setMode ("dark");
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode has been activated",'success')
    }else{
      setMode ( "light");
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been activated",'success')
    }
  }

  return (
    <>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
  );
}

export default App;
