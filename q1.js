//  n = 297
// step1:
//  find the product of its digit => 126 

// step 2: => reverse it and then find the product again ,621 => 12
 

function products(n){
    let p = 1
    while(n>0){
        let last = n%10
        p = p*last 
        n = parseInt(n/10)
    }
    return p
}


let p = products(297) 
console.log(p)
let rev = 0
while(p>0){
    let last = p%10; 
    rev = rev*10 + last 
    p = parseInt(p/10)
} 
console.log(rev)
let p2 = products(rev) 
console.log(p2)


// console.log(p) 
// // reverse the number: 
// let rev = 0 

// console.log(rev)

// let p2 = 1
// while(rev>0){
//     let last = rev%10
//     p2 = p2*last 
//     rev = parseInt(rev/10)
// }

// console.log(p2)