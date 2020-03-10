function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-circle-down");
  // for each arrow(submit button) add event listener
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      console.log("working");
      //This will always give you the value for the input. Username, password, email.
      //This works because the previousElementSibling is the text boxes for email, password, user
      const input = arrow.previousElementSibling;
      // returns the parent Div
      const parent = arrow.parentElement;
      // Gives next form. If current is username nextForm = password.
      const nextForm = parent.nextElementSibling;

      //Check for validation.
      if (input.type === "text" && validateUser(input)) {
        console.log("Good work!");
        nextSlide(parent, nextForm);
      } else if (input === "email" && validateEmail(input)) {
        console.log("Good work!");
        nextSlide(parent, nextForm);
      } else if (input === "password" && validateUser(input)) {
        console.log("Good work!");
        nextSlide(parent, nextForm);
      }
    });
  });
}

function validateUser(user) {
  if (user.value.length <= 6) {
    console.log("not enough characters");
    // calls error with orange color to indicate wrong
    error("#E1540D");
  } else {
    error("#0d84e1");
    return true;
  }
}

function validateEmail(email) {
  //RegEx for email Validation
  const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (validation.test(email.value)) {
    return true;
    error("#E1540D");
  } else {
    error("#0d84e1");
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  // changes the whole background to orange.
  document.body.style.background = color;
}
animatedForm();
