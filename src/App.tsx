import React from 'react';
import './App.css';
import { Application } from './components/application/application'
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className='App'>
      <Application />
      <Skills skills={['HTML', 'CSS']} />
      <p>Learn React</p >
    </div >

  );
}

export default App;
