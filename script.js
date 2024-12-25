document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute('href').substring(1); // Get section ID from href
            const targetSection = document.getElementById(targetId); // Find the section with that ID

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
            }
        });
    });
});