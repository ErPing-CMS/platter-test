const products = [
    {
        id: 1,
        name: "UltraBook Pro Laptop",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: true,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 2,
        name: "Smartphone X Pro",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1656392851225-ec9a304ef9d0?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: false,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 3,
        name: "Wireless Earbuds Elite",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=600",
        isBestSeller: false,
        hasDiscount: true,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 4,
        name: "Gaming Mechanical Keyboard",
        price: "$104.95",
        primaryImage: "https://plus.unsplash.com/premium_photo-1680124608003-b14fe079b955?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1643869094356-4dc3f74f22eb?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: false,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 5,
        name: "Fitness Tracker Watch",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&h=600",
        isBestSeller: false,
        hasDiscount: true,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 6,
        name: "4K Action Camera",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1562878671-b3efe27953b9?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: false,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 7,
        name: "Bluetooth Noise Cancelling Headphones",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1656457537704-11f3bcaee2fd?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?auto=format&fit=crop&w=600&h=600",
        isBestSeller: false,
        hasDiscount: true,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 8,
        name: "Smart Home Hub",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1758577515339-93872db0d37e?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://plus.unsplash.com/premium_photo-1663075936658-11cfc7d6a5d6?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: false,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 9,
        name: "Portable External SSD",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1610415392843-30d95191b7e4?auto=format&fit=crop&w=600&h=600",
        isBestSeller: false,
        hasDiscount: true,
        rating: 5,
        reviewCount: 1234
    },
    {
        id: 10,
        name: "Wireless Charging Station",
        price: "$104.95",
        primaryImage: "https://images.unsplash.com/photo-1657049016119-09e5584562ae?auto=format&fit=crop&w=600&h=600",
        secondaryImage: "https://images.unsplash.com/photo-1738101001619-f0fd42ceafb0?auto=format&fit=crop&w=600&h=600",
        isBestSeller: true,
        hasDiscount: false,
        rating: 5,
        reviewCount: 1234
    }
];

