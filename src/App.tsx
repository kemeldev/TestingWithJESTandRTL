import React from 'react';
import './App.css';
import { Application } from './components/application/application'
import { Skills } from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { AppProviders } from './components/providers/AppProviders';
import { MuiMode } from './components/mui/MuiMode';

function App() {
  return (

    <AppProviders>
      <div className='App'>
        <Application />
        <Skills skills={['HTML', 'CSS']} />
        <Counter />
        <MuiMode />
        <p>Learn React</p >
      </div >
    </AppProviders>

  );
}

export default App;
