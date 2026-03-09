const nummers = [
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1
];


function gegooid(){
    document.querySelector(".getallen").textContent = nummers;


}