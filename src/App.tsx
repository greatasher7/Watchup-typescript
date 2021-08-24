import React, {useState} from 'react';
import {hot} from 'react-hot-loader';
import './styles.css';
import ImagePng from './react.png'; // create declaration.d.ts file and declare the type
import LogoSvg from './logo.svg';

const App = () => {

    const [count, setCount] = useState(0);

    return(
        <>
            <h1>Hello world!!!!!!!!!!!!! {count}</h1>
            <button onClick={() => {setCount(count + 1)}}>Click to +</button>
            <button onClick={() => {setCount(count - 1)}}>Click to -</button>
            <img src={ImagePng} alt="logo" className="logoImg" />
            <img src={LogoSvg} alt="logo" className="logoImg" />
        </>
    )
}

export default hot(module)(App);