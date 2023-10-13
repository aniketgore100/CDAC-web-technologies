function checkuid(){
   let userid = document.getElementById("uid").value;
   let reguid = "^[a-zA-z]"
   if(userid == ""){
    document.getElementById("err").innerHTML = "this field is required";
   }
   elseif(!userid.match())
   console.log(userid);
}