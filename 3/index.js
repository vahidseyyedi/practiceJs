const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("please enter number: \n" , (num)=>{
if(num <=0 )
{
    console.log("no");
    rl.close();
}else{
    var pro = 1;

    for (let i = num; i > 1; i--) {
        pro = pro * i;
    }
    console.log("answer:" + pro);
}
});





// const number = document.getElementById("number");
// const submit = document.getElementById("submit");
// submit.addEventListener("click", () => {
//     if (number.value <= 0) {
//         alert("no");
//     } else {
//         alert(facto(number.value));
//     }
// });
// function facto(num) {
//     var pro = 1;

//     for (let i = num; i > 1; i--) {
//         pro = pro * i;
//     }
//     return pro;

// }