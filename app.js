document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}); // for the navbar
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const slider = this.parentElement;
        const circleWidth = this.offsetWidth;
        const sliderWidth = slider.offsetWidth;
        const circles = Array.from(slider.children);
        const index = circles.indexOf(this);
        const scrollLeft = (index * (circleWidth + 20)) - (sliderWidth / 2) + (circleWidth / 2);

        slider.scrollLeft = scrollLeft;
    });
}); // for the slider

// end of the square moving