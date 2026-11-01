function outer()
{
    function inner()
    {
        console.log("innner function")
    }
     return inner;
}

let c=outer();
c();