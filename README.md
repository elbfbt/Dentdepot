# Shop Project

## Overview

This is a simple static shopping website built using HTML, CSS, and JavaScript. The project showcases multiple product pages—including Heart Care, Eye Care, Diabetic Care, Muscle Joint, and Medi Devices—each with a dynamic shopping cart and checkout form. It was designed to provide a smooth user experience with interactive elements such as sticky navigation, real-time cart updates, and an overlay-based checkout form.

## Features

- **Responsive Design:** Layouts that adapt across different screen sizes.
- **Dynamic Shopping Cart:** Add products to the cart, update quantities, remove items, and view the running total in real time.
- **Checkout Overlay:** An intuitive checkout form collects user information and payment details.
- **Sticky Navigation:** A navigation bar that remains visible during scrolling.
- **Multiple Product Categories:** Separate pages for various health and wellness product categories.

## Folder Structure
```
project-folder/
├── css/
│   ├── shop.css        # Styles for the shop and product pages
│   └── payment.css     # Styles for the payment/checkout form
├── img/
│   ├── pack.png        # Default product image used on some pages
│   ├── cart-icon.png   # Icon for the shopping cart
│   ├── close-round-icon.png  # Icon to close overlays
│   ├── muscle joint/   # Images for Muscle Joint products
│   ├── Medi devices/   # Images for Medi Devices products
│   └── (other images)  # Additional images and icons
├── js/
│   ├── diabetic.js     # JavaScript for Diabetic Care page
│   ├── eyecare.js      # JavaScript for Eye Care page
│   ├── heartcare.js    # JavaScript for Heart Care page
│   ├── medidevice.js   # JavaScript for Medi Devices page
│   ├── musclejoint.js  # JavaScript for Muscle Joint page
│   └── shop.js         # JavaScript for main shop functionality
├── shop.html           # Main shop page with product listings and cart functionality
├── payment.html        # Standalone payment/checkout page
├── musclejoint.html    # Product page for Muscle Joint category
└── medidevice.html     # Product page for Medi Devices category
```

*Note: The folder structure may vary slightly based on your file organization.*


## Getting Started

### Prerequisites

Since this is a static website, all you need is a modern web browser.

### Running the Project Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/R-Tharanka/shop_js.git
   ```
2. **Open the Main Page:**

   Open `shop.html` in your browser to start exploring the shop interface. Navigate to other pages (like `musclejoint.html` or `medidevice.html`) via the category links provided.

## How It Works

**Product Display:**  
Each product is presented as a card containing an image, product name, price, and an "Add to Basket" button.

**Shopping Cart Functionality:**  
Clicking the "Add to Basket" button dynamically adds an item to the cart. Users can adjust quantities or remove items, with the total price updating automatically.

**Checkout Process:**  
When ready, users can click the checkout button, which brings up an overlay form to collect personal details, shipping address, and payment information.

**JavaScript Interactions:**  
Custom JavaScript manages tasks such as:
- Opening and closing the cart sidebar.
- Dynamically calculating the total price.
- Implementing the sticky navigation bar.
- Providing hover effects on product cards.

## Technologies Used

- **HTML5:** Provides the structure and content of the web pages.
- **CSS3:** Handles the layout, styling, and responsive design.
- **JavaScript:** Powers the dynamic interactions and real-time updates.

## Copyright & Image Usage

**Disclaimer:**  
Some images used in this project were sourced from Google. If you plan to use this project commercially or distribute it widely, please verify that you have the right to use these images. It is recommended to replace these images with royalty-free alternatives (from sites like Unsplash, Pexels, or Pixabay) or to obtain proper licensing.

## Future Improvements

- **Backend Integration:** Incorporate a server-side backend to handle user data and transactions securely.
- **Enhanced Security:** Implement security best practices for handling payment and personal information.
- **Accessibility:** Improve the website's accessibility for users with disabilities.
- **Additional Features:** Consider adding search functionality, product filtering, and user reviews.

## License

This project is provided "as is" without any warranties. Please review and comply with any third-party image licenses if you decide to use or distribute this project.

## Acknowledgments

- **Fonts:** The project uses fonts from Google Fonts.
- **Icons & Images:** Special thanks to the sources of the images and icons used in the project.
