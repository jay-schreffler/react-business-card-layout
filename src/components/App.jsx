import React from 'react'
import ReactDOM from 'react-dom/client'
import Photo from './Photo'
import Info from './Info'
import About from './About'
import Foot from './Foot'

export default function App() {
    return (
        <>
            <div id='wrapper'>
                <Photo />
                <Info />
                <About />
                <Foot />
            </div>
        </>
    );
};