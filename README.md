# Best Sellers Product Gallery

A responsive "Best Sellers" product gallery built with HTML, JavaScript, and TailwindCSS that meets all specified requirements.

## Shopify Section Implementation

This project also includes files for implementing the Best Sellers gallery as a Shopify section:
- `best-sellers-section.liquid` - The main section template
- `best-sellers-section.js` - JavaScript for interactivity
- `best-sellers-section.css` - Custom styling for the section
- `shopify-preview.html` - Preview of the section in a Shopify-like environment

## Features

1. Custom fonts:
   - Section title: "Source Serif Pro"
   - Product titles, badges: "Bebas Neue"
   - Reviews, prices, links: "Poppins"
2. Specific colors:
   - Star ratings: Black
   - "Shop All Best Sellers" link: #5C553A
   - "Save 15%" badge: #5C7962 background with white text
   - "1234 Reviews" text: #707070
3. Each product card includes:
   - High-quality product image with hover effect
   - Product title in Bebas Neue
   - 5-star black rating with review count (1,234 Reviews) in Poppins
   - Consistent price point ($104.95) in Poppins
   - "BEST SELLER" badges in Bebas Neue for top items
   - "SAVE 15%" badges with #5C7962 background for select products
4. All 10 products displayed in a single horizontal line with horizontal scrollbar
5. "Shop All Best Sellers" link in the top-right corner (desktop) and at the bottom (mobile) in Poppins

## Tech Stack

- HTML
- JavaScript (VanillaJS)
- TailwindCSS (via CDN)
- Google Fonts (Source Serif Pro, Bebas Neue, Poppins)
- Font Awesome (for star icons)

## How to Run

Simply open `index.html` in any modern web browser. There are no build steps or dependencies required.

## Implementation Details

### Product Cards
- Created 10 product cards with placeholder images from Unsplash
- Each card includes all required elements with proper fonts and colors
- Consistent styling with rounded corners, shadows, and hover effects

### Typography
- Source Serif Pro for the main section title
- Bebas Neue for product titles and badges
- Poppins for reviews, prices, and links

### Color Scheme
- Black star ratings for better contrast
- #5C553A for "Shop All Best Sellers" links
- #5C7962 green background for "SAVE 15%" badges with white text
- #707070 for review count text

### Horizontal Layout
- All 10 products displayed in a single horizontal line
- Horizontal scrollbar for navigation through products
- Each product card has a fixed width for consistent appearance
- Responsive design that works on all screen sizes

### Image Swap Effect
- When hovering over a product image, it smoothly transitions to a secondary image
- Implemented with a fade effect for a polished user experience

### Custom Scrollbar
- Horizontal scrollbar with 6px height
- Custom styling with rounded corners
- Thumb changes color on hover for better user feedback