// Function to create star rating HTML
function createStarRating(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

// Function to create a product card
function createProductCard(product, isVisible = true) {
    const card = document.createElement('div');
    card.className = `product-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg ${isVisible ? 'block' : 'hidden md:block'}`;
    
    // Create badge HTML
    let badgeHTML = '';
    if (product.isBestSeller) {
        badgeHTML += '<span class="absolute top-2 left-2 bg-white rounded-[100px] text-[10px] text-black bebas-neue px-3 py-1">BEST SELLER</span>';
    }
    if (product.hasDiscount) {
        badgeHTML += '<span class="absolute top-2 right-2 save-badge rounded-[100px] text-[10px] bebas-neue px-3 py-1">SAVE 15%</span>';
    }
    
    card.innerHTML = `
        ${badgeHTML}
        <div class="relative overflow-hidden image-container">
            <img 
                src="${product.primaryImage}" 
                alt="${product.name}" 
                class="w-full h-full object-cover product-image transition-all duration-500"
                data-primary="${product.primaryImage}"
                data-secondary="${product.secondaryImage}"
            >
        </div>
        <div class="p-4">
            <h3 class="product-title bebas-neue mb-2 tracking-[1px] text-[#1c1d1d]">${product.name}</h3>
            <div class="flex items-center mb-2">
                <div class="star-rating gap-[2px] flex">
                    ${createStarRating(product.rating)}
                </div>
                <span class="reviews-text review-text poppins ml-2">${product.reviewCount.toLocaleString()} Reviews</span>
            </div>
            <p class="text-[#1c1d1d] price-text poppins font-bold">${product.price}</p>
        </div>
    `;
    
    // Add hover effect to image
    const img = card.querySelector('.product-image');
    img.addEventListener('mouseenter', function() {
        this.classList.add('opacity-90');
        setTimeout(() => {
            this.src = this.dataset.secondary;
        }, 100);
    });
    
    img.addEventListener('mouseleave', function() {
        this.classList.remove('opacity-90');
        setTimeout(() => {
            this.src = this.dataset.primary;
        }, 100);
    });
    
    // Add touch events for mobile
    img.addEventListener('touchstart', function(e) { 
        e.preventDefault();
        this.classList.add('opacity-90');
        setTimeout(() => {
            this.src = this.dataset.secondary;
        }, 100);
    });
    
    img.addEventListener('touchend', function() {
        this.classList.remove('opacity-90');
        setTimeout(() => {
            this.src = this.dataset.primary;
        }, 100);
    });
    
    // Add click effect for better feedback
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
    
    return card;
}

// Function to render product cards
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    
    products.forEach((product, index) => {
        // On mobile, only show first 4 products initially
        const isVisible = index < 4;
        const card = createProductCard(product, isVisible);
         
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
         
        container.appendChild(card);
         
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Function to show all products with animation
function showAllProducts() {
    const hiddenCards = document.querySelectorAll('.product-card.hidden');
    
    hiddenCards.forEach((card, index) => { 
        card.classList.remove('hidden');
         
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
         
        void card.offsetWidth;
          
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
     
    // Hide the show more button with fade out effect
    const showMoreBtn = document.getElementById('show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        showMoreBtn.style.opacity = '0';
        showMoreBtn.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            showMoreBtn.style.display = 'none';
        }, 300);
    }
}

// Add touch support for the show more button
function initTouchSupport() {
    const showMoreBtn = document.getElementById('show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('touchstart', function(e) {
            // Add visual feedback for touch
            this.style.transform = 'scale(0.95)';
        });
        
        showMoreBtn.addEventListener('touchend', function(e) {
            // Remove visual feedback
            this.style.transform = 'scale(1)';
            // Trigger click event
            this.click();
        });
    }
}

// Add enhanced interactivity
function addEnhancedInteractivity() {
    // Add hover effects to shop all link
    const shopAllLink = document.querySelector('.shop-all-link');
    if (shopAllLink) {
        shopAllLink.addEventListener('mouseenter', function() {
            this.style.color = '#4a442e';
        });
        
        shopAllLink.addEventListener('mouseleave', function() {
            this.style.color = '#5C553A';
        });
    }
}

// Cross-browser compatible scrollTo function
function scrollToElement(element, to, duration) {
    if (duration <= 0) return;
    
    const difference = to - element.scrollLeft;
    const perTick = difference / duration * 10;
    
    setTimeout(function() {
        element.scrollLeft = element.scrollLeft + perTick;
        if (element.scrollLeft === to) return;
        scrollToElement(element, to, duration - 10);
    }, 10);
}

// Cross-browser compatible getComputedStyle
function getStyle(el, styleProp) {
    if (el.currentStyle) {
        return el.currentStyle[styleProp];
    } else if (window.getComputedStyle) {
        return document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    return el.style[styleProp];
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Add event listener to show more button
    const showMoreBtn = document.getElementById('show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', showAllProducts);
    }
    
    // Initialize touch support
    initTouchSupport();
    
    // Add enhanced interactivity
    addEnhancedInteractivity();
    
    // Initialize custom scrollbar
    initCustomScrollbar();
    
    // Add Font Awesome for star icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    
    // Add fallback for Font Awesome
    fontAwesome.onerror = function() {
        console.warn('Font Awesome failed to load, using fallback');
        // Fallback styles for stars
        const fallbackStyle = document.createElement('style');
        fallbackStyle.textContent = `
            .star-rating i.fas.fa-star:before { content: '★'; }
            .star-rating i.far.fa-star:before { content: '☆'; }
        `;
        document.head.appendChild(fallbackStyle);
    };
    
    document.head.appendChild(fontAwesome);
});

