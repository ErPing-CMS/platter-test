# Shopify Integration Guide

This guide explains how to integrate the Best Sellers Product Gallery into a Shopify theme.

## Files Overview

1. `best-sellers-section.liquid` - The main section template
2. `best-sellers-section.js` - JavaScript for interactivity
3. `best-sellers-section.css` - Custom styling for the section

## Installation Instructions

### 1. Add the Section File

1. Navigate to your Shopify Admin Panel
2. Go to Online Store > Themes
3. Click "Actions" > "Edit code" for your active theme
4. In the Sections folder, click "Add a new section"
5. Name it `best-sellers-section.liquid`
6. Copy and paste the contents of `best-sellers-section.liquid` into the file
7. Save the file

### 2. Add the CSS

1. In the Assets folder, create a new file named `best-sellers-section.css`
2. Copy and paste the contents of `best-sellers-section.css` into the file
3. Save the file

4. Open your `theme.liquid` file in the Layout folder
5. Add the following line in the `<head>` section:
   ```html
   {{ 'best-sellers-section.css' | asset_url | stylesheet_tag }}
   ```

### 3. Add the JavaScript

1. In the Assets folder, create a new file named `best-sellers-section.js`
2. Copy and paste the contents of `best-sellers-section.js` into the file
3. Save the file

4. Open your `theme.liquid` file in the Layout folder
5. Add the following line before the closing `</body>` tag:
   ```html
   {{ 'best-sellers-section.js' | asset_url | script_tag }}
   ```

### 4. Configure the Section

1. Go to Online Store > Themes
2. Click "Customize" for your active theme
3. Click "Add section" and select "Best Sellers Gallery"
4. Configure the section settings:
   - Section Title
   - Collection to display products from
   - Number of products to show
   - Shop All link settings
   - Mobile button settings

## Product Tagging

For the badges to work correctly, tag your products in the Shopify Admin:
- Add the tag `best-seller` to products that should display the "BEST SELLER" badge
- Add the tag `discount` to products that should display the "SAVE 15%" badge

## Customization

You can customize the section by modifying the following:

### Colors
Update the color values in `best-sellers-section.css` to match your brand colors.

### Fonts
The section uses Google Fonts. To change fonts:
1. Update the Google Fonts import URL in `best-sellers-section.css`
2. Modify the font-family declarations in the CSS

### Layout
Adjust the responsive breakpoints and grid settings in the CSS to match your theme's design.

## Troubleshooting

### Scrollbar Not Working
Ensure that the JavaScript file is properly loaded and there are no console errors.

### Images Not Loading
Make sure your products have featured images assigned in the Shopify Admin.

### Styling Issues
Check that the CSS file is properly loaded and there are no conflicting styles from your theme.

## Support

For issues with the integration, please check the browser console for errors and ensure all files have been properly uploaded and referenced.