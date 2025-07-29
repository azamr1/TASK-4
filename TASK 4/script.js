document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    let valid = true;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    if (!name) {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Email format is invalid.";
      valid = false;
    }

    if (!message) {
      messageError.textContent = "Message is required.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Message sent successfully!";
      form.reset();
    }
  });
});
