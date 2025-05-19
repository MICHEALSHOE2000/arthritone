// main.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#orderModal form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !address) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const phonePattern = /^[0-9+()\-\s]{7,20}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    alert("Thank you! Your order has been received.");
    form.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("orderModal"));
    modal.hide();
  });
});
