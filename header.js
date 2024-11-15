// Get the navigation bar element
const nav = document.querySelector('.nav');

// Function to check scroll position and toggle the sticky class
function handleScroll() {
  if (window.scrollY > 0) {  // If the page is scrolled down
    nav.classList.add('sticky');  // Add the sticky class
  } else {
    nav.classList.remove('sticky');  // Remove the sticky class when at the top
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);
