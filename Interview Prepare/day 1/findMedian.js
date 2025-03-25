/*
The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
*/

// 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧 (𝐈𝐧𝐢𝐭𝐢𝐚𝐥 𝐕𝐞𝐫𝐬𝐢𝐨𝐧):

function findMedian(arr) {
    arr.sort((a, b) => a - b); // Sort in ascending order
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2; // Average of two middle numbers
    } else {
        return arr[mid]; // Middle number
    }
}

const numbers = [0, 1, 2, 4, 6, 5, 3];

console.log(findMedianOptimized(numbers))

// 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐞𝐝 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 (𝐈𝐦𝐩𝐫𝐨𝐯𝐞𝐝 𝐓𝐢𝐦𝐞 & 𝐒𝐩𝐚𝐜𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐱𝐢𝐭𝐲):

function quickSelect(arr, left, right, k) {
    if (left === right) return arr[left];

    const pivotIndex = partition(arr, left, right);
    if (k === pivotIndex) return arr[k];
    else if (k < pivotIndex) return quickSelect(arr, left, pivotIndex - 1, k);
    else return quickSelect(arr, pivotIndex + 1, right, k);
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

function findMedianOptimized(arr) {
    const n = arr.length;
    if (n % 2 === 1) {
        console.log('Old Number :');
        console.log(arr, 0, n - 1, Math.floor(n / 2));
        return quickSelect(arr, 0, n - 1, Math.floor(n / 2));
    } else {
        console.log('Even Number :');
        console.log(arr, 0, n - 1, Math.floor(n / 2) - 1);
        console.log(arr, 0, n - 1, Math.floor(n / 2));
        const mid1 = quickSelect(arr, 0, n - 1, Math.floor(n / 2) - 1);
        const mid2 = quickSelect(arr, 0, n - 1, Math.floor(n / 2));
        return (mid1 + mid2) / 2;
    }
}
