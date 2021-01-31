const reserve = document.querySelector("#reserve");
const fullname = document.querySelector("#fullname");
const form = document.querySelector("#form");

<<<<<<< HEAD
reserve.addEventListener("click", function (e) {
  // e.preventDefault();
  alert("Your reservation has been submitted!");
=======
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fullname.textContent == "") {
    alert("Name is required");
  } else alert("Your reservation has been submitted!");
>>>>>>> ee1bebac0d58f82611da012fa2a0b85be3958d50
});
