const nummers = [
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1,
  Math.floor(Math.random() * 6) + 1
];

function gegooid() {
  document.querySelector(".getallen").textContent = "Getallen: " + nummers.join(", ");

  function countNumber(num) {
    return nummers.filter(n => n === num).length;
  }

  for (let i = 1; i <= 6; i++) {
    document.querySelector(".nm" + i).textContent = i + ": " + countNumber(i);
  }
}
