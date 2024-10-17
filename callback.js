function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}



const sumOfCube = (a,b,sq)=>{
    val1=sq(a);
    val2=sq(b);
    return val1+val2
}
console.log(sumOfCube(2,2,cube))
