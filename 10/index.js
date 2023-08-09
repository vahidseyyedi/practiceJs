const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var divisonH;
var leftOverH;
var min;
var leftOverM;
var leftOverS;
var re;
rl.question("please enter time : \n", (time) => {
    if (time < 0 || time > 359999) {
        console.log("no");
    } else {
        divisonH = Math.floor(time / 3600);
        leftOverH = time % 3600;
        min = Math.floor(leftOverH / 60);
        leftOverM = leftOverH % 60;
        leftOverS = Math.floor(leftOverM % 60);
        check(divisonH, min, leftOverS);
    }
});

function check(hour, min, sec) {
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    re = `${hour} : ${min} : ${sec}`
    console.log(re);
    rl.close();
}

// const time = document.getElementById("time");
// const submit = document.getElementById("submit");
// const show = document.getElementById("show");
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (time.value < 0 || time.value > 359999) {
//         alert("no");
//     } else {
//         var divisonH = Math.floor(time.value / 3600);
//         var leftOverH = time.value % 3600;
//         var min = Math.floor(leftOverH / 60);
//         var leftOverM = leftOverH % 60;
//         var leftOverS = Math.floor(leftOverM % 60);
//         show.innerText =divisonH + ":" + min + ":" + leftOverS;
//     }
// })