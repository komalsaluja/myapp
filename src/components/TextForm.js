import React, {useState} from 'react'




export default function TextForm(props) {
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked"+text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to UpperCase", "success");
}

const handledownClick = ()=>  {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase", "success");
}

const handleClearClick= () => {
  let newText = "";
  setText(newText);
  props.showAlert("Text Cleared", "success");
}

const TitleCase= () => {
let words = text.split(' ')
let uppercaseword=''
words.forEach(element => { 
  uppercaseword = uppercaseword+element.charAt(0).toUpperCase()+element.slice(1).toLowerCase()+" "
});
setText(uppercaseword)
props.showAlert("Converted to TitleCase", "success");
}

const handleCopy= () => {
 var text = document.getElementById("myBox");
 text.select();
 document.execCommand('copy');
 navigator.clipboard.writeText(text.value);
 props.showAlert("Text Copied to clipboard", "success");
 

}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces removed", "success");
}


const handleOnChange= (event)=>{
  // console.log("on Change");
  setText(event.target.value);
}


  const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white' , color:props.mode==='dark' ? 'white' : 'black'}}></textarea>
    </div> 
    
    <button type="button" className="btn btn-primary" style={{margin: 3}} onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="button" className="btn btn-primary"  style={{margin: 3}} onClick={handledownClick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary"  style={{margin: 3}} onClick={handleClearClick}>Clear Text</button>
    <button type="button" className="btn btn-primary"  style={{margin: 3}} onClick={TitleCase}>Title Case</button>
    <button type="button" className="btn btn-primary"  style={{margin: 3}} onClick={handleCopy}>Copy Text</button>
    <button type="button" className="btn btn-primary"  style={{margin: 3}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p> 
    </div>
    </>
     )
}
