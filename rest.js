

function sum(...c){ // rest operator
   console.log(c) // [10,20]
    for(let t of c){
        console.log(t)
    }
}


sum(10,20) 
sum(10,20,30) 
sum(10,20,30,40)



// let arr = [10,20,30]
// let c = [...arr]