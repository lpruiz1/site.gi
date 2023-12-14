document.addEventListener('DOMContentLoaded', function() {
    var scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = button.getAttribute('data-target');
            var targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});