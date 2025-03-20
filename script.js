// Back to Top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // When the user scrolls down 300px from the top, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    
    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.addEventListener('click', function() {
        // For smooth scrolling
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});