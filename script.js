const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Show your actual profile photo if assets/profile.jpg exists.
// If it does not exist yet, the VB initials placeholder remains visible.
const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

profilePhoto.addEventListener("load", () => {
  profilePhoto.classList.add("loaded");
  photoFallback.classList.add("hidden");
});

profilePhoto.addEventListener("error", () => {
  profilePhoto.classList.remove("loaded");
  photoFallback.classList.remove("hidden");
});

// Replace this URL with your actual LinkedIn profile URL before publishing.
const linkedinProfileUrl = "https://www.linkedin.com/";
document.getElementById("linkedinQuick").href = linkedinProfileUrl;
document.getElementById("linkedinContact").href = linkedinProfileUrl;
