let promise=new Promise((resolve,reject)=>{
    if(true){
        resolve('resolved')
    }
    else{
        reject('rejected')
    }
})
promise.then((result)=>{
    console.log(result)
})
promise.catch((error)=>{
    console.log(error)
    
})


async function data(){
    let b=await fetch('https://fakestoreapi.com/products/1')
    let c=await b.json()
    console.log(c)
}
data()



var a=10
function add(){
    var b=10
    function sub(){
       console.log(a+b)

    return sub   
    }
}
let s=add()
console.log(s)