// Custom Scrollbar Implementation
function initCustomScrollbar() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollbarContainer = document.querySelector('.custom-scrollbar-container');
    const scrollbarTrack = document.querySelector('.custom-scrollbar-track');
    const scrollbarThumb = document.querySelector('.custom-scrollbar-thumb');
    
    if (!scrollContainer || !scrollbarContainer || !scrollbarTrack || !scrollbarThumb) {
        return;
    }
    
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let thumbLeft = 0;
     
    function updateScrollbar() {
        const containerWidth = scrollContainer.clientWidth;
        const contentWidth = scrollContainer.scrollWidth;
        const scrollLeft = scrollContainer.scrollLeft;
         
        const thumbWidth = Math.max((containerWidth / contentWidth) * containerWidth, 30);
         
        const maxThumbLeft = containerWidth - thumbWidth;
        const thumbLeftPosition = (scrollLeft / (contentWidth - containerWidth)) * maxThumbLeft;
         
        scrollbarThumb.style.width = thumbWidth + 'px';
        scrollbarThumb.style.left = thumbLeftPosition + 'px';
         
        if (contentWidth <= containerWidth) {
            scrollbarTrack.style.display = 'none';
        } else {
            scrollbarTrack.style.display = 'block';
        }
    }
     
    scrollContainer.addEventListener('scroll', updateScrollbar);
     
    window.addEventListener('resize', updateScrollbar);
     
    updateScrollbar();
     
    scrollbarContainer.addEventListener('mouseenter', () => {
        scrollbarContainer.classList.add('scrolling');
    });
    
    scrollbarContainer.addEventListener('mouseleave', () => {
        if (!isDragging) {
            scrollbarContainer.classList.remove('scrolling');
        }
    });
     
    scrollbarThumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollLeft = scrollContainer.scrollLeft;
        thumbLeft = parseFloat(scrollbarThumb.style.left) || 0;
        
        scrollbarContainer.classList.add('scrolling');
        e.preventDefault();
    });
     
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const containerWidth = scrollContainer.clientWidth;
        const contentWidth = scrollContainer.scrollWidth;
        const thumbWidth = parseFloat(scrollbarThumb.style.width);
        const maxThumbLeft = containerWidth - thumbWidth;
        
        // Calculate new thumb position
        const newThumbLeft = Math.max(0, Math.min(maxThumbLeft, thumbLeft + deltaX));
        
        // Calculate corresponding scroll position
        const scrollRatio = newThumbLeft / maxThumbLeft;
        const newScrollLeft = scrollRatio * (contentWidth - containerWidth);
        
        scrollContainer.scrollLeft = newScrollLeft;
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            scrollbarContainer.classList.remove('scrolling');
        }
    });
     
    // Handle touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    let isTouching = false;
    
    // Add touch support for scrollbar
    scrollbarThumb.addEventListener('touchstart', (e) => {
        isTouching = true;
        scrollbarContainer.classList.add('touching');
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = scrollContainer.scrollLeft;
        e.stopPropagation();
    });
    
    scrollbarThumb.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        
        const touchX = e.touches[0].clientX;
        const deltaX = touchStartX - touchX;
        scrollContainer.scrollLeft = touchScrollLeft + deltaX;
        e.stopPropagation();
    });
    
    scrollbarThumb.addEventListener('touchend', () => {
        setTimeout(() => {
            isTouching = false;
            scrollbarContainer.classList.remove('touching');
        }, 300);
    });
    
    // Add touch support for scroll container
    scrollContainer.addEventListener('touchstart', (e) => {
        isTouching = true;
        scrollbarContainer.classList.add('touching');
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = scrollContainer.scrollLeft;
    });
    
    scrollContainer.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        
        const touchX = e.touches[0].clientX;
        const deltaX = touchStartX - touchX;
        scrollContainer.scrollLeft = touchScrollLeft + deltaX;
    });
    
    scrollContainer.addEventListener('touchend', () => {
        setTimeout(() => {
            isTouching = false;
            scrollbarContainer.classList.remove('touching');
        }, 300);
    });
     
    // Handle track clicks with cross-browser compatibility
    scrollbarTrack.addEventListener('click', (e) => {
        if (e.target === scrollbarThumb) return;
        
        const trackRect = scrollbarTrack.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;
        const thumbWidth = parseFloat(scrollbarThumb.style.width);
        const containerWidth = scrollContainer.clientWidth;
        const contentWidth = scrollContainer.scrollWidth;
        
        const newThumbLeft = Math.max(0, Math.min(containerWidth - thumbWidth, clickX - thumbWidth / 2));
        
        const scrollRatio = newThumbLeft / (containerWidth - thumbWidth);
        const newScrollLeft = scrollRatio * (contentWidth - containerWidth);
        
        if (scrollContainer.scrollTo) {
            scrollContainer.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        } else {
            scrollToElement(scrollContainer, newScrollLeft, 300);
        }
    });
}