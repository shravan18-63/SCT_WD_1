document.addEventListener('DOMContentLoaded', function() {
    
    const mainNav = document.getElementById('main-nav');
    const scrollThreshold = 50; 

    window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollThreshold) {
            mainNav.classList.add('scrolled'); 
        } else {
            mainNav.classList.remove('scrolled'); 
        }
    });
});