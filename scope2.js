let a = 10  // global scope

for(let i = 1; i<=1; i++){
    // console.log(a) // 10
    let a = 50 // local scope
    console.log(a)  // 50
}

console.log("outside",a)