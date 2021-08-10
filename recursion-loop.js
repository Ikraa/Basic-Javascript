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


// increment recursion by using function with if loop:

function sum(i){
    if(i==6){
        return 6;
    }
    return i+sum(i+1);
}
console.log(sum(1));




// ------------------------------------------------------------------------------
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



// recursion factorial using by function(decreament):

function factorial(i){

    if (i == 1) {    // stopping condition
    
        return 1;
    }
        return i*factorial(i-1);
    }
    console.log(factorial(6));




// Example of Fibonaccy:--------------------------------------
//  0 1 1 2 3 5 8 13 21 34 55

//  1st=1st+0;
//  2nd=1st+1st
//  3rd=2nd+1st
//  4th=3rd+2nd
//  5th=4th+3rd
//  6th=5th+4th
//  119th=118th+117th
//  nth=(n-1)th+(n-2)th


// Fibonaccy Recursion using by for loop:

let fibo=[0, 1];
 for(i=2; i<=6; i++)
 {
     fibo[i]=fibo[i-1] + fibo[i-2];
    
 }
 console.log(fibo);


 
 //Fibonaccy Recursion using by function:
     
function fibo(i){
    if(i ==0){

        return 0;
    }                   //stoping condtion
    if(i ==1 ){
        
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(6));