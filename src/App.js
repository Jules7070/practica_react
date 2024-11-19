// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Counter />
            <Info />
            <Footer />
        </div>
    );
}

export default App;
