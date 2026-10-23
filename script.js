// Simple animation for portfolio sections
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.portfolio-section');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 300);
});
