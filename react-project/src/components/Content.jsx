import { useEffect, useLayoutEffect, useState } from "react";

export default function Content(){
    const[count,setCount]=useState(1);
    useLayoutEffect(()=>{
        if(count>3){
            setCount(0);
        }
    },[count]);
    // ví dụ như layout effect khi chạy xong nó sẽ thực thi xong rồi ms hiển thị ra màn hình 
    // còn efect sẽ thực thi ra màn hình 
    //dùng để chạy đoạn code sau khi component
    // nếu count thay đổi tới một điều kiện nhất định thì useEffect sẽ thực thi để cập nhật
    const handleIncrease=(()=>{
        setCount(count+1);
    });
    return(
        <div>
        <div>{count}</div>
        <button onClick={handleIncrease}>Add</button>
        </div>
    );
}