
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

   const [gender, setGender] = useState('male'); // State to store selected gender

  // State to store the selected shirt size and dress size
  const [shirtSize, setShirtSize] = useState('');
  const [dressSize, setDressSize] = useState('');

  // Event handler for gender radio button change
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setShirtSize(''); // Reset shirt size when gender changes
    setDressSize(''); // Reset dress size when gender changes
  };

  return (
    <div>
      <div>
        <h2>Select your gender:</h2>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <h2></h2>
      </div>
      {gender === 'male' && (
        <div>
          <label>
            <h2>Select your shirt size:</h2>
            
            <select value={shirtSize} onChange={(e) => setShirtSize(e.target.value)}>
              <option value="">Select Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
          </label>
        </div>
      )}
      {gender === 'female' && (
        <div>
          <label>
          <h2>Select your dress size:</h2>
            <select value={dressSize} style={{backgroundColor: 'grey'}} onChange={(e) => setDressSize(e.target.value)}>
              <option value="">Select Size</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
}

export default App
