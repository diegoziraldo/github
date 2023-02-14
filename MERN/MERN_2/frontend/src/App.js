import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes path="/" component={NoteList}/>
    </Router>
    </>
  )

}

export default App;
