// CodeNXT TRUTATVA Quotation Website - Minimal Interactive Features
document.addEventListener('DOMContentLoaded', function () {
    initializeQuotationWebsite();
});

function initializeQuotationWebsite() {
    // Initialize minimal features for professional presentation
    initScrollAnimations();
    initAccessibility();
    initPerformanceOptimizations();
}

// Subtle Scroll Animations for Enhanced Visual Appeal
function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.package-card, .understanding-card, .timeline-item, .spec-card, .service-item, .term-item'
    );
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation styles
    const animationStyles = `
        .package-card,
        .understanding-card,
        .timeline-item,
        .spec-card,
        .service-item,
        .term-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Staggered animation delay for grid items */
        .packages-grid .package-card:nth-child(1) { transition-delay: 0ms; }
        .packages-grid .package-card:nth-child(2) { transition-delay: 150ms; }
        .packages-grid .package-card:nth-child(3) { transition-delay: 300ms; }
        
        .understanding-grid .understanding-card:nth-child(1) { transition-delay: 0ms; }
        .understanding-grid .understanding-card:nth-child(2) { transition-delay: 100ms; }
        .understanding-grid .understanding-card:nth-child(3) { transition-delay: 200ms; }
        .understanding-grid .understanding-card:nth-child(4) { transition-delay: 300ms; }
        .understanding-grid .understanding-card:nth-child(5) { transition-delay: 400ms; }
        
        .timeline-grid .timeline-item:nth-child(1) { transition-delay: 0ms; }
        .timeline-grid .timeline-item:nth-child(2) { transition-delay: 150ms; }
        .timeline-grid .timeline-item:nth-child(3) { transition-delay: 300ms; }
        .timeline-grid .timeline-item:nth-child(4) { transition-delay: 450ms; }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
}

// Accessibility Improvements
function initAccessibility() {
    // Add proper ARIA labels and roles
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Package ${index + 1} details`);
    });

    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.setAttribute('role', 'article');
        item.setAttribute('aria-label', `Development week ${index + 1} details`);
    });

    // Skip link for better navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#packages';
    skipLink.textContent = 'Skip to package comparison';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -50px;
        left: 10px;
        background: #1E40AF;
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        border-radius: 6px;
        z-index: 2000;
        font-weight: 600;
        transition: top 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    skipLink.addEventListener('focus', function () {
        this.style.top = '10px';
    });

    skipLink.addEventListener('blur', function () {
        this.style.top = '-50px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add section IDs for navigation
    document.querySelector('.packages').id = 'packages';
    document.querySelector('.timeline-section').id = 'timeline';
    document.querySelector('.terms').id = 'terms';
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load background images and optimize rendering
    const performanceStyles = `
        /* Optimize rendering performance */
        .package-card,
        .understanding-card,
        .timeline-item,
        .spec-card,
        .service-item,
        .term-item {
            will-change: transform, opacity;
        }
        
        .animate-in {
            will-change: auto;
        }
        
        /* Smooth scrolling for internal links */
        html {
            scroll-behavior: smooth;
        }
        
        /* Optimize images */
        img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }
        
        /* Print optimizations */
        @media print {
            .skip-link,
            .animate-in {
                display: none !important;
            }
            
            .package-card,
            .understanding-card,
            .timeline-item,
            .spec-card,
            .service-item,
            .term-item {
                opacity: 1 !important;
                transform: none !important;
                page-break-inside: avoid;
                margin-bottom: 1rem;
            }
            
            .header {
                page-break-after: avoid;
            }
            
            .footer {
                page-break-before: auto;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = performanceStyles;
    document.head.appendChild(styleSheet);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced print functionality
function printProposal() {
    // Add print-specific styling
    const printStyles = `
        @media print {
            body { margin: 0; }
            .header { background: white !important; color: #1E3A8A !important; }
            .cta { background: white !important; color: #1E3A8A !important; }
            .why-codenxt { background: white !important; color: #1E3A8A !important; }
            .recommended-badge, .premium-badge { 
                background: #1E3A8A !important; 
                color: white !important; 
            }
        }
    `;

    const printStyleSheet = document.createElement('style');
    printStyleSheet.textContent = printStyles;
    document.head.appendChild(printStyleSheet);

    // Trigger print dialog
    window.print();

    // Clean up print styles after printing
    setTimeout(() => {
        document.head.removeChild(printStyleSheet);
    }, 1000);
}

// Expose utility functions globally for potential use
window.TRUTATVA_Utils = {
    scrollToSection,
    printProposal
};

// Console styling for brand consistency
console.log('%c🚀 TRUTATVA E-Commerce Proposal by CodeNXT', 'color: #059669; font-size: 16px; font-weight: bold;');
console.log('%cFor technical queries, contact: codenxtlab@gmail.com', 'color: #1E40AF; font-size: 12px;');
