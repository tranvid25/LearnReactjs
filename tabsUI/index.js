// const number=[1,2,3,4,5]
// const result=number.reduce2((total,number)=>{
//     return total+number;
// },10);
// //thì nó sẽ chạy là 1+2 ròi lưu 3 vào toal sau đó 3+3 tiếp vậy
// //còn nếu có initial là 10 thì 10+1 ròi 11+2
// console.log(result);
var courses=[
    {
        id:1,
        name:'Reajs',
        coin:480
    },
    {
        id:2,
        name:'php',
        coin:490
    },
    {
        id:3,
        name:'jajva',
        coin:470
    },
    {
        id:4,
        name:'next',
        coin:420
    }
]
// var totalCoin=0;
// for(var course of courses ){
//     totalCoin+=course.coin;
// }

var totalCoin=courses.reduce((acc,course)=>{
    return acc+course.coin;
},0);
console.log(totalCoin);
var newobject=courses.reduce((acc,item)=>{
    acc[item.coin]=item.name;
    return acc;
},{});
console.log(newobject);
const fruits=['Yello','Orange','Red','Red','Orange','Orange'];
const count=fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]||0)+1;
    return acc;
},{});
console.log(count);
/**
 * chuyển đổi thành object
 * tính tổng
 * nối chuỗi
 * đếm số lần nhận xét
 */
const couse=courses.map(cou=>cou.coin)
console.log(couse);
//filter là một phương thức của mảng dùng để lọc ra các ptu thỏa điều kiện trả về mảng mới
const eventnumber=courses.filter(course=>course.coin>420);
console.log(eventnumber);