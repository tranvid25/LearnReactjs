import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider } from '../store/Provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
       <App />
    </TodoProvider>
    
  </React.StrictMode>,
)
/*Các loại hook trong React

1.useState
-Mục đich quản lý state function components
2.useEffect
-mục đích:thực hiện side effect trong function components.Tương tự như các lifecycle
method trong componentdidMount,componentdidupdate và componentWillUmount trong class components
3.useContext
-Mục đích:Sử dụng context để truyền dữ liệu qua các component mà ko cần phải truyền props qa nhiều tầng
4.useReducer
-Mục đích:Quản lý state phức tạp hơn trong function components thay thế useState
5.useCallback
-Mục đích:tránh tạo lại các hàm ko cần thiết giữa các lần render
6.useMmemo
-Mục đích:ghi nhớ giá trị đã tính toán lại chỉ khi dependence thay đổi
7.useRef
-Mục đích:truye cập trực tiếp đến DOM elements hoặc lưu trữ một giá trị ko cần render lại khi thay đổi
8.useLayoutEffect
-Mục đíhc:tuonwg tự như useEffect,nhưng đc gọi đồng bộ sau khi tắt cả Dom mutations đã 
đc thực hiện.Nên dùng khi bạn cần đo đạc Dom và thực hiejn các thay đổi ngay lập tứcc
-9.Custom Hooks
-Mục đích:Tạo các hooks tùy chỉnh để tái sử dụng logic stateful
*/