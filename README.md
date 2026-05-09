# Happy Birth Seconds 💕

A romantic, customizable, real-time age counter and digital scrapbook for celebrating your significant other. Instead of just celebrating every year, celebrate every single moment!

This project calculates and displays your partner's exact age down to 10 decimal places, ticking smoothly in real-time. It also includes sections for a shared Wishlist and a collection of your favorite Quotes.

## Features

- ⏱️ **Real-time Precision Counter**: Calculates exact age based on the birth date and updates continuously.
- 🎨 **Beautiful UI**: A clean, modern, and romantic pink-themed interface with glassmorphism effects and animations.
- 📝 **Wishlist**: A dedicated section to list things you want to do and experience together.
- 💬 **Quotes Gallery**: A dynamic gallery to save your funniest and most memorable quotes.
- ⚙️ **Easily Customizable**: All personal data (birth date and quotes) is separated into a simple configuration file.

## Getting Started

1. **Download the Repository**
   Clone this repository or download it as a ZIP file and extract it.

2. **Configure Your Data**
   Open the `config.js` file in any text editor. Here you can customize:
   
   - **Birth Date**: Set the exact year, month, day, hour, minute, and second. *(Note: The month is 0-indexed, meaning January is 0 and December is 11).*
   - **Quotes**: Add your own memorable quotes by modifying the `QUOTES` array. Each quote has a `quote` (text), `name` (author), and `color` (css class for styling).

3. **View the Site**
   Simply open the `index.html` file in any modern web browser. No server or build process is required!

## Customization

- **Wishlist**: To modify the wishlist items, open `index.html` and look for the `<ul class="wishlist">` element under the "Wishlist Section". Add or remove `<li>` items as you please.
- **Styling**: All styles are self-contained. You can tweak the colors, fonts, and animations by editing the `<style>` block within `index.html`.

## Built With
- HTML5
- CSS3
- Vanilla JavaScript

Enjoy celebrating every moment! 🎉
