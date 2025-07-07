// Mobile phone data
const phones = [
    {
        id: 1,
        name: 'iPhone 14 Pro',
        brand: 'iPhone',
        condition: 'Like New',
        price: '₹85,000',
        originalPrice: '₹1,29,900',
        discount: '35% OFF',
        rating: 4.8,
        storage: '128GB',
        color: 'Deep Purple',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '6 Months'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        brand: 'Samsung',
        condition: 'Excellent',
        price: '₹55,000',
        originalPrice: '₹74,999',
        discount: '27% OFF',
        rating: 4.6,
        storage: '256GB',
        color: 'Phantom Black',
        image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '6 Months'
    },
    {
        id: 3,
        name: 'OnePlus 11',
        brand: 'OnePlus',
        condition: 'Very Good',
        price: '₹42,000',
        originalPrice: '₹56,999',
        discount: '26% OFF',
        rating: 4.5,
        storage: '128GB',
        color: 'Titan Black',
        image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '3 Months'
    },
    {
        id: 4,
        name: 'iPhone 13',
        brand: 'iPhone',
        condition: 'Good',
        price: '₹45,000',
        originalPrice: '₹69,900',
        discount: '36% OFF',
        rating: 4.7,
        storage: '128GB',
        color: 'Pink',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '3 Months'
    },
    {
        id: 5,
        name: 'Xiaomi 13 Pro',
        brand: 'Xiaomi',
        condition: 'Like New',
        price: '₹52,000',
        originalPrice: '₹79,999',
        discount: '35% OFF',
        rating: 4.4,
        storage: '256GB',
        color: 'Ceramic White',
        image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '6 Months'
    },
    {
        id: 6,
        name: 'Vivo X90 Pro',
        brand: 'Vivo',
        condition: 'Excellent',
        price: '₹48,000',
        originalPrice: '₹84,999',
        discount: '43% OFF',
        rating: 4.3,
        storage: '256GB',
        color: 'Legendary Black',
        image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '6 Months'
    },
    {
        id: 7,
        name: 'iPhone 12',
        brand: 'iPhone',
        condition: 'Good',
        price: '₹38,000',
        originalPrice: '₹59,900',
        discount: '37% OFF',
        rating: 4.6,
        storage: '64GB',
        color: 'Blue',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '3 Months'
    },
    {
        id: 8,
        name: 'Samsung Galaxy S22',
        brand: 'Samsung',
        condition: 'Very Good',
        price: '₹35,000',
        originalPrice: '₹55,000',
        discount: '36% OFF',
        rating: 4.5,
        storage: '128GB',
        color: 'White',
        image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=400',
        warranty: '6 Months'
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const phonesGrid = document.getElementById('phonesGrid');
const repairCards = document.querySelectorAll('.repair-card');
const bookingForm = document.getElementById('bookingForm');
const repairBookingForm = document.getElementById('repairBookingForm');
const contactForm = document.getElementById('contactForm');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderPhones(phones);
    initializeFilters();
    initializeRepairBooking();
    initializeForms();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Phone inventory functionality
function renderPhones(phonesToRender) {
    phonesGrid.innerHTML = '';
    
    phonesToRender.forEach(phone => {
        const phoneCard = createPhoneCard(phone);
        phonesGrid.appendChild(phoneCard);
    });
}

function createPhoneCard(phone) {
    const card = document.createElement('div');
    card.className = 'phone-card fade-in-up';
    
    const conditionClass = getConditionClass(phone.condition);
    
    card.innerHTML = `
        <div class="phone-image-container">
            <img src="${phone.image}" alt="${phone.name}" class="phone-image">
            <div class="discount-badge">${phone.discount}</div>
        </div>
        <div class="phone-details">
            <h3 class="phone-name">${phone.name}</h3>
            <div class="phone-specs">${phone.storage} • ${phone.color}</div>
            <div class="condition-rating">
                <span class="condition-badge ${conditionClass}">${phone.condition}</span>
                <div class="rating-display">
                    <i class="fas fa-star"></i>
                    <span>${phone.rating}</span>
                </div>
            </div>
            <div class="price-container">
                <span class="current-price">${phone.price}</span>
                <span class="original-price">${phone.originalPrice}</span>
            </div>
            <div class="warranty-text">Warranty: ${phone.warranty}</div>
        </div>
    `;
    
    return card;
}

function getConditionClass(condition) {
    switch (condition) {
        case 'Like New': return 'condition-like-new';
        case 'Excellent': return 'condition-excellent';
        case 'Very Good': return 'condition-very-good';
        case 'Good': return 'condition-good';
        default: return '';
    }
}

// Filter functionality
function initializeFilters() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        filterPhones(searchTerm, activeFilter);
    });

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            const searchTerm = searchInput.value.toLowerCase();
            filterPhones(searchTerm, filter);
        });
    });
}

function filterPhones(searchTerm, brandFilter) {
    let filteredPhones = phones;
    
    // Apply brand filter
    if (brandFilter !== 'all') {
        filteredPhones = filteredPhones.filter(phone => phone.brand === brandFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredPhones = filteredPhones.filter(phone => 
            phone.name.toLowerCase().includes(searchTerm) ||
            phone.brand.toLowerCase().includes(searchTerm) ||
            phone.color.toLowerCase().includes(searchTerm)
        );
    }
    
    renderPhones(filteredPhones);
}

// Repair booking functionality
function initializeRepairBooking() {
    repairCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            repairCards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Show booking form
            bookingForm.style.display = 'block';
            bookingForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // Handle repair booking form submission
    if (repairBookingForm) {
        repairBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(repairBookingForm);
            const customerName = document.getElementById('customerName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const deviceModel = document.getElementById('deviceModel').value;
            const selectedService = document.querySelector('.repair-card.selected');
            
            if (!selectedService || !customerName || !phoneNumber || !deviceModel) {
                showNotification('Please fill all required fields and select a service', 'error');
                return;
            }
            
            const serviceName = selectedService.querySelector('h4').textContent;
            
            // Simulate booking confirmation
            showNotification(
                `Thank you ${customerName}! Your ${serviceName} service for ${deviceModel} has been booked. We'll call you at ${phoneNumber} to confirm the appointment.`,
                'success'
            );
            
            // Reset form
            repairBookingForm.reset();
            repairCards.forEach(c => c.classList.remove('selected'));
            bookingForm.style.display = 'none';
        });
    }
}

// Form handling
function initializeForms() {
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll('.service-card, .phone-card, .repair-card, .stat-card, .feature-item, .contact-item');
    elementsToObserve.forEach(el => observer.observe(el));
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    });
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Phone number formatting
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    input.value = formattedValue;
}

// Add phone number formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', () => formatPhoneNumber(input));
    });
});

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Performance optimization: Debounce search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
if (searchInput) {
    const debouncedSearch = debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        filterPhones(searchTerm, activeFilter);
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);
}