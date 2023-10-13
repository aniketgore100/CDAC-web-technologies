// let string = document.getElementById("h1").innerText;
// console.log(string.indexOf("t"));

// console.log(string.lastIndexOf("t", 22));
// console.log(string.search("aniket"));

// console.log(string.slice(7));
// console.log(string.slice(7, 22));

// console.log(string.replace(/aniket/ig, 'gore'));


// let myclock = () => {
// let d  = new Date();
//     document.getElementById("h1").innerHTML = d.toLocaleTimeString();
// }
// setInterval(myclock, 1000);

// var emp = {
//     id: 101,
//     name: "aniket",
//     post: "soft engg",
//     contact: "9588428818",
//     company: "C-DAC",
//     detail:function(){
//         return `id:${this.id} name:${this.name} post:${this.contact}`
//     }
// }
// document.write(emp.detail())


let arr = ["aniket", "sanket", "kishore", "shri", "indra"];

for(let i =0; i<arr.length; i++){
    document.write(arr[i] + ',');
}
document.write("<br>")


let emp = [{
    id: 101, name: "aniket", post: "soft engg", contact: "9588428818", company: "C-DAC",
},
{
    id: 101, name: "aniket", post: "soft engg", contact: "9588428818", company: "C-DAC",
},
{
    id: 101, name: "aniket", post: "soft engg", contact: "9588428818", company: "C-DAC",
},
{
    id: 101, name: "aniket", post: "soft engg", contact: "9588428818", company: "C-DAC",
},
{
    id: 101, name: "aniket", post: "soft engg", contact: "9588428818", company: "C-DAC",
}
]

for(let i = 0; i<emp.length; i++){
    document.write(emp[i].id, emp[i].name, emp[i].post, emp[i].contact, emp[i].company, `<br>`);
}

