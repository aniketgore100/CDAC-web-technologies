let tab1 = () => {
    let inputvalue = parseInt(document.getElementById("inp1").value);
    let selectcolor = document.getElementById("inp2").value;
    switch(inputvalue) {
        case 1:
              document.getElementById("1").style.backgroundColor = selectcolor;
          break;
        case 2:
            document.getElementById("2").style.backgroundColor = selectcolor;
          break;
        case 3:
            document.getElementById("3").style.backgroundColor = selectcolor;
            break;
        case 4:
            document.getElementById("4").style.backgroundColor = selectcolor;
            break;
        case 5:
            document.getElementById("5").style.backgroundColor = selectcolor;
            break;
        case 6:
            document.getElementById("6").style.backgroundColor = selectcolor;
            break;
        case 7:
            document.getElementById("7").style.backgroundColor = selectcolor;
            break;
        case 8:
            document.getElementById("8").style.backgroundColor = selectcolor;
            break;
        case 9:
            document.getElementById("9").style.backgroundColor = selectcolor;
            break;
            
        default:
          
      }
}