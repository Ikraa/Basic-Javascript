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