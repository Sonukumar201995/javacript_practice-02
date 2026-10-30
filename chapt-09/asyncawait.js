function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data received")
        },2000)
    })
}

async function showData() {
    console.log("starting")

    let data=await getData()
    {
        console.log(data);
    }
}

showData();