// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
// Get all navigation menu items
  const menuItems = document.querySelectorAll('nav ul li');
// Add a click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      if (item.classList.contains('has-submenu')) {
        const link = item.querySelector('a'); //Get the main menu link
        if (event.target === link) {
          return; // Allow the main menu link to proceed with its default behavior
        }
        event.preventDefault();
        item.classList.toggle('selected');// Toggle the "selected" class to control submenu visibility
      }
    });
  });
// Close all expanded submenus when clicking outside the navigation
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav')) {
      menuItems.forEach(item => {
        item.classList.remove('selected');// Close all submenus
      });
    }
  });

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault(); 
      const targetId = this.getAttribute('href').substring(1);// Get the target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
// Smoothly scroll to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

// "Booking Now" button for cross-page navigation
  const bookingButton = document.getElementById('booking-button');
  if (bookingButton) {
    bookingButton.addEventListener('click', () => {
// Redirect to the Booking.html page
      window.location.href = 'Booking.html';
    });
  }
});