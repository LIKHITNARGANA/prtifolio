// JavaScript to toggle sections
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Hide all sections by removing the 'active' class
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Show the section that was clicked by adding the 'active' class
      const sectionId = this.getAttribute('href').substring(1); // Get the section id
      const sectionToShow = document.getElementById(sectionId);
      sectionToShow.classList.add('active');
    });
  });
});
