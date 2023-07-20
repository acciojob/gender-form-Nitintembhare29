
import React, {useState} from "react";
import './../styles/App.css';

function App(){
  const [selected,setSelected]=useState('');
 
 return(
   <div>
     <h2>Select your gender</h2>
     <input type='radio' name='gender' value='Male' checked={selected === 'Male'}  onChange={(e) => setSelected(e.target.value)}/>
     <label>Male</label>
     <input type='radio' name='gender'value='Female' checked={selected === 'Female'}  onChange={(e) => setSelected(e.target.value)}/>
     <label>Female</label>
   {selected === 'Male' && (<div>
     <h2>Select your shirt size:</h2>
     <select>
     <option>Select size</option>
       <option>Small</option>
       <option>Medium</option>
       <option>Large</option>
     </select>
     </div>
 )}
 {selected === 'Female' && (
     <div>
     <h2>Select your dress size:</h2>
     <select>
       <option>Select size</option>
       <option>2</option>
       <option>4</option>
       <option>6</option>
     </select>
     </div>
 )}
   </div>
 
 ) 
 
 }
export default App
