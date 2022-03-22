import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  return (
   <>  
<Navbar title="TextUtils" home="Home" about="About-TextUtils"  />

<div className="container my-3">
<TextForm heading="Enter the text to analyze below"/>
{/* <About/> */}
</div>

{/* <Navbar home="Home"  /> */}
   </>
  );
}

export default App;
