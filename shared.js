// With querySelector we pass any CSS selectors we want to
// target an element in the DOM.
// With querySelectorAll we can get all the elements with the
// selectors we specify. Return an array.
// var backdrop = document.querySelectorAll(".backdrop");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var planButtons = document.querySelectorAll(".plan button");

backdrop.addEventListener("click", hideModal);

var modalButtonNo = document.querySelector(".modal__action--negative");
modalButtonNo.addEventListener("click", hideModal);

for (const button of planButtons) {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}
// setting the diplay propery value.
// backdrop.style.display = "block";

function hideModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
