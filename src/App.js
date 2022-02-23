import React from 'react';
import './App.css';
import Profil from './Profil/Profile'; 
import me from './Profil/me.jpg'


function App() {
  const handleName =(name) => alert(name);

  return (
    <div className="App">
    <Profil FullName= 'seifeddine'
    Bio ='bio'
    Profession ='devlopper'
    handleName={handleName}>
      <img src={me} alt="me"/>
    </Profil>
    </div>
    
  );
}

export default App;
