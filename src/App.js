import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
const [mode, setMode] = useState('light'); //whether dark mode is enabled or not    
const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
}

const toggleMode = () => {
  if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = '#0e0230';
   showAlert("Dark mode enabled", "success");
   document.title = "TextUtils - DarkMode";
    
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled", "success");
    document.title = "TextUtils - LightMode";
  }
}

  return (
   <>  
<Navbar title="TextUtils" home="Home" about="About-TextUtils" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert} />

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
{/* <About/> */}
</div>

{/* <Navbar home="Home"  /> */}
   </>
  );
}

export default App;
