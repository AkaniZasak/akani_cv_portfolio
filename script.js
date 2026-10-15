document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
    window.location.href = "mailto:successkubayiza@gmail.com?subject=" + subject + "&body=" + body;
  });
}
