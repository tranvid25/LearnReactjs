import React, { useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";

function App() {
const [todo,setTodo]=useState({
  id:"",
  name:""
});
//tạo ra setTodo để cập nhật giá trị
const [todoList,setTodoList]=useState([
  {id:1,name:"danh rang rua mat"},
]);
const handleGetTodo=(value)=>{
   const randomId=Math.random(10000);
   const todo={
    id:randomId,
    name:value,
   };
   setTodo(todo);
};
//cái này dùng để tạo giá trị todo từ value nhập vào là name và id là randomId
//sau đó xét giá trị todo vào settoto để cập nhật

const handleSubmit=()=>{
console.log(todo);
setTodoList((prev)=>{
  return [
    ...prev,todo
  ]
});
setTodo({
  id:"",
  name:""
});
//khi người dùng click vào thì settodollist sẽ vẫn giữ giá trị trc đó và cập nhật thêm giá trị mới vào
}
const handledelete=(id)=>{
  setTodoList(todoList.filter(todo =>todo.id !== id));
  //filter dùng để lọc các điều kiện cho trước trả ề 1 mảng mới
}
  return (
    <div>
     <div>
      <input type="text" onChange={(e)=>handleGetTodo(e.target.value)} 
      value={todo.name} />
      <button onClick={handleSubmit}>Add</button>
     </div>
     <div>
       <ul>
        {todoList.map((todo,index)=>{
          return(
            <div style={{display:"flex",
              gap:"30px"
            }} key={index}>
              <li>{todo.name}</li>
              <div style={{cursor:"pointer"}} onClick={()=>handledelete(todo.id)}>Xóa</div>
            </div>
          );
        })}
       </ul>
     </div>
    </div>
  );
}

export default App;
