// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the popup elements
    const popup = document.getElementById('contactPopup');
    const showPopupBtn = document.getElementById('showPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const closePopupX = document.querySelector('.close-popup');
    
    // Function to show the popup
    function showPopup() {
        popup.style.display = 'flex';
        // Add animation class
        setTimeout(() => {
            popup.querySelector('.popup-content').style.opacity = '1';
            popup.querySelector('.popup-content').style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Function to hide the popup
    function hidePopup() {
        popup.querySelector('.popup-content').style.opacity = '0';
        popup.querySelector('.popup-content').style.transform = 'translateY(20px)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
    
    // Show popup when the button is clicked
    showPopupBtn.addEventListener('click', showPopup);
    
    // Hide popup when close button is clicked
    closePopupBtn.addEventListener('click', hidePopup);
    closePopupX.addEventListener('click', hidePopup);
    
    // Hide popup when clicking outside the popup content
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // You would normally send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you ${firstName} for your message! Please mail us on digivizta@gmail.com.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Add styles for active mobile menu
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'var(--background-color)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = 'var(--shadow)';
                navLinks.style.zIndex = '99';
            } else {
                navLinks.style.display = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navLinks.style.display = '';
                }
            }
        });
    });
    
    // Show popup automatically after 12 seconds
    setTimeout(function() {
        // Only show if it hasn't been shown already
        if (popup.style.display !== 'flex') {
            showPopup();
        }
    }, 12000); // 12 seconds
});