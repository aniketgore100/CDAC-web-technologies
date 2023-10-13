let arr = [];

function add(){
    arr.push(document.getElementById("inp").value);
    document.getElementById("inp").value = "";
    let stulist = inpval.value;
    console.log(stulist);
    console.log(arr);
    
}

function getData(){
    var listContainer = document.getElementById("ans");
    listContainer.innerHTML = "List:<br>";

    for (var i = 0; i < arr.length; i++) {
        listContainer.innerHTML += arr[i] + "<br>";
    }
}