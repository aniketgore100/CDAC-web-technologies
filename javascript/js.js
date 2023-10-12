
var mul = () =>{
            let input = document.getElementById("in");
            let value = input.value;

            let input2 = document.getElementById("in2");
            let val2 = input2.value;
            let h4 = document.getElementById("h4");
            console.log(h4);
           

            let result = value * val2;
            h4.innerText ="result : " + result;
}


var add = () =>{
    let input = document.getElementById("in");
    let value = input.value;

    let input2 = document.getElementById("in2");
    let h4 = document.getElementById("h4");
    let val2 = input2.value;

    let result = parseInt(value) + parseInt(val2);
    h4.innerText ="result : " + result;
}



var sub = () =>{
    let input = document.getElementById("in");
    let h3 = document.getElementById("h3");
    let value = input.value;

    let input2 = document.getElementById("in2");
    let h4 = document.getElementById("h4");
    let val2 = input2.value;

    let result = value - val2;
    h4.innerText ="result : " + result;
}



var div = () =>{
    let input = document.getElementById("in");
    let h3 = document.getElementById("h3");
    let value = input.value;

    let input2 = document.getElementById("in2");
    let h4 = document.getElementById("h4");
    let val2 = input2.value;

    let result = value / val2;
    h4.innerText = "result : " + result;
}