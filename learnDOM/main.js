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
var headingElement1=document.querySelector('h1');
headingElement1.innerText='Nêw' //thay đổi nội dung
console.log(headingElement1.innerText) 

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