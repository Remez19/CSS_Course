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
var ctaButton = document.querySelector(".main-nav__item--cta");
var packages = document.querySelectorAll(".package");

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  hideModal();
});

var modalButtonNo = document.querySelector(".modal__action--negative");
if (modalButtonNo) {
  modalButtonNo.addEventListener("click", hideModal);
}

// for (const package of packages) {
//   package.addEventListener("animationend", (event) => {
//     package.style.animation = "push-down 0.5s ease-out forwards";
//   });
// }

for (const button of planButtons) {
  button.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
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
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", () => {
  // Add a CSS class to the element.
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

// ctaButton.addEventListener("animationstart", (event) => {
//   console.log("Animation started");
//   console.log(event);
// });

// ctaButton.addEventListener("animationend", (event) => {
//   console.log("Animation end");
//   console.log(event);
// });

// ctaButton.addEventListener("animationiteration", (event) => {
//   console.log("Animation iteration");
//   console.log(event);
// });
