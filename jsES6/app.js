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
var courseApi='http://localhost:3000/courses'
fetch(courseApi)
     .then(function(response){
        return response.json();
     })
     .then(function(courses){
        console.log(courses);
     })
//Server(fake) /Mock API 
var listCoursesBlock = document.querySelector('#list-courses');
// Bạn phải khai báo API đúng nha
var listCoursesBlock = document.querySelector('#list-courses');
var nameInput = document.querySelector('input[name="name"]');
var descInput = document.querySelector('input[name="description"]');
var createBtn = document.querySelector('#create');
function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// Lấy dữ liệu courses từ API
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(callback)
        .catch(function(error) {
            console.error('Fetch error:', error);
            listCoursesBlock.innerHTML = '<li>Error loading courses</li>';
        });
}
function createCourse(data,callback){
    var options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    };
    fetch(courseApi,options)
       .then(function(response){
        return response.json();
       })
       .then(callback);
}
function deleteCourse(id){
    var options={
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' +id,options)
        .then(function(response){
            return response.json();
        })
        .then(function(){
             var item =document.querySelector('.course-item-' + id);
             if(item){
                item.remove();
             }
        });
}
function updateCourse(id,data,callback){
    var options={
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    };
    fetch(courseApi + '/' +id,options)
       .then(function(response){
        return response.json();
       })
       .then(callback);
}


// Hiển thị courses ra #list-courses
function renderCourses(courses) {
    var htmls = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
           <h4>${course.name}</h4>
           <p>${course.description}</p>
           <button onClick="deleteCourse(${course.id})">Xóa</button>
           <button onClick="handleEdit(${course.id})">Sửa</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}
function handleCreateForm(){
    var createBtn=document.querySelector('#create');
    createBtn.onclick=function(){
        var name=document.querySelector('input[name="name"]').value;
        var description=document.querySelector('input[name="description"]').value;
        var formData={
            name:name,
            description:description
        };
        var editingId=createBtn.getAttribute('data-edit-id');
        if(editingId){
            updateCourse(editingId,formData,function(){
                createBtn.textContent='Lưu';
                createBtn.removeAttribute('data-edit-id');
                resetForm();
                getCourses(renderCourses);
            })
        }
        createCourse(formData,function(){
            resetForm();
            getCourses(renderCourses);
        });
    }
}
function handleEdit(id){
    fetch(courseApi + '/' +id)
        .then(function(response){
            return response.json();
        })
        .then(function(course){
            nameInput.value = course.name;
            descInput.value = course.description;
            createBtn.textContent = 'Cập nhật';
            createBtn.setAttribute('data-edit-id', id);
        })
}
