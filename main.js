const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const input = document.querySelector(".submit .input");

const form = document.querySelector(".content form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.value;

  if (!email) {
    return;
  }

  const isEmailValid = validateEmail(email);

  if (isEmailValid) {
    alert("Email anda Valid");

    input.parentNode.classList.remove("error");

    input.value = "";
  } else {
    input.parentNode.classList.add("error");
  }
});
