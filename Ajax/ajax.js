function getdata() {
  const data = new XMLHttpRequest();
  data.onload = function () {
    document.getElementById("text-card").innerHTML = this.responseText;
    document.getElementById("text-card").style.color = "green";
  };
  data.open("GET", "./data/msg.txt");
  data.send();
}

function getjson() {
  const data = new XMLHttpRequest();
  data.onload = function () {
    const jsonData = JSON.parse(data.responseText);
    display(jsonData);
  };
  data.open("GET", "http://localhost:8888/product", true);
  data.send();
}

let display = (user) => {
  let htmltemp = "";
  user.forEach((user) => {
    htmltemp += `
      <ul class="list-group mt-1">
        <li class="list-group-item bg-danger text-white">ID: ${user.id}</li>
        <li class="list-group-item bg-success">First Name: ${user.fname}</li>
        <li class="list-group-item bg-success">Last Name: ${user.lname}</li>
        <li class="list-group-item bg-success">Email: ${user.email}</li>
        <li class="list-group-item bg-success">Age: ${user.age}</li>
        <li class="list-group-item bg-success">Is Active: ${user.isactive}</li>
      </ul>`;
  });

  document.getElementById("json-card").innerHTML = htmltemp;
};

function getApi() {
  const apiData = new XMLHttpRequest();
  apiData.onload = function () {
    let data = apiData.responseText;
    let users = JSON.parse(data);
    displayApi(users);
  };
  apiData.open("GET", "http://jsonplaceholder.typicode.com/users");
  apiData.send();
}

let displayApi = (users) => {
  let htmltemp = "";
  for (let user of users) {
    htmltemp += `<ul  class="list-group mt-1">
            <li class="list-group-item bg-danger text-white">${user.id}</li>
            <li class="list-group-item bg-success">${user.name}</li>
            <li class="list-group-item bg-success">${user.email}</li>
            <li class="list-group-item bg-success">${user.address.city}</li>
            <li class="list-group-item bg-success">${user.phone}</li>

        </ul>`;
  }
  document.getElementById("api-card").innerHTML = htmltemp;
};

// function addData() {
//   // Get user input
//   let id = document.getElementById("ip0").value;
//   let fname = document.getElementById("ip1").value;
//   let lname = document.getElementById("ip2").value;
//   let email = document.getElementById("ip3").value;
//   let age = document.getElementById("ip4").value;
//   let status = document.getElementById("ip5").value;

//   const dataObject = {
//     id: id,
//     fname: fname,
//     lname: lname,
//     email: email,
//     age: age,
//     isactive: status,
//   };

//   const jsonData = JSON.stringify(dataObject);
//   const data = new XMLHttpRequest();
//   data.onload = function () {
//     if (data.status === 200) {
//       const jData = JSON.parse(data.responseText);
//       console.log("Response data:", jData);
//     } else {
//       console.error("Error:", data.status, data.statusText);
//     }
//   };
//   data.open("POST", "http://localhost:8888/product", true);
//   data.setRequestHeader("Content-Type", "application/json");
//   data.send(jsonData);
// }

function addData() {
  let userPro = {
    fname: document.getElementById("ip1").value,
    lname: document.getElementById("ip2").value,
    email: document.getElementById("ip3").value,
    age: document.getElementById("ip4").value,
    isactive: document.getElementById("ip5").value,
  };
  console.log(userPro);
  let convert = JSON.stringify(userPro);
  console.log(convert);
  const data = new XMLHttpRequest();
  data.onload = function () {};
  data.open("POST", "http://localhost:8888/product");
  data.setRequestHeader("Content-Type", "application/json");
  data.send(convert);
}

function getName() {
  let id = document.getElementById("name").value;
  let url = `http://localhost:8888/product/${id}`;
  const data = new XMLHttpRequest();
  data.onload = function () {
    const jsonData = JSON.parse(data.responseText);
    display2(jsonData);
  };
  data.open("GET", url);
  data.send();
}

let display2 = (user) => {
  let htmltemp = "";
  htmltemp = `
      <ul class="list-group mt-1">
        <li class="list-group-item bg-danger text-white">ID: ${user.id}</li>
        <li class="list-group-item bg-success">First Name: ${user.fname}</li>
        <li class="list-group-item bg-success">Last Name: ${user.lname}</li>
        <li class="list-group-item bg-success">Email: ${user.email}</li>
        <li class="list-group-item bg-success">Age: ${user.age}</li>
        <li class="list-group-item bg-success">Is Active: ${user.isactive}</li>
      </ul>`;
  document.getElementById("json2-card").innerHTML = htmltemp;
};

function edit() {
  let id = document.getElementById("name").value;
  // console.log(id);
  let url = `http://localhost:8888/product/${id}`;
  const data = new XMLHttpRequest();
  data.onload = function () {
    const jsonData = JSON.parse(data.responseText);
    console.log(jsonData);
    // display2(jsonData);
    document.getElementById("ip1").value = jsonData.fname;
    document.getElementById("ip2").value = jsonData.lname;
    document.getElementById("ip3").value = jsonData.email;
    document.getElementById("ip4").value = jsonData.age;
    document.getElementById("ip5").value = jsonData.isactive;
  };
  data.open("GET", url);
  data.send();
}

function save() {
  let userPro = {
    fname: document.getElementById("ip1").value,
    lname: document.getElementById("ip2").value,
    email: document.getElementById("ip3").value,
    age: document.getElementById("ip4").value,
    isactive: document.getElementById("ip5").value,
  };
  console.log(userPro);
  let convert = JSON.stringify(userPro);
  let id = document.getElementById("name").value;
  let url = `http://localhost:8888/product/${id}`;
  const data = new XMLHttpRequest();
  data.onload = function () {
    const jsonData = JSON.parse(data.responseText);
    // display2(jsonData);
  };
  data.open("PUT", url);
  data.setRequestHeader("Content-Type", "application/json");
  data.send(convert);
}
