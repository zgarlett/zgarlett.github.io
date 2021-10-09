import React from 'react';
import './App.css';
import { Resume, Demo, Work } from './components';
import { Navigation } from './components/navigation';

function App() {
    return (
        <>
            <Navigation />
            <Demo />
            <Resume />
            <Work />
        </>
    );
}

export default App;
