import React, { useCallback, useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";
import Timer from "./components/Timer";

function App() {
const [count,setCount]=useState(0);
const handleIncrease=useCallback(()=>{
  setCount((prev)=>prev+1);
},[]);
return (
   <div>
     <div>{count}</div>
     <Content handleIncrease={handleIncrease}/>
   </div>
  );
}

export default App;
//render là hiển thị giao diện ra màn hình 