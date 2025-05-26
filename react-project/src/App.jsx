import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";
import Timer from "./components/Timer";

function App() {
const[courses,setCourses]=useState([]);
const [name,setName]=useState("");
const[price,setPrice]=useState("");
const handlesubmit=()=>{
  const course={
    name,
    price:+price,
  };
  setCourses((prev)=>[...prev,course])
};
// const total=courses.reduce((cur,course)=>{
//    return cur+course.price;
// },0);
const total=useMemo(()=>{
 return courses.reduce((cur,course)=>{
    return cur+course.price;
  },0);
},[courses])
return (
   <div>
    <div>
      <input type="text"placeholder="Nhập tên khóa học" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text"placeholder="Nhập giá khóa học" value={price} onChange={(e)=>setPrice(e.target.value)} />
      <button onClick={handlesubmit}>Add</button>
      <div>Total:{total}</div>
      <ul>
        {courses.map((course,index)=>{
          return (
              <li key={index}>
                Tên khóa học:{course.name},Giá:{course.price}
              </li>
          );
        })}
      </ul>
    </div>
   </div>
  );
}

export default App;
//render là hiển thị giao diện ra màn hình 