document.getElementById("contactForm").addEventListener("submit", function (event) {
  // event.preventDefault(); // Prevent the form from submitting

  // Show the toast message
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  // Hide the toast message after 3 seconds
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);

  // Here, you can also add the actual form submission if needed, e.g., with AJAX
});
