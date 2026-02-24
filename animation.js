const sections = document.querySelectorAll(
    '.about-section, .services-section, .featured-projects, .blog-section, .footer-section'
);

const isMobile = window.innerWidth <= 768;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: isMobile ? 0.1 : 0.25   // 🔑 faster on mobile
});

sections.forEach(section => {
    observer.observe(section);
});