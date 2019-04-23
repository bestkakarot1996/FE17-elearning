import React from 'react';
import './App.css';
import Header from './components/Header'
import CourseList from './components/CourseList'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>ELEARNING</h1>
      <CourseList />
    </div>
  );
}

export default App;
