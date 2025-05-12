import React from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";

function App() {
  return <Message />;
}

export default App;
// const listProducts = [
//   {
//     url: "https://tse1.mm.bing.net/th?id=OIP.gviY_GkdXcaXw6qVaoIR9wHaE7&pid=Api&P=0&h=180",
//     title: "shop xu hướng",
//     price: 1000,
//   },
//   {
//     url: "https://tse1.mm.bing.net/th?id=OIP.gviY_GkdXcaXw6qVaoIR9wHaE7&pid=Api&P=0&h=180",
//     title: "shop xu hướng",
//     price: 1000,
//   },
//   {
//     url: "https://tse1.mm.bing.net/th?id=OIP.gviY_GkdXcaXw6qVaoIR9wHaE7&pid=Api&P=0&h=180",
//     title: "shop xu hướng",
//     price: 1000,
//   },
// ];
// return (
//   <div style={{display:"flex",gap:"20px"}}>
//     {listProducts.map((product, index) => {
//       return (
//         <Product
//           title={product.title}
//           url={product.url}
//           price={product.price}
//           key={index}
//         />
//       );
//     })}
//   </div>
// );
//  const isRenderCategory=true;
//  if(isRenderCategory){
//   return <Category/>;
//  }else{
//   return <Not_Category/>
//  }
