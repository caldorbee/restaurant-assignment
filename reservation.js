const reserve = document.querySelector("#reserve");
const fullname = document.querySelector("#fullname");
const form = document.querySelector("#form");

<<<<<<< HEAD
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
=======
reserve.addEventListener("click", function (e) {
  // e.preventDefault()
  alert("Your reservation has been submitted!")
})

form.addEventListener("submit", function (e) {
  e.preventDefault()
  if (fullname.textContent=='') {
    alert("Name is required")
  }else alert('Your reservation has been submitted!')
})
>>>>>>> 6f9d9d7a64637b73a66a0b0353fb0cbfb4096850
