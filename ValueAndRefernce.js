// call by value or Pass by Value

function changeValue(a, b){ // a = 10, b = 20
    a = 100
    b = 200
    console.log("inside function",a,b)
}


let a = 10 
let b = 20 
changeValue(a,b)
console.log("outside",a,b) 



// call by Reference or Pass by Reference


function changeValue(arr,krr){ // arr=arr = 2000th, krr = brr = 5000th (refernce)
   
    arr[0] = 100 
    krr[0] = 200

}


let arr = [10,20,30]
let brr = [40,50,60]

// let newArr = [...arr]

changeValue(newArr,brr)

console.log(arr)
console.log(brr)



// let a = [] 
// b = a