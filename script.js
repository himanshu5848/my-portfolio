document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const formData = new FormData(this);

  fetch("https://formspree.io/f/YOUR_FORM_ID", { // Replace with your Formspree ID
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
  })
  .catch(error => alert("Error sending message!"));
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
