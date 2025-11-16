// Smooth scrolling untuk navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// WhatsApp integration
function openWhatsApp() {
    const phone = '62895368109478';
    const message = 'Hello PT. Abu Habbah Nusantara, I am interested in your products and would like to know more about your offerings.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Company Profile PDF Download
function downloadProfile() {
    alert('Company profile download will be available soon! For now, please contact us at sales@ahncommodity.com for the complete company profile.');
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 86, 51, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.padding = '0.8rem 0';
    } else {
        navbar.style.background = '#1a5633';
        navbar.style.backdropFilter = 'none';
        navbar.style.padding = '1rem 0';
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('PT. Abu Habbah Nusantara Website Loaded Successfully!');
});
