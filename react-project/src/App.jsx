import React, { useState } from "react";
import Product from "./components/Product";
import Category from "./components/category";
import Not_Category from "./components/Not_Category";
import Message from "./components/Message";

function App() {
//   const colors = ["#FF0000", "#0000FF", "#FF00FF"];
//   const [color, setColor] = useState("#FF0000");
//   const handleChangeColor = (index) => {
//     setColor(colors[index])
//   };
const[chooseProduct,setChooseProduct]=useState(1)
  const products=[
   {id:1,name:"Iphone 13 pro"},
   {id:2,name:"Iphone 14 pro"},
   {id:3,name:"Iphone 15 pro"},
  ];
  const handlegetcheck=(id)=>{
   // setChooseProduct(id);
   if(!chooseProduct.includes(+id)){
      setChooseProduct((prev)=>{
      return [...prev,+id];
      });
   }else{
      setChooseProduct((prev)=>{
         return chooseProduct.filter((idProduct)=>idProduct !== +id);
      });
   }
  }
  return (
    <div>
     
      <div>
         {
            products.map((product,index)=>{
               return (
               <div key={index}>
                  <label>{product.name}</label>
                  <input type="radio" value={product.id}
                  onChange={(e)=>handlegetcheck(e.target.value)} 
                  checked={+chooseProduct === product.id}/>
               </div>
               //giải thích value product.id=2 đi thì hàm handlegetchek sẽ nhận id =2
               // sau đó setcountProduct sẽ cập nhật id =2 vào chooseProduct ròi dùng 
               // hàm checked để kiểm coi chooseProduct==product.id ko nếu bằng radio đánh dấu là đang chọn
               );
            })
         }
      </div>
    </div>
  );
}

export default App;
// const handleInitalState=()=>{
//     return 1+1+1;
//   }
//   const[count,setCount]=useState(()=>{
//     const number=1+1+1;
//     console.log(number);
//     return number;
//   });
//   const handleCount=()=>{
//     //  nếu dùng setCount(count+1) thì nó vẫn chỉ tăng 1;
//     //nếu dùng callback còn cái ni tăng 3
//     setCount((prev)=>prev+1);
//     setCount((prev)=>prev+1);
//     setCount((prev)=>prev+1);
//   };

//   return <div>
//     <button onClick={handleCount}>Click me{count}</button>
//     Count:{count}
//     </div>;
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
