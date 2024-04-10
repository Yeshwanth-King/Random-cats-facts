let URL = "https://meowfacts.herokuapp.com/?count=3";
let fn = fetch(URL);
fn.then((val) => {
  return val.json();
}).then((val1) => {
  console.log(val1.data[0]);
  console.log(val1.data[1]);
  console.log(val1.data[2]);
  first.innerText = val1.data[0];
  second.innerText = val1.data[1];
  third.innerText = val1.data[2];
});

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
