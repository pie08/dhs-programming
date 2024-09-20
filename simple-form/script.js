const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
});
