const reserve = document.querySelector("#reserve");
const fullname = document.querySelector("#fullname");
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(fullname.value,fullname.textContent)
  if (fullname.value == "") {
    alert("Name is required");
  } else alert("Your reservation has been submitted!");
});
