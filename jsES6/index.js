var courses=[
    {
        id:1,
        name:'Reajs',
        coin:480,
        tags:['AAA','DDD']
    },
    {
        id:2,
        name:'php',
        coin:490,
        tags:['AAA','BBB']
    },
    {
        id:3,
        name:'jajva',
        coin:470,
        tags:['AAA','CCC']
    },
    {
        id:4,
        name:'next',
        coin:420,
        tags:['AAA','EEE']
    }
]
//filter
const filterCourse=courses.filter((course)=>{
    return course.coin === 420 || course.name=== 'jajva';
})
console.log(filterCourse); 
//khác nhau ở chỗ filter thì sẽ căn cứ theo điều kiện tạo ra 1 mảng trong đó chứa các object 
const findUser=courses.find(course=>{
    return course.name==='php';
})
//còn find sẽ tạo chỉ tạo ra 1 đối tượng
console.log(findUser);
//map chỉ lấy ra những phần tử mình muốn lấy ra trong mảng đó thôi
//và tạo ra mảng mới gồm những giá trị mik lấy
const mapCourse=courses.map(course=>{
    return course.tags
})

console.log(mapCourse);
//FILTER NANG CAO HƠN
const filterCourses=courses.filter((course)=>{
    // let found=false;
    // course.tags.forEach(tag=>{
    //     if(tag==='BBB'){
    //         found=true;
    //     }
    // })
    // return found;
    //cách viết ngắn hơn 
    // return course.tags.some(tag=>{
    //     return tag==='BBB'
    // })
    // some dùng để kiểm tra tk nào trong array thỏa mản điều kiện hay ko
    //every dùng để kiểm tra 1 phần tử duy nhất
    return course.tags.every(tag=>{
        return tag ==='BBB'
    })
});
console.log(filterCourses);
//reduce
//biến thành object với key là naem
const reduceCourse=courses.reduce((acc,cur)=>{//tích luy
   return {...acc,[cur.name]:cur}
},{});
console.log(reduceCourse);
//biến object thành array
const arrayCourse=Object.values(reduceCourse).reduce((acc,cur)=>{
   return [...acc,cur.name];
},[])
console.log(arrayCourse);
const numbers=[1,2,3];
const toal=numbers.reduce((acc,cur)=>{
   return acc+cur;
},0)
console.log(toal);
