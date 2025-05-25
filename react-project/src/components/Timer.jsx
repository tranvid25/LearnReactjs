import React, { useEffect, useState } from "react";
function Timer(){
    const[count,setCount]=useState();
    useEffect(()=>{
     const interval= setInterval(()=>{
       setCount((prev)=>prev+1)
       console.log("chay lai"); 
      },1000);
      return ()=>{
        clearInterval(interval);
      }
    },[]);
    return <div>count</div>
}
export default Timer;