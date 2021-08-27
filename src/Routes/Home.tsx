import React, { useState } from "react";
import ImagePng from "../Assets/react.png"; // create declaration.d.ts file and declare the type
import LogoSvg from "../Assets/logo.svg";

const Home = (props) => {
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <>
      <h1>this is main page</h1>
      <h2>Hello world!!!!!ㅇㅇ {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Click to -
      </button>
      <img src={ImagePng} alt="logo" className="logoImg" />
      <img src={LogoSvg} alt="logo" className="logoImg" />
    </>
  );
};

export default Home;
