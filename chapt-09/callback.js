let sum=(a,b,callback)=>{
    let result=a+b;
    console.log(result)
    hello();
}

function hello()
{
    console.log("hello world");
}

sum(10,20,hello)