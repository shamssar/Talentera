document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform form validation (optional)
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Send form data to server (you can customize this part)
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // Reset form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("Form submitted successfully!");
});
