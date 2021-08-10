function largestNum(first,second,third){
    if(first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else{
        return third;
    }
    
}
console.log(largestNum(500,100,222))

