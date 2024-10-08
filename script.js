window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const menus = document.querySelectorAll(".menus li a");
  let scrollPosition = window.scrollY; // Vertical scroll position
  console.log(scrollPosition);

  if (scrollPosition > 138) {
    navbar.classList.add("navbarstyleactive");
    menus.forEach((menu) => {
      menu.style.color = "white"; // Scroll position > 138 hole shob menu item color black
    });
  } else if (scrollPosition <= 0) {
    navbar.classList.remove("navbarstyleactive");
    menus.forEach((menu) => {
      menu.style.color = "white"; // Scroll position 0 ba tar niche hole shob menu item color white
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-animation");

  function startTypingAnimation() {
    typingElement.classList.remove("typing"); // Remove class to reset animation
    void typingElement.offsetWidth; // Trigger reflow to restart animation
    typingElement.classList.add("typing"); // Add class to start animation
  }

  // Start the typing animation every 6 seconds (4s for typing + 2s pause)
  setInterval(startTypingAnimation, 6000); // Change this value to adjust timing
  startTypingAnimation(); // Start the animation immediately
});
