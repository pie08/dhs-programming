const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());

  // add transportation data if it exists
  if (formData.transportation) {
    formData.transportation = new FormData(form).getAll("transportation");
  }

  console.log(formData);
  console.log(`You are ${formData.firstName} ${formData.lastName}\n
    Your email is ${formData.email}\n
    Your password is ${formData.password}\n
    You are a ${formData.grade}\n
    ${
      formData?.transportation &&
      `You have a ${formData.transportation.join(" and ")}`
    }\n
    You drive a ${formData.car}\n
    You said ${formData.comments}`);

  e.target.reset();
});
