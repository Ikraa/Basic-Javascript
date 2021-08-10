// // let's try to find out sum by loop: (increament)

let sum=0;       // init value/default value
for(i=1; i<=6; i++){
    console.log(i);   //printing all value;
    sum=sum+i;      
   
}
console.log(sum);



// //(decreamnt):---------------------
let sum=0;       // init value/default value
for(i=6; i>=1; i--){
    console.log(i);   //printing all value;
    sum=sum+i;      
   
}
console.log(sum);


// // Decrement recursion by using function with if loop:

function sum(i){
    if(i==1){
        return 1;
    }
    return i+sum(i-1);
}
console.log(sum(6));


// // increment recursion by using function with if loop:

function sum(i){
    if(i==6){
        return 6;
    }
    return i+sum(i+1);
}
console.log(sum(1));






// Example of Recursive Factorial:
// 1!=1                                                     1!=1                     
// 2!=2*1                                                   2!=2
// 3!=3*2*1                                                 3!=3*2!
// 4!=4*3*2*1                       or                      4!=4*3!
// 5!=5*4*3*2*1                                             5!=5*4!
// 6!= 6*5*4*3*2*1                                          6!= 6*5!
// 7!=7*6*5*4*3*2*1                                         7!=7*6!
// n!= n*(n-1)!       ////Formula                           n!=n*(n-1)!

// let's try to find out factorial 6 or 6! by using for loop (Decreament):

let factorial=1;
for(i=6; i>=1; i--){

    factorial= factorial*i;
}
console.log(factorial);

// recursion factorial using by function
