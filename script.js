document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.fade-up-features').forEach(el => {
      observer.observe(el);
    });
  });