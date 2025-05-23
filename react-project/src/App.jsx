import React, { useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";
import Content from "./components/Content";

function App() {
const[show,SetShow]=useState(false);
const handleShow=() =>{
   SetShow(!show);
};
  return (
    <div>
     <button onClick={handleShow}>Show</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
