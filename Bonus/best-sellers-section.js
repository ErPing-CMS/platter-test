(function() {
  // Initialize all best sellers sections on the page
  function initializeBestSellersSections() {
    const sections = document.querySelectorAll('.best-sellers-section');
    
    sections.forEach(section => {
      const sectionId = section.id ? section.id.replace('shopify-section-', '') : '';
      initializeProductGallery(section, sectionId);
    });
  }

  // Initialize product gallery for a specific section
  function initializeProductGallery(section, sectionId) {
    const container = section.querySelector(`#product-container-${sectionId}`);
    const showMoreBtn = section.querySelector(`#show-more-btn-${sectionId}`);
    
    if (!container) return;
    
    // Add hover effects to images
    const images = container.querySelectorAll('.product-image');
    images.forEach(img => {
      let hoverTimeout;
      
      img.addEventListener('mouseenter', function() {
        cancelAnimationFrame(hoverTimeout);
        this.classList.add('opacity-90');
        hoverTimeout = requestAnimationFrame(() => {
          // In Shopify, you would use the actual secondary image
          // this.src = this.dataset.secondary;
        });
      });
      
      img.addEventListener('mouseleave', function() {
        cancelAnimationFrame(hoverTimeout);
        this.classList.remove('opacity-90');
        hoverTimeout = requestAnimationFrame(() => {
          // this.src = this.dataset.primary;
        });
      });
      
      // Add touch events for mobile
      let touchTimeout;
      img.addEventListener('touchstart', function(e) { 
        e.preventDefault();
        this.classList.add('opacity-90');
        cancelAnimationFrame(touchTimeout);
        touchTimeout = requestAnimationFrame(() => {
          // this.src = this.dataset.secondary;
        });
      });
      
      img.addEventListener('touchend', function() {
        this.classList.remove('opacity-90');
        cancelAnimationFrame(touchTimeout);
        touchTimeout = requestAnimationFrame(() => {
          // this.src = this.dataset.primary;
        });
      });
    });
    
    // Add event listener to show more button
    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', function() {
        showAllProducts(container, showMoreBtn);
      });
    }
    
    // Initialize custom scrollbar
    initCustomScrollbar(section);
  }

  // Function to show all products with animation
  function showAllProducts(container, showMoreBtn) {
    // In a real Shopify implementation, you would load more products via AJAX
    // For now, we'll just hide the button since all products are already rendered
    
    // Hide the show more button with fade out effect
    if (showMoreBtn) {
      showMoreBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      showMoreBtn.style.opacity = '0';
      showMoreBtn.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        showMoreBtn.style.display = 'none';
      }, 300);
    }
  }

  // Custom Scrollbar Implementation
  function initCustomScrollbar(section) {
    const scrollContainer = section.querySelector('.scroll-container');
    const scrollbarContainer = section.querySelector('.custom-scrollbar-container');
    const scrollbarTrack = section.querySelector('.custom-scrollbar-track');
    const scrollbarThumb = section.querySelector('.custom-scrollbar-thumb');
    
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
     
    // Handle track clicks
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
      
      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    });
  }

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBestSellersSections);
  } else {
    initializeBestSellersSections();
  }
})();