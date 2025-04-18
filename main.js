document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and the navigation menu
    const mobileMenuBtn = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    // Add click event listener to mobile menu button
    mobileMenuBtn.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
        // Toggle the 'open' class on the menu button (for animation if needed)
        mobileMenuBtn.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('open');
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
    });
}); 