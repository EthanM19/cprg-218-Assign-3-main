document.addEventListener('DOMContentLoaded', function() {
    var accItems = document.querySelectorAll('.accordion-item');
    accItems.forEach(function(item) {
        var accHeader = item.querySelector('.accordion-header');
        var accContent = item.querySelector('.accordion-content');
        accHeader.addEventListener('click', function() {
            accContent.classList.toggle('active');
            if (accContent.classList.contains('active')) {
                accContent.style.display = 'block';
            } else {
                accContent.style.display = 'none';
            }
        });
    });
});