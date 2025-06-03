<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EvolveMart: Frontend E-commerce Template Documentation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f8f8f8;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            color: #333;
            margin-top: 1.5em;
            margin-bottom: 0.8em;
        }
        h1 { font-size: 2.5em; text-align: center; color: #DC2684; }
        h2 { font-size: 2em; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        h3 { font-size: 1.5em; }
        p { margin-bottom: 1em; }
        ul { list-style: disc; margin-left: 20px; margin-bottom: 1em; }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            border-left: 3px solid #f36d33;
            color: #666;
            page-break-inside: avoid;
            font-family: monospace;
            font-size: 0.9em;
            line-height: 1.6;
            margin-bottom: 1.6em;
            max-width: 100%;
            overflow: auto;
            padding: 1em 1.5em;
            display: block;
            word-wrap: break-word;
        }
        code {
            font-family: monospace;
            background-color: #eee;
            padding: 2px 4px;
            border-radius: 4px;
        }
        img { max-width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
        a { color: #DC2684; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .note-for-reviewers {
            background-color: #fff3cd;
            border-left: 5px solid #ffc107;
            padding: 15px;
            margin-top: 30px;
            border-radius: 5px;
            color: #664d03;
        }
        .highlight {
            background-color: #e6ffed; /* Light green for success/important info */
            padding: 5px 10px;
            border-radius: 4px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>EvolveMart: Modern Frontend E-commerce HTML Template Documentation</h1>

        <img src="assets/images/placeholder-hero.jpg" alt="EvolveMart Hero Image" style="width: 100%; max-width: 800px;">

        <p>Welcome to <strong>EvolveMart</strong>, a modern and responsive pure HTML, CSS, and JavaScript e-commerce template, designed to deliver an unforgettable online shopping experience. EvolveMart is a clean, fast, and feature-rich frontend UI Kit, perfect for developing your next online store.</p>

        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#key-features">Key Features</a></li>
            <li><a href="#folder-structure">Folder Structure</a></li>
            <li><a href="#how-to-use">How to Use This Template</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#responsive-design">Responsive Design</a></li>
            <li><a href="#backend-integration">Backend Integration</a></li>
            <li><a href="#live-demo">Live Demo</a></li>
            <li><a href="#themeforest-review-notes">Note for ThemeForest Reviewers</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#credits">Credits</a></li>
            <li><a href="#license">License</a></li>
        </ul>

        <h2 id="introduction">Introduction</h2>
        <p>EvolveMart is a meticulously crafted frontend template for e-commerce websites. It utilizes plain HTML, CSS, and JavaScript (Vanilla JS) to ensure high performance, easy customization, and broad browser compatibility. This template is designed to provide a stunning visual interface and interactive user experience for your online store.</p>

        <h2 id="key-features">Key Features</h2>
        <p>EvolveMart comes with a comprehensive set of UI features for a complete and modern online store:</p>
        <ul>
            <li><strong>Fully Responsive Design:</strong> Adapts seamlessly to all screen sizes and devices, from large desktops to small smartphones.</li>
            <li><strong>Pure HTML, CSS, & JavaScript (Vanilla JS):</strong> Clean, lightweight, and easy-to-understand code without reliance on heavy JavaScript frameworks.</li>
            <li><strong>Interactive User Experience:</strong>
                <ul>
                    <li><strong>Skeleton Loading:</strong> Enhances perceived loading speed by displaying content placeholders.</li>
                    <li><strong>Toast Notifications:</strong> Provides elegant, non-intrusive user feedback for actions.</li>
                    <li><strong>Dark/Light Mode Toggle:</strong> Allows users to switch between themes for personalized viewing.</li>
                </ul>
            </li>
            <li><strong>Complete Navigation & Header:</strong>
                <ul>
                    <li>Sticky header for consistent navigation.</li>
                    <li>Responsive mobile sidebar (hamburger menu) with smooth scrolling if content exceeds screen height.</li>
                    <li>Intuitive navigation icons (search, cart, wishlist, profile).</li>
                </ul>
            </li>
            <li><strong>Comprehensive Product Listing & Filters:</strong>
                <ul>
                    <li>Display sections for All Products, Featured Products, and Flash Sale items.</li>
                    <li>Filtering by categories (Apparel, Accessories, Electronics, Home Goods, Sports, Books, Automotive, Decor, Toys).</li>
                    <li>Sorting options: Price (Low to High, High to Low), Name (A-Z, Z-A).</li>
                    <li>"Load More Products" and "View All Products" functionality.</li>
                </ul>
            </li>
            <li><strong>Core E-commerce Sections:</strong>
                <ul>
                    <li><strong>Shopping Cart:</strong> Add/remove products, update quantities, calculate totals (simulated locally using `localStorage`).</li>
                    <li><strong>Wishlist:</strong> Save favorite products (simulated locally using `localStorage`).</li>
                    <li><strong>Product Detail Modal:</strong> Detailed product view with description, price, stock, and quantity controls.</li>
                    <li><strong>Quick View Modal:</strong> Concise product overview without leaving the main page.</li>
                    <li><strong>Recently Viewed Products Section:</strong> Tracks recently viewed items (simulated locally using `localStorage`).</li>
                </ul>
            </li>
            <li><strong>Checkout Flow (Simulated):</strong>
                <ul>
                    <li>Responsive checkout page for shipping information and payment method selection (simulated).</li>
                    <li>Simulated order placement process.</li>
                </ul>
            </li>
            <li><strong>User Profile (Simulated):</strong>
                <ul>
                    <li>Basic profile page UI with user details, addresses, and payment methods (simulated).</li>
                    <li>Simulated Login/Register modals.</li>
                    <li>Order History section with order details (simulated).</li>
                </ul>
            </li>
            <li><strong>Order Tracking:</strong>
                <ul>
                    <li>A dedicated section to track order status by order number (simulated).</li>
                    <li>Visual timeline for shipping status updates (simulated).</li>
                </ul>
            </li>
            <li><strong>Information & Contact Sections:</strong>
                <ul>
                    <li>"Why Choose Us" section highlighting key advantages.</li>
                    <li>Customer testimonials carousel.</li>
                    <li>FAQ section with expandable accordions.</li>
                    <li>Newsletter subscription form.</li>
                    <li>Contact section with contact information and a message submission form.</li>
                </ul>
            </li>
            <li><strong>Translation Support:</strong> Structured for easy translation. Currently supports English.</li>
            <li><strong>SEO Optimization:</strong> Includes JSON-LD structured data for `Organization` and `BreadcrumbList` to improve search engine visibility.</li>
            <li><strong>Accessibility (ARIA Attributes):</strong> Implements ARIA attributes for enhanced usability by users with disabilities.</li>
        </ul>

        <h2 id="folder-structure">Folder Structure</h2>
        <p>The EvolveMart template is meticulously organized into a logical and clean folder structure, making it easy to navigate and customize:</p>
        <pre><code>evolvemart-frontend-template/
├── index.html        (The main template page, where all sections are assembled)
├── style.css         (Primary stylesheet for all global and component-specific styling)
├── script.js         (Main JavaScript file for UI functionalities, interactions, and data simulation)
├── assets/           (Folder for all static assets like images, fonts, icons)
│   └── images/       (Contains all placeholder product images, hero image, avatars, etc.)
├── client-test.html  (An optional file for specific testing or demo purposes, not part of the main UI)
└── .gitignore        (Git configuration file, ensures sensitive/unnecessary files are not committed)
</code></pre>

        <h2 id="how-to-use">How to Use This Template</h2>
        <ol>
            <li>
                <h3>Download the Template:</h3>
                <ul>
                    <li>Clone this GitHub repository to your local machine using Git.</li>
                    <li>Alternatively, you can download the repository as a ZIP file from GitHub.</li>
                </ul>
            </li>
            <li>
                <h3>Open in Browser:</h3>
                <ul>
                    <li>Navigate to the downloaded folder.</li>
                    <li>Simply open the <code>index.html</code> file in your preferred web browser (e.g., Chrome, Firefox, Edge).</li>
                    <li>The template should open directly in your browser, displaying the e-commerce UI.</li>
                </ul>
            </li>
            <li>
                <h3>Deployment for Live Demo (GitHub Pages/Netlify):</h3>
                <p>For a public live demo (essential for ThemeForest submission), we recommend deploying your frontend repository to a static site hosting service:</p>
                <ul>
                    <li><strong>GitHub Pages:</strong> Push your frontend-only repository to GitHub. In your repository's "Settings" > "Pages" section, select your `main` branch and `/ (root)` folder as the source.</li>
                    <li><strong>Netlify:</strong> Connect your GitHub repository to Netlify. Netlify will automatically detect your HTML/CSS/JS and deploy it.</li>
                </ul>
                <p class="highlight">
                    <strong>Important:</strong> When testing your live demo (from GitHub Pages or Netlify URL, NOT from `file:///C:/...`), ensure there are no image loading errors (`Failed to load resource: net::ERR_FILE_NOT_FOUND`) in your browser's console. These indicate incorrect image paths or missing files in your deployment. Please review the "Responsive Design" section for necessary CSS adjustments to image paths.
                </p>
            </li>
        </ol>

        <h2 id="customization">Customization</h2>
        <p>EvolveMart is built with customization in mind. All main styles are in <code>style.css</code> and functionality in <code>script.js</code>.</p>
        <ul>
            <li>
                <h3>HTML (<code>index.html</code>):</h3>
                <p>Modify the HTML structure to add, remove, or rearrange sections. Update text content, links, and image `alt` attributes. Ensure you use the `data-key` attributes for translatable elements.</p>
            </li>
            <li>
                <h3>CSS (<code>style.css</code>):</h3>
                <p>Customize the template's appearance by modifying <code>style.css</code>. All primary colors are defined using CSS variables (`:root` selector) for easy theme adjustments. Changes will automatically apply to both light and dark modes.</p>
                <pre><code class="language-css">
/* Example of main color variables */
:root {
    --primary-button-color: hsl(330, 60%, 55%);
    --text-color: #333333;
    /* ... other variables ... */
}

/* Example of dark mode override */
body.dark-mode {
    --primary-button-color: hsl(330, 70%, 65%);
    --text-color: #E0E0E0;
    /* ... other overrides ... */
}
                </code></pre>
            </li>
            <li>
                <h3>JavaScript (<code>script.js</code>):</h3>
                <p>The <code>script.js</code> file handles all interactive elements and data simulation. You can:</p>
                <ul>
                    <li>Modify dummy product data, order history, or user profiles.</li>
                    <li>Adjust carousel speeds or notification durations.</li>
                    <li>**Integrate with a real backend API:** This is where you would replace the dummy data logic with actual API calls (<code>fetch</code> or <code>axios</code>) to retrieve/send data from your own server.</li>
                </ul>
            </li>
        </ul>

        <h2 id="responsive-design">Responsive Design</h2>
        <p>EvolveMart is built mobile-first and fully responsive, adapting its layout to provide an optimal viewing experience across all devices.</p>
        <ul>
            <li><strong>Viewport Meta Tag:</strong> Included in <code>index.html</code> for proper scaling on mobile devices.</li>
            <li><strong>Flexible Units:</strong> Extensive use of relative units (<code>%</code>, <code>rem</code>, <code>em</code>, <code>vw</code>, <code>vh</code>) and `max-width: 100%` for images.</li>
            <li><strong>Media Queries:</strong> Custom media queries are defined in <code>style.css</code> to fine-tune the layout at various breakpoints, ensuring a consistent and beautiful design on desktops, tablets, and smartphones. Key adjustments are made for:
                <ul>
                    <li><strong>Navigation:</strong> Hiding desktop navigation and displaying a hamburger menu with a mobile sidebar on smaller screens.</li>
                    <li><strong>Grids & Layouts:</strong> Adjusting columns for product grids, category grids, and feature sections (e.g., from multiple columns to single column on phones).</li>
                    <li><strong>Image & Icon Sizes:</strong> Scaling down images and icons for better display and touchability on smaller screens.</li>
                    <li><strong>Text Sizes:</strong> Adjusting font sizes for readability across different screen dimensions.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Specific adjustments for sidebar and product icons (as per your requests):</strong></p>
        <pre><code class="language-css">
/* Adjustments for sidebar navigation links */
@media (max-width: 992px) {
    .sidebar-nav-links {
        gap: 12px; /* Reduced gap between navigation links */
    }
    .sidebar-nav-links li a {
        font-size: 0.95rem; /* Slightly smaller font size for tablets */
        padding: 10px 0;
    }
}

@media (max-width: 576px) {
    .sidebar-nav-links {
        gap: 10px; /* Further reduced gap for smaller phones */
    }
    .sidebar-nav-links li a {
        font-size: 0.85rem; /* Even smaller font size for phones */
        padding: 8px 0;
    }
}

/* Ensure sidebar has scrollbar if content overflows */
.mobile-sidebar {
    overflow-y: auto; /* Adds scrollbar if content exceeds height */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: var(--primary-button-color) var(--border-color); /* Firefox scrollbar color */
}
.mobile-sidebar::-webkit-scrollbar { /* Webkit scrollbar styling */
    width: 8px;
}
.mobile-sidebar::-webkit-scrollbar-track {
    background: var(--border-color);
    border-radius: 10px;
}
.mobile-sidebar::-webkit-scrollbar-thumb {
    background: var(--primary-button-color);
    border-radius: 10px;
}
.mobile-sidebar::-webkit-scrollbar-thumb:hover {
    background: var(--primary-button-hover);
}


/* Adjustments for product card images and action icons for smaller screens */
@media (max-width: 576px) {
    .product-card-image {
        height: 180px; /* Mini product image height */
    }
    .product-card .add-to-cart-btn {
        padding: 8px 15px; /* Smaller padding for cart button */
        font-size: 0.85rem; /* Smaller font for cart button */
    }
    .product-card .add-to-wishlist-btn,
    .product-card .quick-view-btn {
        padding: 8px 12px; /* Smaller padding for icon buttons */
        font-size: 0.9rem; /* Smaller icon font size */
    }
}

@media (max-width: 380px) { /* Extra small devices (very small phones) */
    .product-card-image {
        height: 160px; /* Even smaller product image height */
    }
    .product-card-content h3 {
        font-size: 1rem; /* Smaller product title */
    }
    .product-card-content .product-prices p {
        font-size: 0.9rem; /* Smaller price */
    }
    .product-card-content .product-rating {
        font-size: 0.95rem; /* Smaller rating stars */
    }
    .product-card-content .product-rating span {
        font-size: 0.8rem; /* Smaller review count */
    }
    .product-card-actions {
        gap: 8px;
    }
    .product-card .add-to-cart-btn {
        padding: 6px 10px;
        font-size: 0.8rem;
    }
    .product-card .add-to-wishlist-btn,
    .product-card .quick-view-btn {
        padding: 6px 8px;
        font-size: 0.85rem;
    }
    /* Quick View Modal image adjustment for very small screens */
    .quick-view-image {
        height: 200px;
    }
}
        </code></pre>

        <h2 id="backend-integration">Backend Integration (Important for Real Applications)</h2>
        <p>The EvolveMart template is designed as a **pure frontend HTML/CSS/JavaScript UI Kit**. This means all data (products, cart, wishlist, profile, orders, etc.) is currently **simulated dummy data** managed entirely by local JavaScript arrays and browser `localStorage`.</p>
        <ul>
            <li><strong>For Full Functionality:</strong> If you wish to build a fully functional e-commerce application with features such as:
                <ul>
                    <li>Dynamic product management (from a database).</li>
                    <li>Real user management (registration, login, authentication).</li>
                    <li>Actual payment processing.</li>
                    <li>Real-time order tracking.</li>
                </ul>
                You will need to **build a separate backend API** (e.g., using Node.js, Python, PHP, Ruby on Rails, etc.) and modify `script.js` to:
                <ol>
                    <li>Make `fetch` or `axios` requests to your backend API endpoints.</li>
                    <li>Process responses from the backend to display dynamic data.</li>
                    <li>Send data from the frontend to the backend (e.g., when a user registers, adds to cart, or completes checkout).</li>
                </ol>
            </li>
            <li>This template provides a strong UI foundation for such an application, but the implementation of backend logic and database connections must be done by you. Messages like "This feature requires a backend for full functionality. This is a frontend UI demo." will appear for these features in the demo.</li>
        </ul>

        <h2 id="live-demo">Live Demo</h2>
        <p>See this template in action on our live demo:<br>
        <strong><a href="[Your Live Demo Link on GitHub Pages/Netlify Here]">EvolveMart Live Demo</a></strong><br>
        (Please replace this placeholder with your actual live demo URL after you deploy it to GitHub Pages or Netlify.)</p>
        <p class="highlight">
            <strong>Important when testing the live demo:</strong>
            When accessing your demo from a deployed URL (e.g., from GitHub Pages or Netlify), ensure there are no error messages like `Failed to load resource: net::ERR_FILE_NOT_FOUND` in your browser's Developer Tools console. If these errors appear, it indicates that image files are missing or their paths are incorrect relative to your deployed site. Please ensure all image paths (including capitalization) are correct in your code and that all `assets/images/` files are correctly uploaded to your GitHub repository.
        </p>

        <h2 id="themeforest-review-notes">Note for ThemeForest Reviewers</h2>
        <div class="note-for-reviewers">
            <ul>
                <li>This template is a **pure HTML/CSS/JavaScript frontend UI Kit**. Its primary purpose is to showcase design, interaction, and user interface functionalities.</li>
                <li>**All displayed data (products, cart, wishlist, profile, orders, etc.) is simulated (dummy data)**, entirely managed by local JavaScript (`script.js`) or browser `localStorage`. This ensures the template functions independently as a UI demo without requiring any backend setup.</li>
                <li>Features like "Registration," "Login," "Edit Profile," "Add Address," "Add Payment Method," and "Order Tracking" use simulated data or notification messages to indicate that their **full functionality requires integration with a real backend API**, which is not included in this template.</li>
                <li>All image assets are placeholders or royalty-free images, safe for commercial use.</li>
                <li>The code is clean, structured, responsive, and has been optimized for basic performance.</li>
            </ul>
        </div>

        <h2 id="support">Support</h2>
        <p>Should you encounter any issues or have questions regarding the use or customization of EvolveMart, please feel free to contact us. We are dedicated to providing comprehensive support to ensure your success with our template.</p>
        <ul>
            <li><strong>Email:</strong> info@evolvemarttemplate.com</li>
            <li><strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (Your Time Zone)</li>
            <li>Please provide a detailed description of your issue, including screenshots if applicable.</li>
        </ul>

        <h2 id="credits">Credits</h2>
        <p>EvolveMart uses the following third-party resources:</p>
        <ul>
            <li><strong>Fonts:</strong> <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins</a> and <a href="https://fonts.google.com/specimen/Playfair+Display" target="_blank" rel="noopener noreferrer">Playfair Display</a> from Google Fonts.</li>
            <li><strong>Icons:</strong> <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a> (via CDN).</li>
            <li><strong>Images:</strong> All placeholder images are either royalty-free (from sources like Unsplash, Pexels, Pixabay) or generic and are included for demonstration purposes.</li>
            <li><strong>JavaScript Libraries:</strong> Vanilla JavaScript is used throughout.</li>
        </ul>

        <h2 id="license">License</h2>
        <p>EvolveMart is distributed under the <a href="https://themeforest.net/licenses/standard" target="_blank" rel="noopener noreferrer">ThemeForest Standard Licenses</a>.</p>
        <p>By purchasing this template, you agree to the terms of the chosen ThemeForest license (Regular or Extended), which dictate the usage rights for the End Product you create with this template.</p>
        <p style="text-align: center; margin-top: 30px; font-size: 0.9em; color: #666;">
            &copy; 2023 EvolveMart. All Rights Reserved.
        </p>
    </div>
</body>
</html>