const reserve = document.querySelector("#reserve");
const fullname = document.querySelector("#fullname");
const date = document.querySelector("#date");
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fullname.value == "") {
    alert("Name is required!");
  } else if (date.value == ""){
    alert("Date is required!");
  }else
  alert("Your reservation has been submitted!");
  document.forms['form'].reset()
});

