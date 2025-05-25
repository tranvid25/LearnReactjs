import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";
import Timer from "./components/Timer";

function App() {
const[count,setCount]=useState(1);
const[post,setPost]=useState([]);
const[color,setColor]=useState("");
const[show,setShow]=useState(false);
// useEffect(()=>{
//   fetch("http::")
//   .then((response) =>response.json())
//   .then((json)=>setPost(json));
// });
useEffect(()=>{
 if(count%2==0){
  setColor("red");
 }else{
  setColor("black")
 }
},[count]);
return (
   <div>
    <div>{count}</div>
    <div style={{background:color,
      width:"70px",
      height:"40px"
    }}>

    </div>
   <button onClick={()=>setCount(count+1)}>Click me</button>
   <button onClick={()=>setShow(!show)}>Show</button>
   {show&&<Timer/>}
   <Content/>
   </div>
  );
}

export default App;
