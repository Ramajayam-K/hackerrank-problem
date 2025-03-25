/* 𝐅𝐢𝐳𝐳𝐁𝐮𝐳𝐳 𝐏𝐫𝐨𝐛𝐥𝐞𝐦:



Given a number n, for each integer i in the range from 1 to n (inclusive), print one value per line as follows:



1️⃣ If i is a multiple of both 3 and 5, print "FizzBuzz".

2️⃣ If i is a multiple of 3 (but not 5), print "Fizz".

3️⃣ If i is a multiple of 5 (but not 3), print "Buzz".

4️⃣ If i is not a multiple of 3 or 5, print the value of i.



𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧 (𝐈𝐧𝐢𝐭𝐢𝐚𝐥 𝐕𝐞𝐫𝐬𝐢𝐨𝐧):



function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log("FizzBuzz");

        } else if (i % 3 === 0) {

            console.log("Fizz");

        } else if (i % 5 === 0) {

            console.log("Buzz");

        } else {

            console.log(i);

        }

    }

}



fizzBuzz(15);



𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐞𝐝 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 (𝐈𝐦𝐩𝐫𝐨𝐯𝐞𝐝 𝐓𝐢𝐦𝐞 & 𝐒𝐩𝐚𝐜𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐱𝐢𝐭𝐲):



function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        let output = "";



        if (i % 3 === 0) output += "Fizz";

        if (i % 5 === 0) output += "Buzz";



        console.log(output || i);

    }

}
*/

'use strict';
fizzBuzz(65)

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}





