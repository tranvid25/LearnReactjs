import React, { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";
import Timer from "./components/Timer";

function App() {
const [count,setCount]=useState(0);
const timerId=useRef();
const handleStart=()=>{
 timerId.current= setInterval(()=>{
    setCount((prev)=>prev+1);
  },1000);
}
const handleStop=()=>{
  clearInterval(timerId.current);
};
return (
   <div>
   <h2>{count}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
   </div>
  );
}

export default App;
//render là hiển thị giao diện ra màn hình 