var getUserName = prompt("Hello Wold! Who are you?");

console.log(getUserName);

document.getElementById("nada").innerText = getUserName;

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
