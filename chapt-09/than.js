let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise is pending")
        resolve(true)
    },2000)
    
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise is reject");
        reject(new Error("something is wrong"))
    },5000)
})

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("some this occure")
})

console.log(p1,p2)