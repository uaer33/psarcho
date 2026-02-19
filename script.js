// Handle logo click - scroll to top
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Handle logo image fallback
    const logoImg = document.getElementById('logo-img');
    const logoText = document.querySelector('.logo-text');
    
    if (logoImg) {
        logoImg.addEventListener('load', function() {
            if (logoText) logoText.style.display = 'none';
        });
        
        logoImg.addEventListener('error', function() {
            this.style.display = 'none';
            if (logoText) logoText.style.display = 'block';
        });
        
        // Check if image is already loaded or failed
        if (logoImg.complete) {
            if (logoImg.naturalHeight === 0) {
                logoImg.style.display = 'none';
                if (logoText) logoText.style.display = 'block';
            } else {
                if (logoText) logoText.style.display = 'none';
            }
        }
    } else if (logoText) {
        logoText.style.display = 'block';
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link with form data
            const subject = encodeURIComponent('Contact from psarcho website');
            const body = encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:apresyan.architect@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            formMessage.textContent = 'Opening your email client...';
            formMessage.className = 'form-message success';
            
            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
                formMessage.textContent = 'Thank you for your message. We will get back to you soon.';
            }, 1000);
        });
    }
});
