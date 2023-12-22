import React, { useState } from 'react';

function App(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(firstName && lastName){
      setFullName(`${firstName} ${lastName}`);
    }
  };
  const isValidInput = (input) => /^[\s\S]*$/.test(input);

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Full Name</h1>
        <label>
          First Name:
          <input
            type='text'
            value={firstName}
            onChange={(e)=> isValidInput(e.target.value) && setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <lable>
          Last Name:
          <input
            type='text'
            value={lastName}
            onChange={(e)=> isValidInput(e.target.value) && setLastName(e.target.value)}
            required
          />
        </lable>
        <br />
        <button type='submit'>
          Submit
        </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
