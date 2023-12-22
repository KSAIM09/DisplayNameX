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

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Full Name</h1>
        <label>
          First Name:
          <input
            type='text'
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
          />
        </label>
        <br />
        <lable>
          Last Name:
          <input
            type='text'
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)} 
          />
        </lable>
        <br />
        <button type='submit' disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
