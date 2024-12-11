const btn = document.getElementById("btn");

function multipleNumbers(a, b) {
  const sum = a * b;
  console.log(sum);
}

btn.addEventListener("click", function () {
  multipleNumbers(4, 4);
});