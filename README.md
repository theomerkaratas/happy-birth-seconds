# Happy Birth Seconds 💕

A romantic, customizable, real-time age counter and digital scrapbook for celebrating your significant other. Instead of just celebrating every year, celebrate every single moment!

This project calculates and displays your partner's exact age down to 7 decimal places (configurable), ticking smoothly in real-time. It also includes sections for a shared Wishlist and a Pinterest-style masonry gallery of your favorite Quotes.

## Features

- ⏱️ **Real-time Precision Counter**: Calculates exact age based on the birth date and updates continuously.
- 🎨 **Modern Tailwind UI**: A stunning, vibrant pink-themed interface featuring glassmorphism, animated gradients, and modern typography (Inter).
- 📝 **Wishlist**: A dedicated section to list things you want to do and experience together, featuring a quick-action WhatsApp button.
- 💬 **Quotes Gallery**: A dynamic masonry gallery to save your funniest and most memorable quotes.
- 🚀 **Zero Build Process**: Built to run entirely in the browser using Tailwind via CDN. Perfect for free static hosting like GitHub Pages.
- ⚙️ **Easily Customizable**: All personal data (birth date, quotes, and decimal places) is separated into a simple configuration file.

## Getting Started

1. **Download the Repository**
   Clone this repository or download it as a ZIP file and extract it.

2. **Configure Your Data**
   Open the `config.js` file in any text editor. Here you can customize:
   
   - **Birth Date**: Set the exact year, month, day, hour, minute, and second. *(Note: The month is 0-indexed, meaning January is 0 and December is 11).*
   - **Decimal Places**: Change the `decimalPlaces` parameter to determine how many digits to show after the decimal in the age counter (default is 7).
   - **Quotes**: Add your own memorable quotes by modifying the `QUOTES` array. Each quote has a `quote` (text), `name` (author), and `color` (css class for styling).

3. **View the Site Locally**
   Simply open the `index.html` file in any modern web browser. No server or build process is required!

4. **Host for Free**
   Since there is no complex backend or build process, you can upload this repository directly to GitHub and enable **GitHub Pages** to host it completely for free.

## Customization

- **Wishlist**: To add wishlist items, open `index.html` and look for the `<div id="wishlist-grid">` element under the "Wishlist Section". Add your own Tailwind-styled HTML cards inside.
- **Styling**: All styles are handled via Tailwind CSS utility classes within `index.html`. You can tweak the colors, fonts, and animations by editing the `tailwind.config` block and the custom `@layer utilities` inside `<style type="text/tailwindcss">`.

## Built With
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript

Enjoy celebrating every moment! 🎉
