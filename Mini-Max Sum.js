// // Big line of code
// // function miniMaxSum(arr) {
// //     let Sum=[],CalculateSum=0;
// //     if(arr.length>0){
// //         for(i=0;i<arr.length;i++){
// //             for(j=0;j<arr.length;j++){
// //                 if(arr[i]!=arr[j]){
// //                     CalculateSum+= arr[j];
// //                 }
// //             }
// //             Sum.push(CalculateSum);
// //             CalculateSum=0;
// //         }
// //         console.log(Math.min(...Sum));  
// //         console.log(Math.max(...Sum));
// //     }
// // }

// // Small line of code
// function miniMaxSum(arr) {
//     let num=0;
//     let totalSum = arr.reduce((acc, num) => acc + num, 0);
//     let minValue = Math.min(...arr);
//     let maxValue = Math.max(...arr);
//     let minSum = totalSum - maxValue;
//     let maxSum = totalSum - minValue;
//     console.log(minSum, maxSum);
// }

// miniMaxSum([1,2,3,4,5]);


arr=[1,1,0,-1,-1]
// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5=0.400000,2/5=0.400000 and 1/5=0.200000.
function plusMinus(arr,n) {
    const result = arr.reduce(
        (acc, num) => {
        if (num > 0) acc.positive++;
        else if (num < 0) acc.negative++;
        else acc.zero++;
        return acc;
        },
        { positive: 0, negative: 0, zero: 0 }
    );
      
    console.log((result.positive / n).toFixed(6));
    console.log((result.negative / n).toFixed(6));
    console.log((result.zero / n).toFixed(6));
}

plusMinus(arr,arr.length);