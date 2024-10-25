import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="flex-grow bg-gray-800 text-white p-5">
        <h1 className="text-4xl">Contenido Principal</h1>
      </div>
    </div>
  );
}

export default App;

