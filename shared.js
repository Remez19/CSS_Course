// With querySelector we pass any CSS selectors we want to
// target an element in the DOM.
// With querySelectorAll we can get all the elements with the
// selectors we specify. Return an array.
// var backdrop = document.querySelectorAll(".backdrop");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var planButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  hideModal();
});

var modalButtonNo = document.querySelector(".modal__action--negative");
if (modalButtonNo) {
  modalButtonNo.addEventListener("click", hideModal);
}

for (const button of planButtons) {
  button.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
// setting the diplay propery value.
// backdrop.style.display = "block";

function hideModal() {
  // backdrop.style.display = "none";

  // modal.style.display = "none";
  // Removes a CSS class to the element.
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  // Add a CSS class to the element.
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
// Reso
