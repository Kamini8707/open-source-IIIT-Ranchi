// JavaScript for handling dropdown menu on mobile
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdown");
  const dropdownMenu = dropdownButton.querySelector("div");

  dropdownButton.addEventListener("click", function () {
    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!dropdownButton.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

// Scroll to top button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.id = "back-to-top-btn";
scrollToTopButton.textContent = "↑";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "30px";
scrollToTopButton.style.right = "30px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.padding = "10px";
scrollToTopButton.style.fontSize = "18px";
scrollToTopButton.style.backgroundColor = "#f97316";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.zIndex = "1000";

// Append the button to the body
document.body.appendChild(scrollToTopButton);

// Show the button when scrolling down
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
