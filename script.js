// Product data structure
// - id
// - name
// - price
// - images
// - badges
// - rating
// - reviewCount

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

// Helper function to generate star rating HTML
function createStarRating(rating) {
    let starsHTML = '';
    // Generate filled stars for rating value
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

// Product card element function
function createProductCard(product) {
    // Main card container
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg';
    
    // Badge HTML
    let badgeHTML = '';
    if (product.isBestSeller) {
        badgeHTML += '<span class="absolute top-2 left-2 bg-white rounded-full text-[10px] text-black font-bebas px-3 py-1">BEST SELLER</span>';
    }
    if (product.hasDiscount) {
        badgeHTML += '<span class="absolute top-2 right-2 bg-brand-save rounded-full text-[10px] text-white font-bebas px-3 py-1">SAVE 15%</span>';
    }
    
    // Product card content
    card.innerHTML = `
        ${badgeHTML}
        <div class="relative overflow-hidden">
            <img 
                src="${product.primaryImage}" 
                alt="${product.name}" 
                class="w-full h-80 object-cover product-image transition-all duration-500"
                data-primary="${product.primaryImage}"
                data-secondary="${product.secondaryImage}"
            >
        </div>
        <div class="p-4">
            <h3 class="font-bebas text-xl mb-2 tracking-wider text-brand-dark">${product.name}</h3>
            <div class="flex items-center mb-2">
                <div class="text-black flex gap-1">
                    ${createStarRating(product.rating)}
                </div>
                <span class="text-brand-review text-sm font-poppins ml-2">${product.reviewCount.toLocaleString()} Reviews</span>
            </div>
            <p class="text-brand-dark font-poppins font-bold">${product.price}</p>
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
    
    return card;
}

// DOM ready event listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('Product data initialized with', products.length, 'products'); 
});