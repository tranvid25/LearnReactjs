//Promise xử lý các thao tác bất đồng bộ tránh callback lồng nhau
/**
 * Sync chạy theo luồng setTimeout,setInterval,fetch,XMLhttp bất đồng bộ ,đọc file
 * Async bất đồng bộ
 *  phải có callback
 */
//resolve thành công 
//reject thất bại
//1.Pendding
//2.Fulfilled
//3.reject

//thư viện output luôn luôn là một promise
var promise = new Promise(
    //Executor
    function(resolve,reject){
       //Logic
       //thành công: resolve()
       // thất bại:reject()
       resolve('Success!');
    }
);
promise
//   .then(function(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve([1,2,3]);
//         },3000);
//     });
//   })
//   .then(function(data){
//     console.log(data);
//   })
//   .catch(function(){
//     console.log('failled');
//   })
//   .finally(function(){
//     console.log('done');
//   });
// //Lý thuyết và cách hoạt động
// function sleep(ms){
//     return new Promise(function(resolve){
//      setTimeout(resolve,ms);
//     });
// }
// sleep(1000)
// .then(function(){
//     console.log(1);
//     return sleep(1000)
// })
// .then(function(){
//     console.log(2);
//     return new Promise(function(resolve,reject){
//         reject('co loi');
//     })
// })
// .then(function(){
//     console.log(3);
//     return sleep(1000)
// })
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err);
});
/**
 * promise.resolve
 * promise.reject
 * promise.all
 */


//ARROWFUNCTION
const logger =(log)=>{
    console.log(log);
}
logger('Message...');
const sum =(a,b)=>a+b;
console.log(sum(2,2));
