let fl_num = "";
let oper = "";

function number(num) {
  let div = document.getElementById("screen");
  fl_num += num.toString();
  div.innerText = fl_num;
}

// operator(op)
// operator('+')
// op = '+'

// function operator(op) {
//   console.log(op);
//   if (op == "+") {
//     oper = op;
//   } else if (op == "-") {
//     oper = op;
//   } else if (op == "*") {
//     oper = op;
//   } else if (op == "/") {
//     oper = op;
//   }
//   let div = document.getElementById("screen");
//   fl_num += oper;
//   div.innerText = fl_num;
// }

// === OR ===
function operator(op) {
  let div = document.getElementById("screen");
  fl_num += op;
  div.innerText = fl_num;
}

function equal() {
  let res = eval(document.getElementById("screen").innerText);
  let div = document.getElementById("screen");
  fl_num = res;
  div.innerText = res;
}

function reset(){
    let div = document.getElementById("screen");
    fl_num = "";
    div.innerText = fl_num;
  }

  function clear(){
    let div = document.getElementById("screen");
    fl_num = fl_num.substring(0, fl_num.length - 1);
    div.innerText = fl_num; 
  }
  