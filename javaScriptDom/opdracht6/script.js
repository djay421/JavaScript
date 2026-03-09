const blokken = document.querySelector("div");

function gegooid() {
  const nummers = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];

if (nummers[0]) document.querySelector(".stenen .n1").src = "1c.gif";
if (nummers[1]) document.querySelector(".stenen .n2").src = "2c.gif";
if (nummers[2]) document.querySelector(".stenen .n3").src = "3c.gif";
if (nummers[3]) document.querySelector(".stenen .n4").src = "4c.gif";
if (nummers[4]) document.querySelector(".stenen .n5").src = "5c.gif";
if (nummers[5]) document.querySelector(".stenen .n6").src = "6c.gif";




  function countNumber(num) {
    return nummers.filter(n => n === num).length;
  }

  for (let i = 1; i <= 6; i++) {
    document.querySelector(".nm" + i).textContent = i + ": " + countNumber(i);
  }


}
