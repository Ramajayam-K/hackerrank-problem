// Given an array of integers, find the sum of its elements?

function simpleArraySum(ar) {
    let SumElements=0; 
    ar.map((data,index)=>{
        SumElements+=data;
    })
    return SumElements;
}

console.log(simpleArraySum([1,2,3,45,6]))