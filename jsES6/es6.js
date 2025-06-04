function logger(log){
    console.log(log);
}
logger('siuuuu')
//function thường
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,2));
//arrowfunction
const course={
    name:'javascript basic',
    getName:function(){
        return this.name;
    }
};
console.log(course.getName());

//enhance
/**
 * định nghĩa key:value cho object
 * định nghĩa method cho object
 * định nghĩa key cho object dưới dạng 
 */
var name='Javascript';
var price=1000;
var Course={
    name:name,
    price:price,
    getName:function(){
      return this.name;
    }
}
console.log(Course.getName());
function arrayObject(arr){
    return arr.reduce((obj,item)=>{
        const[key,value]=item;
        obj[key]=value
        return obj;
    },{})
}
//chuyển array thành object

//Destructuring
var array=['javascript','php','ruby'];
var [a,c,b]=array;
var a=array[1];
console.log(a);
console.log(a,c,b);
var khoahoc={
    name:'javascript',
    price:1000,
    image:'image-address',
    children:{
        name:'Reactjs'
    }
};
var {name:parentName,descripton='default description'}=khoahoc;
console.log(parentName);
console.log(descripton);

//Rest
function siu(a,b,...params){
    console.log(params);
}
siu(1,2,3,4)
// nếu có a,b trong param thì nó sẽ mất 2 số đó đi

// function spread1(obj){
//     console.log(obj.name);
//     console.log(obj.price);
// }
//cách2
function spread1({name,price,...rest}){
    console.log(name,price,rest);
}
spread1({
    name:'php',
    price:1000,
    descripton:'éc éc'
})
//Spread
var spread2=['js','php']
var spread3=['éc']
var spread4=[...spread3,...spread2];
console.log(spread4);

var object1={
    name:'js'
}
var object2={
    price:1000
}
var object3={
    ...object1,
    ...object2
}
console.log(object3);
var config={
    api:'https://domain-trang-khoahoc',
    apiVersion:'v1'
};
var execiseConfig={
    ...config,
    api:'https://domain-trang-bao-tap'
}

