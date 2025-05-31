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

var users=[
    {
        id:1,
        name:'Tran Vi',
    },
    {
        id:2,
        name:'lac ga'
    },
    {
        id:3,
        name:'Le hien'
    },
];
var comments=[
    {
        id:1,
        user_id:1,
        content:'i am ronaldo'
    },
    {
        id:2,
        user_id:2, 
        content:'Kệ mẹ m'
    }
];
//1.Láy comments
//2.Từ comments lấy ra user_id,
//từ user_id lấy ra user tương ứng

//Faake API
function getComment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        },1000);
})
}
function getUserById(userIds){
    return new Promise(function(resolve){
        setTimeout(function(){
            var result = users.filter(function(user){
                return userIds.includes(user.id);
            });
            resolve(result);
        }, 1000);
    });
}

getComment()
.then(function(comments){
   var userIds=comments.map(function(comment){//lấy userId
      return comment.user_id;
   });
   return getUserById(userIds).then(function(users){
    return {
        users:users,
        comments:comments,
    };
   });
})
.then(function(data){
    var commentBlock=document.getElementById('comment-block');
    var html='';
    data.comments.forEach(function(comment){
       var user=data.users.find(function(user){
        return user.id===comment.user_id
       });
       html+=`<li>${user.name}:${comment.content}</li>`

    });

})
var postApi='https://jsonplaceholder.typicode.com/todos';
fetch(postApi)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        var htmls=posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
        });
        var html=htmls.join('');
        document.getElementById('post-block').innerHTML=html
    })
    .catch(function(err){
        console.log(err)
    });
