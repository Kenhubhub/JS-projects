const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h1.classList.add("text-center");
h2.classList.add("text-center");
const now = new Date();
let Months = {
    0:"January",
    1:"Febuary",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
}
let Days = {
    1 : "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
}
console.log(Months[now.getMonth()])
console.log(Days[now.getDay()]);
console.log(now.getFullYear())
console.log(now.getHours())
setInterval( () => {
    const now = new Date();
    let datenow = `${now.getDate()} ${Months[now.getMonth()]} ${Days[now.getDay()]}`;
    let timenow = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    h1.textContent = datenow;
    h2.textContent = timenow;
})