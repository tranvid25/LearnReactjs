import React, { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";
import Timer from "./components/Timer";

function App() {
const divRef=useRef();
useEffect(()=>{
 console.log(divRef.current);
},[]);
return (
   <div>
    <div ref={divRef}> useRef</div>
    <Content/>
   </div>
  );
}

export default App;
//render là hiển thị giao diện ra màn hình 