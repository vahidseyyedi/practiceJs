var arr = [];
var outPut = [];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
add();
function add() {
    rl.question("please enter number : \n", (num) => {
        arr.push(num);
        rl.question("continue?(y/n)", (answer) => {
            if (answer == "y") {
                add();
            } else {
                rl.question("show");
                primeNumber();
            }
        })
    });

}

function primeNumber() {
    for (let i in arr) {
        var index = false;

        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) {
                index = true;
            }
        }
        if (index == false) {
            outPut.push(arr[i]);
        }
    }
    var q = "";
    for (let i in outPut) {
        q += outPut[i] + "|";
        console.log(outPut[i])
    }
}


















// const number = document.getElementById("number");
// const submit = document.getElementById("sub");
// const div = document.getElementById("show");
// const prime = document.getElementById("prime");
// const result = document.getElementById("result");

// var entrance = [];
// var output = [];

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (number.value == "") {
//         alert("no");
//     } else {
//         entrance.push(number.value);
//         number.value = "";
//         var s = "";
//         for (let i in entrance) {
//             s += entrance[i] + "|";
//         }
//         div.innerText = s;
//     }
// });
// prime.addEventListener("click", calc);

// function calc() {
//     for (let i in entrance) {
//         var index = false;

//         for (let j = 2; j < entrance[i]; j++) {
//             if (entrance[i] % j == 0) {
//                 index = true;
//             }
//         }
//         if(index == false){
//             output.push(entrance[i]);
//         }
//     }
//     var q = "";
//     for (let i in output) {
//         q += output[i] + "|";
//         console.log(output[i])
//     }
//     result.innerText = "result: " + q;
// }
