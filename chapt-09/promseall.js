let p1=new Promise((resolve,reject)=>{
    console.log("promise resolve p1");
    resolve(true);
})

let p2=new Promise((resolve,reject)=>{
    console.log("promise reject p2");
    reject(new Error("promise is reject "));
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise in settime out")
    },2000)
})

let result=Promise.all([p1,p2,p3]);

result.then((res)=>{
    console.log("all promise resove :",res)
})

.catch((error)=>{
    console.log("error",error.message)
})