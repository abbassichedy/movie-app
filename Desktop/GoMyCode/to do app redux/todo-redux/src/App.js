import React from 'react';
import './App.css';
import Todo from './Todo/Todo';
import General from './General/General';

const App=()=> {
  return (
    <div className="App">
     <Todo/>
      <General/>
    </div>
  );
}

export default App;
