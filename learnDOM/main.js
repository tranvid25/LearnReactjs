//html dom là document object model
// Có 3 thành phàn 
/**
 * 1.Element là thẻ tag 
 * 2.Atribute class id ,src đồ 
 * 3.text là chữ
 */

//js:Browser|Server

//Browser:HTML->DOM->DOM API

// document.write('nhận vào chuỗi');
 var heading=document.querySelector('.box.heading-2');
 console.log(heading);
/**
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
6.HTML collection
7.document.write
 */
console.log(document.forms[0]);
//DOM ARTRIBUTE
// var headingElement=document.querySelector('a');
// console.log(headingElement);
// headingElement.href='Heading';
// dùng setAtrribute để đặt các attribute khác nhau
// headingElement.setAttribute('data','heading')
//innerText,textContext
// var headingElement1=document.querySelector('h1');
// headingElement1.innerText='Nêw' //thay đổi nội dung
// console.log(headingElement1.innerText) 

/**
 * innerText hoặc textContent
 * innertext là nội dung giá trị thì nội dung lấy đc sẽ giống nội dung giá trị
 * textContent là chỉnh những gì thực sự nằm trong textNode và element node
 */
//Node Properties
var boxElement=document.querySelector('.box');
console.log(boxElement);
//thì sẽ thấy đc các thư viện cần xài trong này với node
//Đối tượng dom style
var boxElement=document.querySelector('.box');
boxElement.style.height='200px';
boxElement.style.width='100px';
boxElement.style.backgroundColor='red';
//cách 1
Object.assign(boxElement.style,{
    width:'200px',
    height:'100px',
    backgroundColor:'green',
});
//cách 2


console.log(boxElement.style.backgroundColor);
/**
 ClassList Properties
 +add
 +contains
 +remove
 +toggle
 */
boxElement.classList.add('red','blue')//cách thêm nhiều class
//lấy ra được từng class số lượng giá trị dạng chuỗi
// ;
//Kiểm tra có tồn tại ko 
console.log(boxElement.classList.contains('red'));
setTimeout(()=>{
    boxElement.classList.toggle('red');
},3000);
//toggle

//DOM EVENTS
//1.Atrribute events
//2.assign event using the element node
/**
 * ví dụ tui có 1 chữ khi tui nhấn vào sẽ hiển thị 1 số random
 * c1 dùng onclick
 * c2 dùng onmouseove để hover vào là tự hiển thị 1 số random
 * danh sách sự kiện bên w3school ht
 */
var h1element=document.querySelectorAll('h1');
for(var i=0;i<h1element.length;i++){
    h1element[i].onclick=function(e){
        console.log(e.target);
    }
}
// trong thực tế sẽ dùng cách này