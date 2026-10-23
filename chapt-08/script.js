// let box=document.getElementById("box");
// console.log(box.innerHTML)
// let set=box.innerHTML="welcome to javascript"
// console.log(set)

let box=document.getElementById("box");
console.log(box.outerHTML);

let st=box.outerHTML="<h1>this is heading</h1>"
console.log(st)


let h=document.getElementsByTagName("h1");
h[0].hidden=true;