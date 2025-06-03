document.addEventListener('DOMContentLoaded', () => {

    /*====================================================================
      1. GLOBAL ELEMENTS & VARIABLES
      Define all DOM elements and global variables that will be frequently used.
    ====================================================================*/

    // --- Core Layout Elements ---
    const body = document.body;
    const overlay = document.getElementById('overlay');
    const notificationContainer = document.getElementById('notification-container');
    const mainHeader = document.querySelector('.main-header');

    // --- Mobile Menu/Sidebar Elements ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebarNavLinks = document.querySelectorAll('#mobile-sidebar .sidebar-nav-links a');

    // --- Modal Elements (General) ---
    const searchModal = document.getElementById('search-modal');
    const cartModal = document.getElementById('cart-modal');
    const wishlistModal = document.getElementById('wishlist-modal');
    const productDetailModal = document.getElementById('product-detail-modal');
    const profileModal = document.getElementById('profile-modal');
    const quickViewModal = document.getElementById('quick-view-modal');
    const infoPageModal = document.getElementById('info-page-modal');
    const infoPageModalTitle = document.getElementById('info-page-modal-title');
    const infoPageContent = document.getElementById('info-page-content');
    const orderDetailModal = document.getElementById('order-detail-modal'); // NEW: Order Detail Modal
    const editProfileModal = document.getElementById('edit-profile-modal'); // NEW: Edit Profile Modal
    const registerModal = document.getElementById('register-modal');     // NEW: Register Modal

    // Select all close buttons once
    const allCloseButtons = document.querySelectorAll('.close-modal-btn');

    // --- Navigation Icon Buttons (for opening modals) ---
    const searchIcon = document.getElementById('search-icon');
    const cartIcon = document.getElementById('cart-icon');
    const wishlistIcon = document.getElementById('wishlist-icon');
    const profileIcon = document.getElementById('profile-icon');
    const sidebarSearchIcon = document.getElementById('sidebar-search-icon');
    const sidebarCartIcon = document.getElementById('sidebar-cart-icon');
    const sidebarWishlistIcon = document.getElementById('sidebar-wishlist-icon');
    const sidebarProfileIcon = document.getElementById('sidebar-profile-icon');

    // --- Product & Category Sections Elements ---
    const productListContainer = document.getElementById('product-list');
    const featuredProductListContainer = document.getElementById('featured-product-list');
    const categoryGridContainer = document.getElementById('category-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sortByFilter = document.getElementById('sort-by');
    const loadMoreProductsBtn = document.getElementById('load-more-products');
    const viewAllCategoriesBtn = document.getElementById('view-all-categories-btn');

    // --- Flash Sale Elements ---
    const flashSaleSection = document.getElementById('flash-sale');
    const flashSaleListContainer = document.getElementById('flash-sale-list');
    const countdownTimer = document.getElementById('countdown-timer');
    const viewAllFlashSaleBtn = document.querySelector('.view-all-flash-sale-btn');

    // --- Carousel Elements ---
    const featuredCarouselPrevBtn = document.querySelector('#featured-products .carousel-btn.prev-btn');
    const featuredCarouselNextBtn = document.querySelector('#featured-products .carousel-btn.next-btn');
    const featuredCardsWrapper = document.getElementById('featured-product-list');
    const testimonialCarouselWrapper = document.querySelector('.testimonial-cards-wrapper');
    const testimonialPrevBtn = document.querySelector('.testimonials-section .carousel-btn.prev-btn');
    const testimonialNextBtn = document.querySelector('.testimonials-section .carousel-btn.next-btn');

    // --- Cart & Wishlist Content Elements (inside modals) ---
    const cartItemsContainer = document.getElementById('cart-items');
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    // Product Detail Modal specific elements
    const productDetailContent = document.getElementById('product-detail-content');
    const productDetailLoader = document.querySelector('#product-detail-modal .product-detail-loader');
    const cartCountElements = document.querySelectorAll('.cart-count');
    const wishlistCountElements = document.querySelectorAll('.wishlist-count');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const emptyWishlistMessage = document.getElementById('empty-wishlist-message');
    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartTotalSpan = document.getElementById('cart-total');

    // --- Checkout Page Elements ---
    const checkoutBtn = document.getElementById('checkout-btn');
    const viewCartPageBtn = document.getElementById('view-cart-page-btn');
    const checkoutPage = document.getElementById('checkout-page');
    const backToCartBtn = document.getElementById('back-to-cart-btn');
    const shippingForm = document.getElementById('shipping-form');
    const checkoutOrderItems = document.getElementById('checkout-order-items');
    const checkoutSubtotalSpan = document.getElementById('checkout-subtotal');
    const checkoutShippingCostSpan = document.getElementById('checkout-shipping-cost');
    const checkoutGrandTotalSpan = document.getElementById('checkout-grand-total');
    const paymentMethodsSection = document.getElementById('payment-methods-section');
    const placeOrderBtn = document.getElementById('place-order-btn');

    // --- Search Modal Specific Elements ---
    const searchInput = document.getElementById('search-input');
    const executeSearchBtn = document.getElementById('execute-search-btn');
    const searchResultsContainer = document.getElementById('search-results');

    // --- Profile Modal Specific Elements ---
    const profileContentArea = document.getElementById('profile-content-area');
    const profileLoadingSkeleton = document.querySelector('#profile-modal .profile-loading-skeleton');
    const profileActionButton = document.getElementById('profile-action-btn');
    const viewOrderHistoryBtn = document.getElementById('view-order-history-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // NEW: Elements for Edit Profile Modal
    const editProfileFormArea = document.getElementById('edit-profile-form-area');
    const editProfileLoader = document.querySelector('#edit-profile-modal .profile-loading-skeleton');

    // NEW: Elements for Register Modal
    const registerFormArea = document.getElementById('register-form-area');
    const registerLoader = document.querySelector('#register-modal .profile-loading-skeleton');


    // NEW: Elements for Order Detail Modal
    const orderDetailContent = document.getElementById('order-detail-content');
    const orderDetailLoader = document.querySelector('#order-detail-modal .order-detail-loader');


    // --- Form Elements (Newsletter, Contact) ---
    const newsletterForm = document.getElementById('newsletter-form');
    const footerNewsletterForm = document.getElementById('footer-newsletter-form');
    const contactForm = document.getElementById('contact-form');

    // --- Recently Viewed Products Elements ---
    const recentlyViewedListContainer = document.getElementById('recently-viewed-list');
    const emptyRecentlyViewedMessage = document.getElementById('empty-recently-viewed-message');

    // --- Dark Mode Toggle Element ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sidebarDarkModeToggle = document.getElementById('sidebar-dark-mode-toggle');

    // --- Support Links (Dummy Feature) ---
    const supportLinks = document.querySelectorAll('.footer-support ul li a[data-info-page]');
    const sidebarSupportLinks = document.querySelectorAll('#mobile-sidebar .sidebar-nav-links a[data-info-page]');

    // --- Order Tracking Elements ---
    const orderTrackingForm = document.getElementById('order-tracking-form');
    const orderIdInput = document.getElementById('order-id-input');
    const orderTrackingResults = document.getElementById('order-tracking-results');
    const initialOrderTrackingPlaceholder = document.getElementById('initial-order-tracking-placeholder'); // Added this


    // Quick View Modal specific elements
    const quickViewLoader = document.querySelector('#quick-view-modal .quick-view-loader');
    const quickViewDetails = document.querySelector('#quick-view-modal .quick-view-details');


    /*====================================================================
      2. GLOBAL STATE VARIABLES
      Variables that store application status (e.g., cart data, language, etc.).
    ====================================================================*/

    let currentLanguage = 'en';
    let currentCurrency = 'USD';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
        name: 'Guest',
        email: 'guest@example.com',
        memberStatus: 'Bronze',
        joinDate: '2023-01-01', // NEW: Added joinDate
        shippingAddresses: [ // NEW: Added shippingAddresses
            { id: 'addr1', name: 'Home', address: '123 Main St, Cityville, Country', isDefault: true }
        ],
        paymentMethods: [ // NEW: Added paymentMethods
            { id: 'pay1', type: 'Credit Card', last4: '1234', isDefault: true },
            { id: 'pay2', type: 'PayPal', email: 'user@example.com', isDefault: false }
        ],
        orders: [] // Orders will be fetched/filtered from dummyOrders
    };
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // NEW: For Product Rating Simulation
    // In a real application, ratings would come from a backend database
    // This is purely for frontend display purposes.
    const productRatings = JSON.parse(localStorage.getItem('productRatings')) || {};

    let currentPage = 1;
    const productsPerPage = 8;
    const productsPerCategoryPage = 7; // Used for "View All Categories" / category filter initial load

    let isProductModalOpen = false;
    let lastFocusedElement = null;

    const MAX_NOTIFICATIONS = 3;
    const NOTIFICATION_DURATION = 3000;

    const MAX_RECENTLY_VIEWED = 6;

    const DEBOUNCE_DELAY = 300;

    // --- Dummy Data (Backend Simulation) ---
    // Products data is expanded and diversified for a richer demo.
    // Ensure all images are placeholders or generic to comply with ThemeForest.
    const baseDummyProducts = [
        { id: 'p1', name: 'Premium Men\'s Linen Shirt', description: 'High-quality linen shirt for maximum comfort, suitable for casual and formal styles. Made from 100% organic linen, features a classic collar, button-down front, and long sleeves. Perfect for summer days or layering.', price: 25.00, image: 'assets/images/placeholder-product-1.jpeg', category: 'apparel', stock: 15, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p2', name: 'Women\'s Slim Fit Chinos', description: 'Modern chinos with a comfortable and stylish slim fit. Crafted from stretch cotton twill for all-day comfort. Features a mid-rise waist, slim leg opening, and classic five-pocket styling. Available in various colors.', price: 18.00, image: 'assets/images/placeholder-product-2.jpeg', category: 'apparel', stock: 20, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p3', name: 'Classic Leather Watch', description: 'Watch with a classic design and elegant genuine leather strap. This timepiece boasts a durable stainless steel case, precise quartz movement, and a scratch-resistant mineral glass. Water-resistant up to 50 meters. Ideal for daily wear.', price: 45.00, image: 'assets/images/placeholder-product-3.jpeg', category: 'accessories', stock: 8, isFeatured: true, isFlashSale: true, oldPrice: 60.00 },
        { id: 'p4', name: 'Minimalist Gold Earrings', description: 'Gold earrings with a minimalist design, suitable for everyday wear. Made from hypoallergenic 14K gold-plated sterling silver, these delicate studs add a touch of elegance without being overwhelming. Lightweight and comfortable.', price: 12.00, image: 'assets/images/placeholder-product-4.jpeg', category: 'accessories', stock: 30, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p5', name: 'Portable Bluetooth Speaker', description: 'Wireless speaker with clear sound and powerful bass, ideal for travel. Features a robust IPX7 waterproof design, 12-hour battery life, and a built-in microphone for hands-free calls. Connects effortlessly via Bluetooth 5.0.', price: 30.00, image: 'assets/images/placeholder-product-5.jpeg', category: 'electronics', stock: 10, isFeatured: true, isFlashSale: true, oldPrice: 45.00 },
        { id: 'p6', name: 'Noise Cancelling Headphones', description: 'Advanced headphones with noise-cancelling features for an immersive audio experience. Enjoy crystal-clear sound and deep bass. Comfortable over-ear design, 30-hour battery life, and quick charge feature. Perfect for travel or focused work.', price: 75.00, image: 'assets/images/placeholder-product-6.jpeg', category: 'electronics', stock: 5, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p7', name: 'Non-Stick Cookware Set', description: 'Complete cookware set with a non-stick coating, making cooking easier. Includes frying pans, saucepans, and a Dutch oven with tempered glass lids. PTFE/PFOA-free ceramic coating ensures healthy cooking and effortless cleanup. Durable and oven-safe.', price: 60.00, image: 'assets/images/placeholder-product-7.jpeg', category: 'home-goods', stock: 12, isFeatured: true, isFlashSale: true, oldPrice: 80.00 },
        { id: 'p8', name: 'Modern LED Desk Lamp', description: 'Energy-efficient LED desk lamp with a modern design, suitable for workspaces. Features adjustable brightness and color temperature, a flexible gooseneck for optimal lighting, and a USB charging port for your devices. Touch control interface.', price: 15.00, image: 'assets/images/placeholder-product-8.jpeg', category: 'home-goods', stock: 25, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p9', name: 'Genuine Leather Sling Bag', description: 'Multi-functional genuine leather sling bag, ideal for casual style. Features multiple compartments, a main zippered pocket, and an adjustable shoulder strap. Perfect for carrying essentials like phone, wallet, and keys.', price: 38.00, image: 'assets/images/placeholder-product-9.jpeg', category: 'accessories', stock: 18, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p10', name: 'Floral Print Women\'s Cotton Blouse', description: 'Light cotton blouse with a cheerful floral print, perfect for summer. Made from breathable 100% cotton, it offers a relaxed fit and elegant drape. Ideal for casual outings or semi-formal events. Easy to care for.', price: 16.50, image: 'assets/images/placeholder-product-10.jpeg', category: 'apparel', stock: 22, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p11', name: 'Latest Sporty Smartwatch', description: 'Smartwatch with fitness tracker features, smart notifications, and long battery life. Monitors heart rate, steps, and sleep. GPS enabled for outdoor activities. Syncs with iOS and Android devices. Lightweight and comfortable.', price: 85.00, image: 'assets/images/placeholder-product-11.jpeg', category: 'electronics', stock: 7, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p12', name: 'Stainless Steel Pot Set', description: 'Rust-proof and easy-to-clean stainless steel pot set. This durable set includes various pot sizes with encapsulated bases for even heat distribution. Suitable for all stovetops, including induction. Dishwasher safe for easy cleanup.', price: 52.00, image: 'assets/images/placeholder-product-12.jpeg', category: 'home-goods', stock: 14, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p13', name: 'Urban Men\'s Sneakers', description: 'Sneakers with an urban design and comfortable sole for daily activities. Features a breathable mesh upper, cushioned midsole for superior comfort, and a non-slip rubber outsole for excellent grip. Stylish and versatile for urban exploration.', price: 28.00, image: 'assets/images/placeholder-product-13.jpeg', category: 'apparel', stock: 20, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p14', name: 'Genuine Silver Bracelet', description: 'Silver bracelet with detailed engraving, an elegant touch for your appearance. Crafted from 925 sterling silver, this bracelet is hypoallergenic and tarnish-resistant. Features an adjustable clasp for a perfect fit. Comes in a gift box.', price: 19.50, image: 'assets/images/placeholder-product-14.jpeg', category: 'accessories', stock: 28, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p15', name: 'Compact Digital Camera', description: 'Easy-to-carry digital camera with high image quality, ideal for beginners. Features 20MP sensor, 4x optical zoom, and 1080p video recording. Includes image stabilization and various scene modes for stunning photos in any condition.', price: 120.00, image: 'assets/images/placeholder-product-15.jpeg', category: 'electronics', stock: 3, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p16', name: 'Soft Knit Blanket', description: 'Warm and soft knit blanket, perfect for relaxing on the sofa. Made from premium acrylic fibers, providing exceptional softness and warmth without excessive weight. Ideal for all seasons and machine washable.', price: 21.00, image: 'assets/images/placeholder-product-16.jpeg', category: 'home-goods', stock: 18, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p17', name: 'Pro Sports Smartwatch', description: 'Advanced smartwatch for sports activities with heart rate tracker and GPS. Built-in altimeter and barometer for outdoor adventures. Waterproof design, long-lasting battery, and compatible with various fitness apps. Track your performance with precision.', price: 150.00, image: 'assets/images/placeholder-product-17.jpeg', category: 'sports', stock: 6, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p18', name: 'World Cuisine Recipe Book', description: 'A collection of recipes from various countries, suitable for beginner to expert chefs. Explore authentic flavors from around the globe with easy-to-follow instructions and beautiful photography. Includes tips on ingredients and cooking techniques.', price: 9.50, image: 'assets/images/placeholder-product-18.jpeg', category: 'books', stock: 50, isFeatured: true, isFlashSale: false, oldPrice: null }
    ];

    // Generate more dummy products for variety and testing
    let products = [];
    for (let i = 0; i < 36; i++) {
        const originalIndex = i % baseDummyProducts.length;
        const originalProduct = baseDummyProducts[originalIndex];
        const newId = `p${i + 1}`;
        let newName = originalProduct.name;
        let newPrice = originalProduct.price;
        let newOldPrice = originalProduct.oldPrice;
        let newIsFeatured = originalProduct.isFeatured;
        let newIsFlashSale = originalProduct.isFlashSale;

        if (i >= baseDummyProducts.length) {
            newName = `${originalProduct.name} (Variant ${Math.floor(i / baseDummyProducts.length) + 1})`;
            newPrice = originalProduct.price * (1 + (Math.random() * 0.2 - 0.1)); // Vary price slightly
            newPrice = parseFloat(newPrice.toFixed(2));
            newIsFeatured = Math.random() < 0.5; // Randomly featured
            newIsFlashSale = Math.random() < 0.2; // Randomly flash sale
            if (newIsFlashSale) {
                newOldPrice = newPrice * (1 + Math.random() * 0.3 + 0.1); // Old price higher than new price
                newOldPrice = parseFloat(newOldPrice.toFixed(2));
            } else {
                newOldPrice = null;
            }
        }

        products.push({
            ...originalProduct,
            id: newId,
            name: newName,
            description: originalProduct.description, // Keep original description for variants
            price: newPrice,
            oldPrice: newOldPrice,
            isFeatured: newIsFeatured,
            isFlashSale: newIsFlashSale,
        });
    }

    // Add some new unique products not based on baseDummyProducts
    products.push(
        { id: 'p37', name: 'Performance Car Air Filter X', description: 'Air filter that boosts car engine performance, suitable for racing. Provides improved fuel efficiency and better engine protection with advanced filtration technology. Easy to install and long-lasting.', price: 35.00, image: 'assets/images/placeholder-product-37.jpeg', category: 'automotive', stock: 10, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p38', name: 'Premium Car Interior Care Kit', description: 'Complete set for cleaning and maintaining luxurious car interiors. Contains leather cleaner, vinyl protector, and air freshener. All formulas are pH-balanced and safe for all interior surfaces, leaving a fresh scent. ', price: 21.00, image: 'assets/images/placeholder-product-38.jpeg', category: 'automotive', stock: 15, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p39', name: 'Geometric Wall Decorative Lamp', description: 'Wall decoration lamp with a modern minimalist geometric design. Ideal for living rooms, bedrooms, or corridors. Emits soft, warm light, creating a cozy ambiance. Made from high-quality metal with a matte black finish.', price: 18.00, image: 'assets/images/placeholder-product-39.jpeg', category: 'decor', stock: 25, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p40', name: 'Abstract Wood Aesthetic Sculpture', description: 'Abstract sculpture art made from teak wood to beautify rooms. Handcrafted by local artisans, each piece is unique. Features smooth curves and a natural wood grain, perfect for modern and minimalist interiors.', price: 55.00, image: 'assets/images/placeholder-product-40.jpeg', category: 'decor', stock: 5, isFeatured: true, isFlashSale: false, oldPrice: null },
        { id: 'p41', name: 'Interactive Robotic Educational Toy', description: 'Robotics set that stimulates children\'s creativity and logic. Suitable for ages 8 and up, includes assembly guide and programming challenges. Develops problem-solving skills and introduces basic coding concepts.', price: 12.00, image: 'assets/images/placeholder-product-41.jpeg', category: 'toys', stock: 40, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p42', name: 'Monster Character Plush Doll', description: 'Soft plush doll with cute monster characters that children love. Made from non-allergenic and baby-safe materials, ensuring it\'s gentle on sensitive skin. Perfect for cuddling and imaginative play.', price: 8.50, image: 'assets/images/placeholder-product-42.jpeg', category: 'toys', stock: 60, isFeatured: false, isFlashSale: false, oldPrice: null }
    );

    // Add even more variety for a larger product list
    products.push(
        { id: 'p43', name: 'Minimalist Wall Bookshelf', description: 'Minimalist hanging bookshelf for modern interior design. Made of high-quality steel with a black matte finish. Offers a sleek solution for organizing books and decor items without taking up floor space. Easy to mount.', price: 28.00, image: 'assets/images/placeholder-product-43.jpeg', category: 'home-goods', stock: 20, isFeatured: false, isFlashSale: false, oldPrice: null },
        { id: 'p44', name: 'Sporty UV400 Sunglasses', description: 'Sunglasses for sports with UV400 protection. Ergonomic design and polarized lenses to reduce glare. Lightweight frame with non-slip nose pads for secure fit during intense activities. Comes with a protective case.', price: 17.50, image: 'assets/images/placeholder-product-44.jpeg', category: 'accessories', stock: 35, isFeatured: false, isFlashSale: false, oldPrice: null }
    );

    // Dummy Order data, with added status for tracking and visual map simulation
    const dummyOrders = [
        {
            id: 'ORD123456',
            status: 'delivered', // Current status
            date: '2023-05-20',
            total: 50.00,
            items: [
                { name: 'Premium Men\'s Linen Shirt', qty: 1, price: 25.00, image: 'assets/images/placeholder-product-1.jpeg' },
                { name: 'Women\'s Slim Fit Chinos', qty: 1, price: 18.00, image: 'assets/images/placeholder-product-2.jpeg' }
            ],
            shippingAddress: '123 Demo Street, Cityville, Country',
            tracking: { // Simulated tracking stages and locations for map
                // Progress from 0 to 100
                stage: 'delivered', // processing, shipped, delivered, cancelled
                currentLocation: 'Destination City', // Example: 'Warehouse', 'Shipping Hub A', 'In Transit', 'Destination City'
                progressPercent: 100, // 0 to 100
                history: [
                    { status: 'Order Placed', location: 'Origin Warehouse', date: '2023-05-20 10:00 AM', icon: 'fa-clipboard-list' },
                    { status: 'Processed', location: 'Origin Warehouse', date: '2023-05-20 03:00 PM', icon: 'fa-boxes-packing' },
                    { status: 'Shipped', location: 'Shipping Hub A', date: '2023-05-21 09:00 AM', icon: 'fa-truck-ramp-box' },
                    { status: 'In Transit', location: 'Regional Hub B', date: '2023-05-22 08:00 AM', icon: 'fa-route' },
                    { status: 'Out for Delivery', location: 'Destination City', date: '2023-05-23 07:00 AM', icon: 'fa-person-walking-luggage' },
                    { status: 'Delivered', location: 'Destination City', date: '2023-05-23 02:30 PM', icon: 'fa-house-circle-check' }
                ]
            }
        },
        {
            id: 'ORD789012',
            status: 'shipped',
            date: '2023-05-28',
            total: 30.00,
            items: [
                { name: 'Portable Bluetooth Speaker', qty: 1, price: 30.00, image: 'assets/images/placeholder-product-5.jpeg' }
            ],
            shippingAddress: '456 Example Ave, Townsville, Country',
            tracking: {
                stage: 'in-transit',
                currentLocation: 'Regional Hub B',
                progressPercent: 60,
                history: [
                    { status: 'Order Placed', location: 'Origin Warehouse', date: '2023-05-28 09:00 AM', icon: 'fa-clipboard-list' },
                    { status: 'Processed', location: 'Origin Warehouse', date: '2023-05-28 01:00 PM', icon: 'fa-boxes-packing' },
                    { status: 'Shipped', location: 'Shipping Hub A', date: '2023-05-29 10:00 AM', icon: 'fa-truck-ramp-box' },
                    { status: 'In Transit', location: 'Regional Hub B', date: '2023-05-30 04:00 AM', icon: 'fa-route' }
                ]
            }
        },
        {
            id: 'ORD345678',
            status: 'processing',
            date: '2023-06-01',
            total: 70.00,
            items: [
                { name: 'Noise Cancelling Headphones', qty: 1, price: 75.00, image: 'assets/images/placeholder-product-6.jpeg' }
            ],
            shippingAddress: '789 Sample Rd, Villageton, Country',
            tracking: {
                stage: 'processing',
                currentLocation: 'Origin Warehouse',
                progressPercent: 20,
                history: [
                    { status: 'Order Placed', location: 'Origin Warehouse', date: '2023-06-01 11:00 AM', icon: 'fa-clipboard-list' },
                    { status: 'Processing', location: 'Origin Warehouse', date: '2023-06-01 02:00 PM', icon: 'fa-boxes-packing' }
                ]
            }
        },
         {
            id: 'ORD901234',
            status: 'cancelled', // New status example
            date: '2023-05-25',
            total: 20.00,
            items: [
                { name: 'Modern LED Desk Lamp', qty: 1, price: 15.00, image: 'assets/images/placeholder-product-8.jpeg' }
            ],
            shippingAddress: '101 Cancel St, Refused Town, Country',
            tracking: {
                stage: 'cancelled',
                currentLocation: 'N/A',
                progressPercent: 0,
                history: [
                    { status: 'Order Placed', location: 'Origin Warehouse', date: '2023-05-25 09:00 AM', icon: 'fa-clipboard-list' },
                    { status: 'Cancelled', location: 'Origin Warehouse', date: '2023-05-25 10:00 AM', icon: 'fa-ban' }
                ]
            }
        }
    ];

    // Dummy content for info pages (e.g., help, terms, returns)
    const dummyInfoPages = {
        'shopping-help': {
            title_key: 'shopping-help-title',
            content_key: 'shopping-help-content',
            content: `
                <p>Welcome to EvolveMart's Shopping Help section. We are here to guide you through your shopping journey.</p>
                <h4>How to Browse Products</h4>
                <p>You can browse products by using the search bar at the top of the page, filtering by category, or exploring our 'Flash Sale' and 'Best Sellers' sections. Use the sorting options to arrange products by price, name, or popularity.</p>
                <h4>Adding Items to Cart</h4>
                <p>Once you find a product you like, click the "Add to Cart" button. You can adjust the quantity directly in the product detail modal or in your shopping cart. If an item is out of stock, the button will be disabled.</p>
                <h4>Placing an Order</h4>
                <p>After adding all desired items to your cart, click on the cart icon and proceed to checkout. You will need to fill in your shipping information and select a payment method. We ensure a secure and seamless checkout experience.</p>
                <h4>Account Management</h4>
                <p>Creating an account allows you to track your orders, save your wishlist, and manage your profile. While a backend is needed for full account functionality, our frontend demo showcases the UI.</p>
                <h4>Need More Assistance?</h4>
                <p>If you have any further questions, please visit our FAQ section or contact our customer support team.</p>
            `
        },
        'how-to-order': {
            title_key: 'how-to-order',
            content_key: 'how-to-order-content',
            content: `
                <p>Ordering at EvolveMart is simple and straightforward. Follow these steps to complete your purchase:</p>
                <h4>Step 1: Find Your Products</h4>
                <p>Use the search bar, category filters, or browse our curated collections like "Flash Sale" and "Best Sellers" to find the items you need.</p>
                <h4>Step 2: Add to Cart</h4>
                <p>On each product card or detail page, click the "Add to Cart" button. You can update quantities or remove items directly from the cart modal.</p>
                <h4>Step 3: Proceed to Checkout</h4>
                <p>Click the shopping cart icon in the header, then select "Proceed to Checkout." If your cart is empty, this option will not be available.</p>
                <h4>Step 4: Enter Shipping Information</h4>
                <p>Fill in your full name, address, city, postal code, and phone number accurately. This information is crucial for timely delivery.</p>
                <h4>Step 5: Select Payment Method</h4>
                <p>Choose your preferred payment method from the available options: Bank Transfer, Credit/Debit Card, or E-Wallet. Your payment information is securely processed.</p>
                <h4>Step 6: Confirm Order</h4>
                <p>Review your order summary, including item subtotal, shipping cost, and total payment. Click "Confirm Order" to finalize your purchase. You will receive a confirmation message.</p>
                <h4>Order Tracking</h4>
                <p>After placing your order, you can track its status using your order number on our <a href="#order-tracking" onclick="closeAllModals()">Order Tracking page</a>.</p>
            `
        },
        'shipping': {
            title_key: 'shipping',
            content_key: 'shipping-content',
            content: `
                <p>EvolveMart strives to provide fast and reliable shipping for all our customers.</p>
                <h4>Shipping Zones and Delivery Times</h4>
                <ul>
                    <li><strong>Domestic Shipping:</strong> Generally takes 2-5 business days.</li>
                    <li><strong>International Shipping:</strong> Currently not available in this demo.</li>
                </ul>
                <p>Delivery times may vary based on your location and unforeseen circumstances such as weather conditions or public holidays. We will provide an estimated delivery window at checkout.</p>
                <h4>Shipping Costs</h4>
                <p>A flat shipping fee of $5.00 applies to all orders in this demo. Actual shipping costs may vary based on product weight, dimensions, and destination in a live environment.</p>
                <h4>Order Processing</h4>
                <p>Orders are typically processed within 1-2 business days after payment confirmation. You will receive a shipping confirmation email with tracking details once your order has been dispatched.</p>
                <h4>Tracking Your Order</h4>
                <p>You can track the status of your order by entering your order number on our <a href="#order-tracking" onclick="closeAllModals()">Order Tracking page</a>.</p>
                <h4>Delivery Issues</h4>
                <p>If you experience any issues with your delivery or do not receive your order within the estimated timeframe, please contact our customer support immediately. We are here to assist you.</p>
            `
        },
        'terms-conditions': {
            title_key: 'terms-conditions',
            content_key: 'terms-conditions-content',
            content: `
                <p>Welcome to EvolveMart's Terms & Conditions. By accessing or using our website, you agree to comply with and be bound by these terms. Please read them carefully.</p>
                <h4>1. Acceptance of Terms</h4>
                <p>By using the EvolveMart platform, you signify your acceptance of these Terms and Conditions. If you do not agree, please do not use our services.</p>
                <h4>2. Privacy Policy</h4>
                <p>Your use of our website is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.</p>
                <h4>3. Product Information</h4>
                <p>We strive to ensure that all product descriptions, images, and prices are accurate. However, errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
                <h4>4. Order Acceptance and Pricing</h4>
                <p>All orders placed through the website are subject to EvolveMart's acceptance. Prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason.</p>
                <h4>5. Intellectual Property</h4>
                <p>All content on this site, including text, graphics, logos, images, and software, is the property of EvolveMart or its content suppliers and protected by international copyright laws.</p>
                <h4>6. Limitation of Liability</h4>
                <p>EvolveMart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your access to or use of the website.</p>
                <h4>7. Governing Law</h4>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where EvolveMart operates, without regard to its conflict of law principles.</p>
                <h4>8. Changes to Terms</h4>
                <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.</p>
            `
        },
        'returns-exchanges': {
            title_key: 'returns-exchanges',
            content_key: 'returns-exchanges-content',
            content: `
                <p>At EvolveMart, we want you to be completely satisfied with your purchase. If you're not, here's how our returns and exchanges policy works:</p>
                <h4>1. Eligibility for Returns</h4>
                <p>Items must be returned within 14 days of delivery. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging with all tags attached.</p>
                <h4>2. Non-Returnable Items</h4>
                <p>Certain types of items cannot be returned, such as personalized products, perishable goods, and digital downloads. Please check the product description for specific return eligibility.</p>
                <h4>3. Initiating a Return</p>
                <p>To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with instructions on how and where to send your package.</p>
                <h4>4. Refunds</h4>
                <p>Once your return is received and inspected, we will send you an email notification. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days (e.g., 7-10 business days).</p>
                <h4>5. Exchanges</h4>
                <p>We only replace items if they are defective or damaged. If you need to exchange an item for the same item, contact us and we will guide you through the process.</p>
                <h4>6. Shipping Costs for Returns</h4>
                <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                <h4>7. Damaged or Incorrect Items</p>
                <p>If you received a damaged or incorrect item, please contact us immediately upon receipt. We will arrange for a replacement or refund at no additional cost to you.</p>
            `
        }
    };


    /*====================================================================
      3. TRANSLATIONS
      Object to store all translations in various languages.
      Currently English only.
    ====================================================================*/

    const translations = {
        'en': {
            'hero-title': 'Discover Your Favorite Items!',
            'hero-subtitle': 'Explore our latest collection for your modern lifestyle needs.',
            'shop-now-btn': 'Shop Now',
            'hero': 'Home',
            'products': 'Products',
            'flash-sale': 'Flash Sale',
            'featured-products': 'Best Sellers',
            'categories': 'Categories',
            'advantages': 'Advantages',
            'testimonials': 'Testimonials',
            'faq': 'FAQ',
            'contact': 'Contact',
            'order-tracking': 'Order Tracking',
            'all-products-title': 'All Products',
            'category-filter-label': 'Category:',
            'sort-by-label': 'Sort By:',
            'filter-all': 'All',
            'filter-pakaian': 'Apparel',
            'filter-aksesoris': 'Accessories',
            'filter-elektronik': 'Electronics',
            'filter-rumah-tangga': 'Home Goods',
            'filter-olahraga': 'Sports',
            'filter-buku': 'Books',
            'filter-otomotif': 'Automotive',
            'filter-dekorasi': 'Decor',
            'filter-mainan': 'Toys',
            'sort-default': 'Default',
            'sort-price-asc': 'Price: Low to High',
            'sort-price-desc': 'Price: High to Low',
            'sort-name-asc': 'Name: A-Z',
            'sort-name-desc': 'Name: Z-A',
            'load-more-btn': 'Load More',
            'load-all-products-btn': 'Load All {count} Products',
            'no-products-found': 'No products found.',
            'flash-sale-title': '🔥 Today\'s Flash Sale!',
            'time-left': 'Time Left:',
            'sale-ended': 'Sale Ended',
            'view-all-flash-sale-btn': 'View All Flash Sale',
            'flash-sale-ended-message': 'Flash Sale has ended!',
            'best-sellers-title': 'Best Sellers',
            'explore-categories-title': 'Explore Categories',
            'view-all-categories-btn': 'View All Categories',
            'why-choose-us-title': 'Why Choose EvolveMart?',
            'fast-delivery-title': 'Fast Delivery',
            'fast-delivery-desc': 'Get your items delivered lightning-fast.',
            'best-price-title': 'Best Price',
            'best-price-desc': 'Premium quality at competitive prices.',
            'quality-guaranteed-title': 'Quality Guaranteed',
            'quality-guaranteed-desc': 'Every product undergoes strict quality selection.',
            'customer-support-title': 'Customer Support',
            'customer-support-desc': 'Our team is ready to assist you 24/7.',
            'official-warranty-title': 'Official Warranty',
            'official-warranty-desc': 'All products come with a manufacturer\'s warranty.',
            'easy-returns-title': 'Easy Returns',
            'easy-returns-desc': 'Hassle-free return process within 14 days.',
            'attractive-promos-title': 'Attractive Promos',
            'attractive-promos-desc': 'Discounts and special offers every week.',
            'secure-payment-title': 'Secure Payment',
            'secure-payment-desc': 'Encrypted and trusted payment system.',
            'testimonials-title': 'What Our Customers Say?',
            'faq-title': 'Frequently Asked Questions',
            'how-to-order-q': 'How to order products?',
            'how-to-order-a': 'Select the product you want, add it to your cart, then follow the checkout steps.',
            'payment-methods-q': 'What payment methods are available?',
            'payment-methods-a': 'We accept payments via bank transfer, credit/debit cards (Visa, Mastercard), and digital wallets (OVO, GoPay, Dana).',
            'product-warranty-q': 'Is there a warranty for the products?',
            'product-warranty-a': 'Yes, all our products come with a warranty according to each manufacturer\'s policy. Details can be found on the product description page.',
            'delivery-time-q': 'How long does delivery take?',
            'delivery-time-a': 'Delivery time varies depending on location. Generally 2-5 business days for domestic shipping.',
            'newsletter-title': 'Get Exclusive Offers!',
            'newsletter-subtitle': 'Sign up for our newsletter and be the first to know about special promos and new products.',
            'email-placeholder-newsletter': 'Enter Your Email',
            'subscribe-btn': 'Subscribe',
            'contact-us-title': 'Contact Us',
            'contact-info-title': 'Contact Information',
            'send-message-title': 'Send Us a Message',
            'full-name-label': 'Full Name:',
            'email-label': 'Email:',
            'subject-label': 'Subject:',
            'message-label': 'Your Message:',
            'send-message-btn': 'Send Message',
            'footer-about-title': 'EvolveMart',
            'footer-about-desc': 'Your ultimate destination for high-quality products and an unforgettable shopping experience.',
            'footer-quick-links-title': 'Quick Links',
            'footer-support-title': 'Support',
            'shopping-help': 'Shopping Help',
            'how-to-order': 'How to Order',
            'shipping': 'Shipping',
            'terms-conditions': 'Terms & Conditions',
            'returns-exchanges': 'Returns & Exchanges',
            'footer-contact-title': 'Contact Us',
            'footer-newsletter-desc': 'Get the latest updates and special offers!',
            'footer-email-placeholder': 'Your Email',
            'copyright': '2023 EvolveMart. All Rights Reserved.',
            'search-modal-title': 'Search Products',
            'search-input-placeholder': 'Type product name...',
            'search-results-placeholder': 'Search results will appear here.',
            'search-min-chars': 'Type at least 2 characters to search.',
            'no-search-results': 'No results found.',
            'results-found': '{count} results found.',
            'cart-modal-title': 'Shopping Cart',
            'items-count': '({count} Items)',
            'empty-cart-message': 'Your cart is empty.',
            'subtotal': 'Subtotal:',
            'total': 'Total:',
            'view-cart-btn': 'View Cart',
            'checkout-btn': 'Proceed to Checkout',
            'wishlist-modal-title': 'Your Wishlist',
            'empty-wishlist-message': 'Your wishlist is empty.',
            'product-detail-modal-title': 'Product Details',
            'product-not-found': 'Product not found.',
            'category-label': 'Category:',
            'stock-label': 'Stock:',
            'in-stock': 'In Stock',
            'out-of-stock': 'Out of Stock',
            'add-to-cart-btn': 'Add to Cart',
            'add-to-wishlist-btn': 'Add to Wishlist',
            'stock-limit-error': 'Only {stock} of {productName} left in stock.',
            'item-added-to-cart': '{productName} successfully added to cart!',
            'product-not-found-error': 'Product not found.',
            'out-of-stock-error': '{productName} is currently out of stock.',
            'product-removed-from-cart': 'Product removed from cart.',
            'item-removed-from-wishlist': '{productName} removed from wishlist.',
            'item-added-to-wishlist': '{productName} added to wishlist!',
            'item-removed-from-wishlist-general': 'Product removed from wishlist.',
            'move-to-cart-btn': 'Move to Cart',
            'stock-available': 'In Stock',
            'checkout-page-title': 'Order Checkout',
            'back-to-cart-btn': 'Back to Cart',
            'shipping-info-title': 'Shipping Information',
            'full-name-label-shipping': 'Full Name:',
            'address-label': 'Address:',
            'city-label': 'City:',
            'postal-code-label': 'Postal Code:',
            'phone-number-label': 'Phone Number:',
            'continue-to-payment-btn': 'Continue to Payment',
            'order-summary-title': 'Order Summary',
            'item-subtotal': 'Items Subtotal:',
            'shipping-cost': 'Shipping Cost:',
            'total-payment': 'Total Payment:',
            'payment-methods-title': 'Payment Methods',
            'bank-transfer': 'Bank Transfer',
            'credit-card': 'Credit/Debit Card',
            'e-wallet': 'E-Wallet',
            'confirm-order-btn': 'Confirm Order',
            'empty-cart-checkout-error': 'Your cart is empty. Please add products first!',
            'shipping-info-saved': 'Shipping information saved successfully.',
            'fill-all-fields-error': 'Please fill in all required fields correctly.',
            'order-processing': 'Your order is being processed with {method} method.',
            'order-success': 'Order placed successfully! Thank you for your purchase.',
            'select-payment-method-error': 'Please select a payment method.',
            'newsletter-success': 'Thank you for subscribing to our newsletter!',
            'newsletter-error': 'Please enter a valid email.',
            'contact-form-success': 'Your message has been sent successfully! We will contact you shortly.',
            'contact-form-error': 'Please fill in all required fields correctly.',
            'profile': 'User Profile',
            'profile-placeholder': 'Welcome to your profile. Here you can manage your account and view your order history. For full functionality, you will need an account.',
            'login-register-btn': 'Login / Register',
            'my-orders-btn': 'My Orders',
            'edit-profile-info-btn': 'Edit Profile Info',
            'logout-btn': 'Logout',
            'invalid-email-format': 'Invalid email format.',
            'invalid-phone-format': 'Invalid phone number format.',
            'invalid-postal-code-format': 'Postal code must be 5 digits.',
            'sale-end-text': 'Sale Ended',
            'filter-by-category': 'Filter by category',
            'sort-products': 'Sort products',
            'product-detail-modal-quantity-decrease': 'Decrease quantity',
            'product-detail-modal-quantity-increase': 'Increase quantity',
            'product-detail-modal-quantity-input': 'Product quantity',
            'move-to-cart-button-label': 'Move {productName} to cart',
            'remove-from-wishlist-button-label': 'Remove {productName} from wishlist',
            'remove-from-cart-button-label': 'Remove {productName} from cart',
            'member-status': 'Member Status',
            'my-recent-orders': 'My Recent Orders',
            'order-id': 'Order ID',
            'order-date': 'Date',
            'order-total': 'Total',
            'order-status': 'Status',
            'no-recent-orders': 'No recent orders.',
            'login-btn': 'Login',
            'password-label': 'Password:',
            'no-account-yet': 'Don\'t have an account yet?',
            'register-now': 'Register Now',
            'registration-feature-info': 'Registration functionality will be developed in the backend. Please use user@example.com / password for front-end demo login.',
            'login-success': 'Login successful! Welcome, {userName}.',
            'invalid-credentials': 'Invalid email or password.',
            'logout-success': 'Logout successful.',
            'order-history-info': 'Order history page requires a backend to view your order details. This is a frontend UI demo.',
            'edit-profile-info': 'Edit profile page requires a backend to update your information. This is a frontend UI demo.',
            'delivered-status': 'Delivered',
            'shipped-status': 'Shipped',
            'processing-status': 'Processing', // Added processing status
            'cancelled-status': 'Cancelled', // Added cancelled status
            'reviews': 'reviews',
            'time-unit-hour': 'h',
            'time-unit-minute': 'm',
            'time-unit-second': 's',
            'explore-category': 'Explore {categoryName} category',
            'displaying-category-products': 'Displaying products for category: {categoryName}',
            'displaying-all-flash-sale-products': 'Displaying all Flash Sale products...',
            'view-detail-product': 'View product details for {productName}',
            'min-length-error': 'Minimum {min} characters required.',
            'password-mismatch': 'Passwords do not match.',
            'rated-out-of-5': 'Rated {rating} out of 5 with {reviews} reviews',
            'recently-viewed-title': 'Recently Viewed Products',
            'empty-recently-viewed-message': 'No recently viewed products.',
            'toggle-dark-mode': 'Toggle dark mode',
            'dark-mode-enabled': 'Dark Mode Enabled',
            'light-mode-enabled': 'Light Mode Enabled',
            'feature-requires-backend': 'This feature requires a backend for full functionality. This is a frontend UI demo.',
            // New order tracking translations
            'order-tracking-title': 'Track Your Order',
            'order-tracking-desc': 'Enter your order number to see the shipping status.',
            'order-id-label': 'Order Number:',
            'order-id-placeholder': 'Example: ORD123456',
            'track-order-btn': 'Track Order',
            'order-found': 'Order Found',
            'order-not-found': 'Order not found. Please check your order number again.',
            'order-tracking-placeholder': 'Order status will appear here.',
            'status-shipped': 'Shipped',
            'status-delivered': 'Delivered',
            'status-processing': 'Processing',
            'status-cancelled': 'Cancelled', // Add this
            'tracking-details': 'Tracking Details',
            'tracking-order-id': 'Order ID',
            'tracking-order-date': 'Order Date',
            'tracking-order-total': 'Order Total',
            'tracking-order-status': 'Status',
            'tracking-shipping-address': 'Shipping Address',
            'tracking-items-ordered': 'Items Ordered',
            'tracking-qty': 'Qty',
            'tracking-price': 'Price',
            // Quick View Modal
            'quick-view-title': 'Quick View',
            'add-to-cart-quick-view': 'Add to Cart',
            'out-of-stock-quick-view': 'Out of Stock',
            'view-details-quick-view': 'View Details',
            'category-display': 'Category: {categoryName}',
            'stock-display': 'Stock: {stockStatus}{stockQty}',
            'product-rating-display': 'Rated {rating} out of 5 from {reviews} reviews',
            'quick-view-btn-label': 'Quick View for {productName}',
            // Info Page Modal Translations
            'info-page-modal-title': 'Information',
            'shopping-help-title': 'Shopping Help',
            'shopping-help-content': `
                <p>Welcome to EvolveMart's Shopping Help section. We are here to guide you through your shopping journey.</p>
                <h4>How to Browse Products</h4>
                <p>You can browse products by using the search bar at the top of the page, filtering by category, or exploring our 'Flash Sale' and 'Best Sellers' sections. Use the sorting options to arrange products by price, name, or popularity.</p>
                <h4>Adding Items to Cart</h4>
                <p>Once you find a product you like, click the "Add to Cart" button. You can adjust the quantity directly in the product detail modal or in your shopping cart. If an item is out of stock, the button will be disabled.</p>
                <h4>Placing an Order</h4>
                <p>After adding all desired items to your cart, click on the cart icon and proceed to checkout. You will need to fill in your shipping information and select a payment method. We ensure a secure and seamless checkout experience.</p>
                <h4>Account Management</h4>
                <p>Creating an account allows you to track your orders, save your wishlist, and manage your profile. While a backend is needed for full account functionality, our frontend demo showcases the UI.</p>
                <h4>Need More Assistance?</h4>
                <p>If you have any further questions, please visit our FAQ section or contact our customer support team.</p>
            `,
            'how-to-order-content': `
                <p>Ordering at EvolveMart is simple and straightforward. Follow these steps to complete your purchase:</p>
                <h4>Step 1: Find Your Products</h4>
                <p>Use the search bar, category filters, or browse our curated collections like "Flash Sale" and "Best Sellers" to find the items you need.</p>
                <h4>Step 2: Add to Cart</h4>
                <p>On each product card or detail page, click the "Add to Cart" button. You can update quantities or remove items directly from the cart modal.</p>
                <h4>Step 3: Proceed to Checkout</h4>
                <p>Click the shopping cart icon in the header, then select "Proceed to Checkout." If your cart is empty, this option will not be available.</p>
                <h4>Step 4: Enter Shipping Information</h4>
                <p>Fill in your full name, address, city, postal code, and phone number accurately. This information is crucial for timely delivery.</p>
                <h4>Step 5: Select Payment Method</h4>
                <p>Choose your preferred payment method from the available options: Bank Transfer, Credit/Debit Card, or E-Wallet. Your payment information is securely processed.</p>
                <h4>Step 6: Confirm Order</h4>
                <p>Review your order summary, including item subtotal, shipping cost, and total payment. Click "Confirm Order" to finalize your purchase. You will receive a confirmation message.</p>
                <h4>Order Tracking</h4>
                <p>After placing your order, you can track its status using your order number on our <a href="#order-tracking" onclick="closeAllModals()">Order Tracking page</a>.</p>
            `,
            'shipping-content': `
                <p>EvolveMart strives to provide fast and reliable shipping for all our customers.</p>
                <h4>Shipping Zones and Delivery Times</h4>
                <ul>
                    <li><strong>Domestic Shipping:</strong> Generally takes 2-5 business days.</li>
                    <li><strong>International Shipping:</strong> Currently not available in this demo.</li>
                </ul>
                <p>Delivery times may vary based on your location and unforeseen circumstances such as weather conditions or public holidays. We will provide an estimated delivery window at checkout.</p>
                <h4>Shipping Costs</h4>
                <p>A flat shipping fee of $5.00 applies to all orders in this demo. Actual shipping costs may vary based on product weight, dimensions, and destination in a live environment.</p>
                <h4>Order Processing</h4>
                <p>Orders are typically processed within 1-2 business days after payment confirmation. You will receive a shipping confirmation email with tracking details once your order has been dispatched.</p>
                <h4>Tracking Your Order</h4>
                <p>You can track the status of your order by entering your order number on our <a href="#order-tracking" onclick="closeAllModals()">Order Tracking page</a>.</p>
                <h4>Delivery Issues</h4>
                <p>If you experience any issues with your delivery or do not receive your order within the estimated timeframe, please contact our customer support immediately. We are here to assist you.</p>
            `,
            'terms-conditions-content': `
                <p>Welcome to EvolveMart's Terms & Conditions. By accessing or using our website, you agree to comply with and be bound by these terms. Please read them carefully.</p>
                <h4>1. Acceptance of Terms</h4>
                <p>By using the EvolveMart platform, you signify your acceptance of these Terms and Conditions. If you do not agree, please do not use our services.</p>
                <h4>2. Privacy Policy</h4>
                <p>Your use of our website is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.</p>
                <h4>3. Product Information</h4>
                <p>We strive to ensure that all product descriptions, images, and prices are accurate. However, errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
                <h4>4. Order Acceptance and Pricing</h4>
                <p>All orders placed through the website are subject to EvolveMart's acceptance. Prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason.</p>
                <h4>5. Intellectual Property</h4>
                <p>All content on this site, including text, graphics, logos, images, and software, is the property of EvolveMart or its content suppliers and protected by international copyright laws.</p>
                <h4>6. Limitation of Liability</h4>
                <p>EvolveMart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your access to or use of the website.</p>
                <h4>7. Governing Law</h4>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where EvolveMart operates, without regard to its conflict of law principles.</p>
                <h4>8. Changes to Terms</h4>
                <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.</p>
            `,
            'returns-exchanges-content': `
                <p>At EvolveMart, we want you to be completely satisfied with your purchase. If you're not, here's how our returns and exchanges policy works:</p>
                <h4>1. Eligibility for Returns</h4>
                <p>Items must be returned within 14 days of delivery. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging with all tags attached.</p>
                <h4>2. Non-Returnable Items</h4>
                <p>Certain types of items cannot be returned, such as personalized products, perishable goods, and digital downloads. Please check the product description for specific return eligibility.</p>
                <h4>3. Initiating a Return</p>
                <p>To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with instructions on how and where to send your package.</p>
                <h4>4. Refunds</h4>
                <p>Once your return is received and inspected, we will send you an email notification. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days (e.g., 7-10 business days).</p>
                <h4>5. Exchanges</h4>
                <p>We only replace items if they are defective or damaged. If you need to exchange an item for the same item, contact us and we will guide you through the process.</p>
                <h4>6. Shipping Costs for Returns</h4>
                <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                <h4>7. Damaged or Incorrect Items</p>
                <p>If you received a damaged or incorrect item, please contact us immediately upon receipt. We will arrange for a replacement or refund at no additional cost to you.</p>
            `,
            // NEW: Profile related translations
            'your-addresses': 'Your Addresses',
            'no-addresses-yet': 'No saved addresses yet.',
            'add-new-address': 'Add New Address',
            'your-payment-methods': 'Your Payment Methods',
            'no-payment-methods-yet': 'No saved payment methods yet.',
            'add-new-payment': 'Add New Payment Method',
            'order-details-title': 'Order Details',
            'order-summary-details': 'Order Summary',
            'customer-info': 'Customer Information',
            'order-items': 'Order Items',
            'item-name': 'Item',
            'item-qty': 'Qty',
            'item-price': 'Price',
            'edit-profile-title': 'Edit Profile',
            'register-title': 'Register New Account',
            'full-name': 'Full Name',
            'confirm-password': 'Confirm Password',
            'register-success': 'Registration successful! Please log in.',
            'register-error': 'Registration failed. Please try again.',
            'passwords-do-not-match': 'Passwords do not match.',
            'password-too-short': 'Password must be at least 6 characters.',
            'member-since': 'Member Since',
            'primary-address': 'Primary Address',
            'primary-payment': 'Primary Payment',
            'save-changes-btn': 'Save Changes', // NEW
            'profile-updated-success': 'Profile updated successfully!', // NEW
            'select-rating': 'Please select a star rating.',
            'rating-submitted': 'Your rating of {rating} for {productName} has been submitted!',
            'rate-product-title': 'Rate This Product', // NEW
            'your-rating': 'Your Rating:', // NEW
        }
    };


    /*====================================================================
      4. HELPER FUNCTIONS
      Small functions used repeatedly in various places.
    ====================================================================*/

    /**
     * Formats a number into a currency string based on current language and currency settings.
     * Fixed to USD for demo purposes.
     * @param {number} amount - The number to format.
     * @returns {string} The formatted currency string.
     */
    function formatCurrency(amount) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.warn("Invalid amount for formatting:", amount);
            amount = 0;
        }

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    }

    /**
     * Retrieves a translation string for a given key, with optional replacements.
     * If the key doesn't exist in translations, it will try to find a content string.
     * @param {string} key - The key for the translation or content.
     * @param {Object} [replacements={}] - An object of placeholders and their values.
     * @returns {string} The translated string or content.
     */
    function getTranslation(key, replacements = {}) {
        let text = translations[currentLanguage][key] || dummyInfoPages[key]?.title_key || key; // Prioritize explicit translation, then dummyInfo title_key
        // If it's a content key for info pages, use that
        if (key.endsWith('-content') && dummyInfoPages[key.replace('-content', '')]) {
            text = dummyInfoPages[key.replace('-content', '')].content;
        }

        for (const [placeholder, value] of Object.entries(replacements)) {
            text = text.replace(`{${placeholder}}`, value);
        }
        return text;
    }

    /**
     * Applies translations to all elements with a `data-key` attribute.
     * Also updates aria-labels and content for dynamic elements.
     */
    function applyTranslations() {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            let text = translations[currentLanguage][key] || key; // Fallback to key if no translation

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = text;
                } else if (element.ariaLabel) {
                    element.ariaLabel = text;
                }
            } else if (element.tagName === 'OPTION') {
                 if (key.startsWith('filter-') || key.startsWith('sort-') || key.startsWith('other-') || key.startsWith('jakarta') || key.startsWith('jawabarat') || key.startsWith('jawatengah') || key.startsWith('jawatimur')) { // Added specific province keys
                    element.textContent = text;
                }
            } else {
                element.textContent = text;
            }
        });

        // Update aria-label for dynamic buttons/elements
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const product = products.find(p => p.id === productId);
            if (product) {
                btn.setAttribute('aria-label', getTranslation(btn.disabled ? 'out-of-stock-error' : 'add-to-cart-btn', { productName: product.name }));
                btn.textContent = getTranslation(btn.disabled ? 'out-of-stock' : 'add-to-cart-btn');
            }
        });
        document.querySelectorAll('.add-to-wishlist-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const product = products.find(p => p.id === productId);
            if (product) {
                btn.setAttribute('aria-label', getTranslation('add-to-wishlist-btn', { productName: product.name }));
            }
        });
        document.querySelectorAll('.remove-from-cart-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const item = cart.find(i => i.id === productId);
            if (item) {
                btn.setAttribute('aria-label', getTranslation('remove-from-cart-button-label', { productName: item.name }));
            }
        });
        document.querySelectorAll('.remove-from-wishlist-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const item = wishlist.find(i => i.id === productId);
            if (item) {
                btn.setAttribute('aria-label', getTranslation('remove-from-wishlist-button-label', { productName: item.name }));
            }
        });
        document.querySelectorAll('.move-to-cart-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const item = wishlist.find(i => i.id === productId);
            if (item) {
                btn.setAttribute('aria-label', getTranslation('move-to-cart-button-label', { productName: item.name }));
            }
        });
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            const productId = btn.dataset.id;
            const product = products.find(p => p.id === productId);
            if (product) {
                btn.setAttribute('aria-label', getTranslation('quick-view-btn-label', { productName: product.name }));
            }
        });

        // Update support links in footer and sidebar
        document.querySelectorAll('.footer-support ul li a[data-info-page], .mobile-sidebar .sidebar-nav-links a[data-info-page]').forEach(link => {
            const key = link.dataset.key;
            if (translations[currentLanguage][key]) {
                link.textContent = getTranslation(key);
                link.setAttribute('aria-label', getTranslation(link.id)); // Using ID for aria-label, if available
            }
        });


        // Update dynamic text with placeholders
        if (cartModal) {
            const cartTotalItemsSpan = cartModal.querySelector('.cart-total-items');
            if (cartTotalItemsSpan) cartTotalItemsSpan.textContent = getTranslation('items-count', { count: cart.length });
        }
        if (wishlistModal) {
            const wishlistTotalItemsSpan = wishlistModal.querySelector('.wishlist-total-items');
            if (wishlistTotalItemsSpan) wishlistTotalItemsSpan.textContent = getTranslation('items-count', { count: wishlist.length });
        }
        if (countdownTimer && !countdownTimer.textContent.includes(getTranslation('sale-ended'))) {
             startCountdown();
        }
        if (flashSaleListContainer && flashSaleListContainer.innerHTML.includes('flash-sale-ended-message-key')) {
            flashSaleListContainer.innerHTML = `<p style="text-align: center; color: var(--flash-sale-text-color);" data-key="flash-sale-ended-message-key">${getTranslation('flash-sale-ended-message')}</p>`;
        }

        if (loadMoreProductsBtn && loadMoreProductsBtn.style.display !== 'none') {
            const filteredCount = products.filter(product => {
                const matchesCategory = categoryFilter.value === 'all' || product.category === categoryFilter.value;
                const matchesSearch = searchInput.value === '' || product.name.toLowerCase().includes(searchInput.value.toLowerCase()) || product.description.toLowerCase().includes(searchInput.value.toLowerCase());
                return matchesCategory && matchesSearch;
            }).length;
            loadMoreProductsBtn.textContent = getTranslation('load-all-products-btn', { count: filteredCount });
        }

        if (searchModal.classList.contains('active')) {
            const query = searchInput.value.trim();
            if (query.length < 2 && query.length > 0) {
                 searchResultsContainer.innerHTML = `<p>${getTranslation('search-min-chars')}</p>`;
            } else if (query.length === 0) {
                 searchResultsContainer.innerHTML = `<p>${getTranslation('search-results-placeholder')}</p>`;
            } else {
                 performSearch();
            }
        }
        if (productDetailModal.classList.contains('active')) {
             const currentProductId = productDetailModal.querySelector('#add-to-cart-pdm-btn')?.dataset.id;
             if (currentProductId) openProductDetailModal(currentProductId); // Re-render to update content translation
        }
        if (checkoutPage.classList.contains('active')) {
            showCheckoutPage();
        }
        if (profileModal.classList.contains('active')) {
            renderProfileContent(); // Re-render profile content to apply translations
        }
        // NEW: If Order Detail Modal is active, re-render its content
        if (orderDetailModal.classList.contains('active')) {
            const currentOrderId = orderDetailModal.dataset.orderId;
            if (currentOrderId) openOrderDetailModal(currentOrderId);
        }
        // NEW: If Edit Profile Modal is active, re-render its content
        if (editProfileModal.classList.contains('active')) {
            renderEditProfileForm();
        }
        // NEW: If Register Modal is active, re-render its content
        if (registerModal.classList.contains('active')) {
            renderRegisterForm();
        }


        const recentlyViewedSectionTitle = document.querySelector('.recently-viewed-section h2');
        if (recentlyViewedSectionTitle) {
            recentlyViewedSectionTitle.textContent = getTranslation('recently-viewed-title');
        }
        if (emptyRecentlyViewedMessage && recentlyViewed.length === 0) {
             emptyRecentlyViewedMessage.textContent = getTranslation('empty-recently-viewed-message');
        }

        const orderTrackingSectionTitle = document.querySelector('.order-tracking-section h2');
        if (orderTrackingSectionTitle) {
            orderTrackingSectionTitle.textContent = getTranslation('order-tracking-title');
        }
        const orderTrackingDesc = document.querySelector('.order-tracking-section p[data-key="order-tracking-desc"]');
        if (orderTrackingDesc) {
            orderTrackingDesc.textContent = getTranslation('order-tracking-desc');
        }
        const orderIdLabel = document.querySelector('label[for="order-id-input"]');
        if (orderIdLabel) {
            orderIdLabel.textContent = getTranslation('order-id-label');
        }
        const orderIdPlaceholder = document.getElementById('order-id-input');
        if (orderIdPlaceholder) {
            orderIdPlaceholder.placeholder = getTranslation('order-id-placeholder');
        }
        const trackOrderBtn = document.querySelector('.order-tracking-form button[type="submit"]');
        if (trackOrderBtn) {
            trackOrderBtn.textContent = getTranslation('track-order-btn');
        }

        if (orderTrackingResults && initialOrderTrackingPlaceholder && initialOrderTrackingPlaceholder.style.display !== 'none') {
            initialOrderTrackingPlaceholder.textContent = getTranslation('order-tracking-placeholder');
        }
        // If order tracking results are already rendered, re-render them to apply translations
        if (orderTrackingResults && orderTrackingResults.querySelector('.tracking-summary')) {
            const currentOrderId = orderTrackingResults.querySelector('.tracking-summary').dataset.orderId;
            if (currentOrderId) handleOrderTracking({ preventDefault: () => {}, target: orderTrackingForm }); // Re-trigger to update content
        }

        // NEW: Info Page Modal Title
        if (infoPageModal.classList.contains('active')) {
            const currentInfoPageKey = infoPageModalTitle.dataset.infoPageKey;
            if (currentInfoPageKey) {
                // Re-render content to apply new translations
                openInfoPageModal(currentInfoPageKey);
            }
        }
    }

    /**
     * Displays a toast notification to the user.
     * @param {string} message - The message to display.
     * @param {'success'|'error'|'info'} [type='success'] - The type of notification.
     */
    function showNotification(message, type = 'success') {
        while (notificationContainer.children.length >= MAX_NOTIFICATIONS) {
            notificationContainer.firstChild.remove();
        }

        const toast = document.createElement('div');
        toast.classList.add('notification-toast');
        toast.classList.add(type);
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        notificationContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, NOTIFICATION_DURATION);
    }

    /**
     * Shows a loading spinner on a button, disables it, and stores its original text.
     * @param {HTMLElement} buttonElement - The button element to modify.
     * @param {string} [loadingText=''] - Optional text to display alongside the spinner.
     */
    function showButtonLoading(buttonElement, loadingText = '') {
        buttonElement.classList.add('loading');
        buttonElement.setAttribute('disabled', 'true');
        buttonElement.dataset.originalText = buttonElement.textContent;
        buttonElement.innerHTML = `<span class="spinner"></span> ${loadingText}`;
        buttonElement.setAttribute('aria-busy', 'true');
    }

    /**
     * Hides the loading spinner on a button, re-enables it, and restores its original text.
     * @param {HTMLElement} buttonElement - The button element to restore.
     */
    function hideButtonLoading(buttonElement) {
        buttonElement.classList.remove('loading');
        buttonElement.removeAttribute('disabled');
        buttonElement.textContent = buttonElement.dataset.originalText || '';
        delete buttonElement.dataset.originalText;
        buttonElement.removeAttribute('aria-busy');
    }

    /**
     * Closes all active modal dialogs and the overlay.
     * Restores focus to the element that opened the last modal for accessibility.
     */
    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('tabindex');
        });
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
        checkoutPage.classList.remove('active');
        checkoutPage.setAttribute('aria-hidden', 'true'); // Ensure checkout page is also closed

        // Navigation dropdowns were removed from HTML, so no need to close them here.

        if (lastFocusedElement && document.body.contains(lastFocusedElement)) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        } else {
            document.body.focus();
        }

        if (isProductModalOpen) {
            if (history.state && history.state.previousPath) {
                history.replaceState({}, document.title, history.state.previousPath);
            } else {
                history.replaceState({}, document.title, window.location.pathname.split('/product/')[0] || '/');
            }
            document.querySelectorAll('script[id^="product-ld-json-"]').forEach(s => s.remove());
            isProductModalOpen = false;
        }
        // Clear info page modal content
        infoPageContent.innerHTML = `<div class="loading-spinner" role="status" aria-label="Loading information..."></div>`;
        infoPageModalTitle.textContent = getTranslation('info-page-modal-title');
        infoPageModalTitle.removeAttribute('data-info-page-key');

        // NEW: Clear order detail modal content
        orderDetailContent.innerHTML = '';
        orderDetailLoader.style.display = 'block';
        orderDetailContent.style.display = 'none';
        orderDetailModal.removeAttribute('data-order-id');

        // NEW: Clear edit profile modal content
        editProfileFormArea.innerHTML = `<div class="profile-loading-skeleton loading-spinner" role="status" aria-label="Loading Edit Profile Form"></div>`;

        // NEW: Clear register modal content
        registerFormArea.innerHTML = `<div class="profile-loading-skeleton loading-spinner" role="status" aria-label="Loading Registration Form"></div>`;
    }

    /**
     * Opens a specific modal dialog.
     * Stores the currently focused element for accessibility.
     * @param {HTMLElement} modalElement - The modal element to open.
     */
    function openModal(modalElement) {
        lastFocusedElement = document.activeElement;
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('tabindex');
        });
        checkoutPage.classList.remove('active');
        checkoutPage.setAttribute('aria-hidden', 'true');

        modalElement.classList.add('active');
        modalElement.setAttribute('aria-hidden', 'false');
        modalElement.setAttribute('tabindex', '-1');
        overlay.classList.add('active');
        body.classList.add('no-scroll');

        const closeBtn = modalElement.querySelector('.close-modal-btn');
        if (closeBtn) {
            closeBtn.focus();
        } else {
            modalElement.focus();
        }
    }

    /**
     * Creates and returns a product card HTML element.
     * Includes dummy rating and review count.
     * @param {Object} product - The product data object.
     * @param {boolean} [isFlashSale=false] - True if this card is for a flash sale product.
     * @returns {HTMLElement} The created product card element.
     */
    function createProductCard(product, isFlashSale = false) {
        if (!product || !product.id) {
            console.error("Attempted to create product card for an invalid or undefined product.", product);
            return document.createElement('div');
        }

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        if (isFlashSale) {
            productCard.classList.add('flash-sale-card');
        }
        productCard.dataset.productId = product.id;

        const isInWishlist = wishlist.some(item => item.id === product.id);
        const addToCartDisabled = product.stock === 0 ? 'disabled' : '';
        const addToCartText = product.stock === 0 ? getTranslation('out-of-stock') : getTranslation('add-to-cart-btn');

        // NEW: Integrate simulated product rating
        // Fetch existing rating or generate random for new products
        const productRatingData = productRatings[product.id] || { rating: (Math.random() * (5 - 3) + 3).toFixed(1), reviews: Math.floor(Math.random() * 100) + 1 };
        const ratingValue = parseFloat(productRatingData.rating);
        const reviewCount = productRatingData.reviews;

        let ratingHtml = `
            <div class="product-rating" aria-label="${getTranslation('rated-out-of-5', { rating: ratingValue, reviews: reviewCount })}">
                ${'<i class="fas fa-star" aria-hidden="true"></i>'.repeat(Math.floor(ratingValue))}
                ${ratingValue % 1 >= 0.5 ? '<i class="fas fa-star-half-alt" aria-hidden="true"></i>' : ''}
                <span aria-hidden="true">(${reviewCount})</span>
            </div>
        `;

        let priceHtml = `<p class="current-price">${formatCurrency(product.price || 0)}</p>`;
        if (isFlashSale && product.oldPrice) {
            priceHtml = `
                <p class="old-price">${formatCurrency(product.oldPrice)}</p>
                <p class="current-price flash-sale-price">${formatCurrency(product.price || 0)}</p>
            `;
        }

        productCard.innerHTML = `
            <a href="#product-detail-${product.id}" class="product-card-image" data-action="view-detail" aria-label="${getTranslation('view-detail-product', { productName: product.name || 'Unknown Product' })}" role="link">
                <picture>
                    <img src="${product.image || 'assets/images/placeholder-product-default.jpg'}"
                         alt="${product.name || 'Unknown Product'}"
                         loading="lazy"
                         onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';"
                         width="400" height="400">
                </picture>
            </a>
            <div class="product-card-content">
                <h3>${product.name || 'Unknown Product'}</h3>
                ${ratingHtml}
                <div class="product-prices">${priceHtml}</div>
                <div class="product-card-actions">
                    <button class="btn primary-btn add-to-cart-btn" ${addToCartDisabled} data-id="${product.id}" aria-label="${getTranslation(addToCartDisabled ? 'out-of-stock-error' : 'add-to-cart-btn', { productName: product.name || 'Unknown Product' })}">${addToCartText}</button>
                    <button class="btn add-to-wishlist-btn ${isInWishlist ? 'added-to-wishlist' : ''}" data-id="${product.id}" aria-label="${getTranslation('add-to-wishlist-btn', { productName: product.name || 'Unknown Product' })}">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </button>
                    <button class="btn secondary-btn quick-view-btn" data-id="${product.id}" aria-label="${getTranslation('quick-view-btn-label', { productName: product.name || 'Unknown Product' })}">
                        <i class="fas fa-eye" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;

        productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.currentTarget.dataset.id;
            addToCart(productId);
        });

        productCard.querySelector('.add-to-wishlist-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.currentTarget.dataset.id;
            toggleWishlist(productId);
        });

        productCard.querySelector('.quick-view-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.currentTarget.dataset.id;
            openProductQuickViewModal(productId);
        });

        productCard.querySelectorAll('[data-action="view-detail"]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                openProductDetailModal(product.id);
            });
            element.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProductDetailModal(product.id);
                }
            });
        });
        return productCard;
    }

    /**
     * Displays loading skeleton cards in a container.
     * @param {HTMLElement} container - The container to display skeletons in.
     * @param {number} count - The number of skeletons to display.
     * @param {'card'|'category'} [type='card'] - The type of skeleton to display.
     */
    function showSkeletons(container, count, type = 'card') {
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement('div');
            skeleton.classList.add(`loading-skeleton-${type}`);
            container.appendChild(skeleton);
        }
    }

    /**
     * Renders a list of product cards into a specified container.
     * Clears previous content and displays a "no products found" message if array is empty.
     * @param {HTMLElement} container - The container to render products into.
     * @param {Array<Object>} productArray - An array of product data objects.
     * @param {boolean} [isFlashSale=false] - True if products are for flash sale (applies special styling).
     */
    function renderProductsToContainer(container, productArray, isFlashSale = false) {
        container.innerHTML = '';
        if (productArray.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: var(--light-text-color);">${getTranslation('no-products-found')}</p>`;
            return;
        }
        productArray.forEach(product => {
            container.appendChild(createProductCard(product, isFlashSale));
        });
    }

    /**
     * Validates a single input element and displays/removes error messages.
     * @param {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} inputElement - The input element to validate.
     * @returns {boolean} True if the input is valid, false otherwise.
     */
    function validateInput(inputElement) {
        let isValid = true;
        const formGroup = inputElement.closest('.form-group');
        let errorMessageSpan = formGroup ? formGroup.querySelector('.error-message') : null;
        let passwordMismatchError = inputElement.id === 'confirm-password' ? document.querySelector('#register-form .password-mismatch-error') : null;


        inputElement.classList.remove('is-invalid', 'is-valid');
        inputElement.removeAttribute('aria-invalid');
        if (errorMessageSpan) {
            errorMessageSpan.remove();
            errorMessageSpan = null;
        }
        if (passwordMismatchError) {
             passwordMismatchError.style.display = 'none'; // Always hide on re-validation
        }


        if (inputElement.hasAttribute('required') && !inputElement.value.trim()) {
            isValid = false;
            errorMessageSpan = document.createElement('span');
            errorMessageSpan.classList.add('error-message');
            errorMessageSpan.textContent = getTranslation('fill-all-fields-error');
        }
        else if (inputElement.type === 'email' && inputElement.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputElement.value.trim())) {
            isValid = false;
            errorMessageSpan = document.createElement('span');
            errorMessageSpan.classList.add('error-message');
            errorMessageSpan.textContent = getTranslation('invalid-email-format');
        }
        else if (inputElement.type === 'tel' && inputElement.value.trim() !== '' && !/^\+?[0-9\s-()]{7,20}$/.test(inputElement.value.trim())) {
            isValid = false;
            errorMessageSpan = document.createElement('span');
            errorMessageSpan.classList.add('error-message');
            errorMessageSpan.textContent = getTranslation('invalid-phone-format');
        }
        else if (inputElement.id === 'postalCode' && inputElement.value.trim() !== '' && !/^[0-9]{5}$/.test(inputElement.value.trim())) {
            isValid = false;
            errorMessageSpan = document.createElement('span');
            errorMessageSpan.classList.add('error-message');
            errorMessageSpan.textContent = getTranslation('invalid-postal-code-format');
        }
        else if (inputElement.hasAttribute('minlength') && inputElement.value.length > 0 && inputElement.value.length < parseInt(inputElement.getAttribute('minlength'))) {
             isValid = false;
             errorMessageSpan = document.createElement('span');
             errorMessageSpan.classList.add('error-message');
             errorMessageSpan.textContent = getTranslation('min-length-error', { min: inputElement.getAttribute('minlength') });
        }
        else if (inputElement.hasAttribute('pattern') && inputElement.value.trim() !== '' && !new RegExp(inputElement.getAttribute('pattern')).test(inputElement.value.trim())) {
            isValid = false;
            errorMessageSpan = document.createElement('span');
            errorMessageSpan.classList.add('error-message');
            // Prioritize custom title if available, otherwise generic error
            errorMessageSpan.textContent = inputElement.title || getTranslation('fill-all-fields-error');
        }

        if (errorMessageSpan) {
            inputElement.classList.add('is-invalid');
            inputElement.setAttribute('aria-invalid', 'true');
            if (formGroup) formGroup.appendChild(errorMessageSpan);
        } else {
            inputElement.classList.add('is-valid');
            inputElement.removeAttribute('aria-invalid');
        }
        return isValid;
    }

    /**
     * Validates all required inputs within a form when submitted.
     * @param {HTMLFormElement} form - The form element to validate.
     * @returns {boolean} True if all inputs are valid, false otherwise.
     */
    function validateFormOnSubmit(form) {
        let allInputsValid = true;
        // Select all required inputs, textareas, and selects within the given form
        const inputsToValidate = form.querySelectorAll('input[required], textarea[required], select[required]');

        inputsToValidate.forEach(input => {
            const inputIsValid = validateInput(input);
            if (!inputIsValid) {
                allInputsValid = false;
            }
        });
        return allInputsValid;
    }

    /*====================================================================
      5. CORE E-COMMERCE LOGIC
      Main functions related to e-commerce functionality.
    ====================================================================*/

    // --- Product Loading Functions ---
    async function loadAllProducts(loadAll = false, category = categoryFilter.value, sortBy = sortByFilter.value, search = searchInput.value, itemsPerPage = productsPerPage) {
        let filteredProducts = products.filter(product => {
            const matchesCategory = category === 'all' || product.category === category;
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (sortBy === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name-asc') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        if (!loadAll) {
            showSkeletons(productListContainer, itemsPerPage);
            currentPage = 1; // Reset to first page for new filters
        }

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));

        if (loadAll) {
            renderProductsToContainer(productListContainer, filteredProducts);
            loadMoreProductsBtn.style.display = 'none';
        } else {
            const productsToDisplay = filteredProducts.slice(0, itemsPerPage);
            renderProductsToContainer(productListContainer, productsToDisplay);

            if (itemsPerPage < filteredProducts.length) {
                loadMoreProductsBtn.style.display = 'block';
                loadMoreProductsBtn.textContent = getTranslation('load-all-products-btn', { count: filteredProducts.length });
            } else {
                loadMoreProductsBtn.style.display = 'none';
            }
        }
    }

    async function loadFeaturedProducts() {
        showSkeletons(featuredCardsWrapper, 7);

        const featuredProducts = products.filter(p => p.isFeatured);
        const productsToDisplay = featuredProducts.slice(0, 7); // Show max 7 featured in carousel

        await new Promise(resolve => setTimeout(resolve, 300));

        renderProductsToContainer(featuredCardsWrapper, productsToDisplay);
        initFeaturedCarousel();
    }

    async function loadFlashSaleProducts() {
        showSkeletons(flashSaleListContainer, 3); // Show 3 skeletons for flash sale

        const flashSaleProducts = products.filter(p => p.isFlashSale);
        const productsToDisplay = flashSaleProducts.slice(0, 3); // Show max 3 flash sale products

        await new Promise(resolve => setTimeout(resolve, 300));

        renderProductsToContainer(flashSaleListContainer, productsToDisplay, true);
    }

    async function loadCategories() {
        showSkeletons(categoryGridContainer, 6, 'category'); // Show 6 category skeletons

        const uniqueCategories = [...new Set(products.map(p => p.category))];
        const categoriesToDisplay = uniqueCategories.slice(0, 6); // Display max 6 categories

        const categoryIcons = {
            apparel: 'fas fa-tshirt',
            accessories: 'fas fa-gem',
            electronics: 'fas fa-laptop',
            'home-goods': 'fas fa-couch',
            sports: 'fas fa-dumbbell',
            books: 'fas fa-book',
            automotive: 'fas fa-car',
            decor: 'fas fa-paint-roller',
            toys: 'fas fa-robot',
            default: 'fas fa-box' // Default icon for unlisted categories
        };

        await new Promise(resolve => setTimeout(resolve, 300));

        categoryGridContainer.innerHTML = '';
        categoriesToDisplay.forEach(category => {
            // Format category name for display (e.g., "home-goods" -> "Home Goods")
            const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('category-card');
            categoryCard.setAttribute('role', 'button'); // Make it accessible as a button
            categoryCard.setAttribute('tabindex', '0'); // Make it focusable
            categoryCard.setAttribute('aria-label', `${getTranslation('explore-category', { categoryName: categoryName })}`);
            categoryCard.innerHTML = `
                <i class="${categoryIcons[category] || categoryIcons.default}" aria-hidden="true"></i>
                <h3>${categoryName}</h3>
            `;
            categoryCard.addEventListener('click', () => {
                filterAndDisplayCategoryProducts(category);
            });
            categoryCard.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    filterAndDisplayCategoryProducts(category);
                }
            });
            categoryGridContainer.appendChild(categoryCard);
        });
    }

    function filterAndDisplayCategoryProducts(category = 'all') {
        categoryFilter.value = category; // Set filter dropdown value
        loadAllProducts(false, category, sortByFilter.value, searchInput.value, productsPerCategoryPage);
        // Scroll to products section to show filtered results
        document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
        showNotification(getTranslation('displaying-category-products', { categoryName: category === 'all' ? getTranslation('filter-all') : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }), 'info');
    }

    // --- Cart Functions ---
    function addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found:", productId);
            showNotification(getTranslation('product-not-found-error'), "error");
            return;
        }

        if (product.stock === 0) {
            showNotification(getTranslation('out-of-stock-error', { productName: product.name }), 'error');
            return;
        }

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            if (existingItem.quantity + quantity > product.stock) {
                 showNotification(getTranslation('stock-limit-error', { productName: product.name, stock: product.stock }), 'error');
                 existingItem.quantity = product.stock; // Cap at max stock
            } else {
                existingItem.quantity += quantity;
                showNotification(getTranslation('item-added-to-cart', { productName: product.name }), 'success');
            }
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                stock: product.stock,
                quantity: quantity
            });
            showNotification(getTranslation('item-added-to-cart', { productName: product.name }), 'success');
        }
        saveCart();
        updateCartDisplay();
    }

    function removeFromCart(productId) {
        const productInCart = cart.find(item => item.id === productId);
        const productName = productInCart ? productInCart.name : getTranslation('product-not-found');

        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartDisplay();
        showNotification(getTranslation('product-removed-from-cart', { productName: productName }), 'error');
    }

    function updateCartQuantity(productId, newQuantity) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            const product = products.find(p => p.id === productId);
            if (!product) {
                console.error("Original product data missing for quantity update:", productId);
                removeFromCart(productId); // Remove if product data is somehow missing
                return;
            }

            if (newQuantity <= 0) {
                removeFromCart(productId);
                return;
            }
            if (newQuantity > product.stock) {
                showNotification(getTranslation('stock-limit-error', { productName: product.name, stock: product.stock }), 'error');
                cart[itemIndex].quantity = product.stock; // Cap at max stock
            } else {
                cart[itemIndex].quantity = newQuantity;
            }
            saveCart();
            updateCartDisplay();
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function calculateCartTotals() {
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0);
        });
        return { subtotal, total: subtotal };
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            emptyCartMessage.textContent = getTranslation('empty-cart-message');
            checkoutBtn.style.display = 'none';
            viewCartPageBtn.style.display = 'none';
        } else {
            emptyCartMessage.style.display = 'none';
            cart.forEach(item => {
                const itemName = item.name || getTranslation('product-not-found');
                const itemPrice = item.price || 0;
                const itemImage = item.image || 'assets/images/placeholder-product-default.jpg';
                const itemStock = item.stock || 0;
                const itemQuantity = item.quantity || 1;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="cart-item-img">
                        <picture>
                            <img src="${itemImage}" alt="${itemName}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="80" height="80">
                        </picture>
                    </div>
                    <div class="cart-item-details">
                        <h4>${itemName}</h4>
                        <p class="price">${formatCurrency(itemPrice)}</p>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity-btn" data-id="${item.id}" aria-label="${getTranslation('product-detail-modal-quantity-decrease')} ${itemName}">-</button>
                            <input type="number" value="${itemQuantity}" min="1" max="${itemStock}" data-id="${item.id}" class="quantity-input" aria-label="${getTranslation('product-detail-modal-quantity-input')} ${itemName}">
                            <button class="increase-quantity-btn" data-id="${item.id}" aria-label="${getTranslation('product-detail-modal-quantity-increase')} ${itemName}">+</button>
                        </div>
                    </div>
                    <span class="cart-item-total">${formatCurrency(itemPrice * itemQuantity)}</span>
                    <button class="remove-from-cart-btn" data-id="${item.id}" aria-label="${getTranslation('remove-from-cart-button-label', { productName: itemName })}"><i class="fas fa-trash" aria-hidden="true"></i></button>
                `;
                cartItemDiv.querySelector('.decrease-quantity-btn').addEventListener('click', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    const inputElement = e.currentTarget.nextElementSibling;
                    updateCartQuantity(productId, parseInt(inputElement.value) - 1);
                });
                cartItemDiv.querySelector('.increase-quantity-btn').addEventListener('click', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    const inputElement = e.currentTarget.previousElementSibling;
                    updateCartQuantity(productId, parseInt(inputElement.value) + 1);
                });
                cartItemDiv.querySelector('.quantity-input').addEventListener('change', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    updateCartQuantity(productId, parseInt(e.currentTarget.value));
                });
                cartItemDiv.querySelector('.remove-from-cart-btn').addEventListener('click', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    removeFromCart(productId);
                });

                cartItemsContainer.appendChild(cartItemDiv);
            });
            checkoutBtn.style.display = 'block';
            viewCartPageBtn.style.display = 'block';
        }

        const totals = calculateCartTotals();
        cartSubtotalSpan.textContent = getTranslation('subtotal') + ": " + formatCurrency(totals.subtotal);
        cartTotalSpan.textContent = getTranslation('total') + ": " + formatCurrency(totals.total);

        cartCountElements.forEach(el => el.textContent = cart.length);
    }

    // --- Wishlist Functions ---
    function toggleWishlist(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found for wishlist:", productId);
            showNotification(getTranslation('product-not-found-error'), "error");
            return;
        }

        const existingIndex = wishlist.findIndex(item => item.id === productId);

        if (existingIndex > -1) {
            wishlist.splice(existingIndex, 1);
            showNotification(getTranslation('item-removed-from-wishlist', { productName: product.name }), 'error');
        } else {
            wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                stock: product.stock
            });
            showNotification(getTranslation('item-added-to-wishlist', { productName: product.name }), 'success');
        }
        saveWishlist();
        updateWishlistDisplay(); // Pastikan ini dipanggil
        updateProductCardWishlistIcons(); // Pastikan ini dipanggil
    }

    function removeFromWishlist(productId) {
        const productInWishlist = wishlist.find(item => item.id === productId);
        const productName = productInWishlist ? productInWishlist.name : getTranslation('product-not-found');

        wishlist = wishlist.filter(item => item.id !== productId);
        saveWishlist();
        updateWishlistDisplay(); // Pastikan ini dipanggil
        showNotification(getTranslation('item-removed-from-wishlist', { productName: productName }), 'error');
        updateProductCardWishlistIcons(); // Pastikan ini dipanggil
    }

    function saveWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    function updateProductCardWishlistIcons() {
        document.querySelectorAll('.product-card .add-to-wishlist-btn').forEach(btn => {
            const productId = btn.dataset.id;
            if (wishlist.some(item => item.id === productId)) {
                btn.classList.add('added-to-wishlist');
            } else {
                btn.classList.remove('added-to-wishlist');
            }
        });
    }

    function updateWishlistDisplay() {
        wishlistItemsContainer.innerHTML = '';
        if (wishlist.length === 0) {
            emptyWishlistMessage.style.display = 'block';
            emptyWishlistMessage.textContent = getTranslation('empty-wishlist-message');
        } else {
            emptyWishlistMessage.style.display = 'none';
            // Filter wishlist to only include products that still exist in `products` array
            const filteredWishlist = wishlist.filter(wishlistItem =>
                products.some(product => product.id === wishlistItem.id)
            );

            // If some items were removed, update the stored wishlist
            if (filteredWishlist.length !== wishlist.length) {
                wishlist = filteredWishlist;
                saveWishlist();
            }

            wishlist.forEach(item => {
                const productData = products.find(p => p.id === item.id);
                // Ensure product data exists before rendering
                if (!productData) {
                    console.warn(`Product with ID ${item.id} found in wishlist but not in product data. Skipping.`);
                    return;
                }

                const itemName = productData.name || getTranslation('product-not-found');
                const itemPrice = productData.price || 0;
                const itemImage = productData.image || 'assets/images/placeholder-product-default.jpg';
                const itemStock = productData.stock || 0;

                const wishlistItemDiv = document.createElement('div');
                wishlistItemDiv.classList.add('wishlist-item');
                const isAvailable = itemStock > 0;
                const moveToCartDisabled = !isAvailable ? 'disabled' : '';
                const moveToCartText = isAvailable ? getTranslation('add-to-cart-btn') : getTranslation('out-of-stock');

                wishlistItemDiv.innerHTML = `
                    <div class="wishlist-item-img">
                        <picture>
                            <img src="${itemImage}" alt="${itemName}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="80" height="80">
                        </picture>
                    </div>
                    <div class="wishlist-item-details">
                        <h4>${itemName}</h4>
                        <p class="price">${formatCurrency(itemPrice)}</p>
                        <p class="stock-status ${isAvailable ? '' : 'out-of-stock'}">${isAvailable ? getTranslation('stock-available') : getTranslation('out-of-stock')}</p>
                    </div>
                    <button class="btn primary-btn move-to-cart-btn" data-id="${item.id}" ${moveToCartDisabled} aria-label="${getTranslation('move-to-cart-button-label', { productName: itemName })}">${moveToCartText}</button>
                    <button class="remove-from-wishlist-btn" data-id="${item.id}" aria-label="${getTranslation('remove-from-wishlist-button-label', { productName: itemName })}"><i class="fas fa-trash" aria-hidden="true"></i></button>
                `;
                wishlistItemDiv.querySelector('.move-to-cart-btn').addEventListener('click', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    addToCart(productId);
                    removeFromWishlist(productId);
                });
                wishlistItemDiv.querySelector('.remove-from-wishlist-btn').addEventListener('click', (e) => {
                    const productId = e.currentTarget.dataset.id;
                    removeFromWishlist(productId);
                });
                wishlistItemsContainer.appendChild(wishlistItemDiv);
            });
        }
        // Ini adalah baris kritis yang memastikan angka di ikon navbar terupdate.
        // Pastikan ini dipanggil dan elemennya benar-benar ada di HTML.
        wishlistCountElements.forEach(el => el.textContent = wishlist.length);
    }

    /**
     * Opens the product detail modal for a specific product.
     * Updates URL using history API and dynamically injects structured data for SEO.
     * @param {string} productId - The ID of the product to display.
     */
    async function openProductDetailModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found in openProductDetailModal:", productId);
            productDetailContent.innerHTML = `<p style="text-align: center; color: var(--error-color); padding: 20px;">${getTranslation('product-not-found')}</p>`;
            productDetailLoader.style.display = 'none';
            productDetailContent.classList.add('active');
            openModal(productDetailModal);
            return;
        }

        addRecentlyViewed(productId);

        isProductModalOpen = true;
        openModal(productDetailModal);
        productDetailLoader.style.display = 'block';
        productDetailContent.classList.remove('active');
        productDetailContent.innerHTML = '';

        // Simulating URL change for better SEO and deep linking potential (frontend only)
        const currentPath = window.location.pathname + window.location.search;
        history.pushState({ productId: product.id, modal: true, previousPath: currentPath }, product.name, `/product/${product.id}`);

        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading time

        const isInWishlist = wishlist.some(item => item.id === product.id);
        const addToCartDisabled = product.stock === 0 ? 'disabled' : '';
        const addToCartText = product.stock === 0 ? getTranslation('out-of-stock') : getTranslation('add-to-cart-btn');

        // NEW: Integrate simulated product rating for this product
        const productRatingData = productRatings[product.id] || { rating: (Math.random() * (5 - 3) + 3).toFixed(1), reviews: Math.floor(Math.random() * 100) + 1 };
        const ratingValue = parseFloat(productRatingData.rating);
        const reviewCount = productRatingData.reviews;
        const userRated = productRatings[product.id]?.userRating || 0; // Get user's previous rating if any

        // Structured data for SEO (Product Schema)
        const productStructuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "sku": product.id,
            "image": window.location.origin + '/' + product.image, // Absolute URL for image
            "offers": {
                "@type": "Offer",
                "url": window.location.href,
                "priceCurrency": currentCurrency,
                "price": parseFloat(product.price).toFixed(2),
                "itemCondition": "https://schema.org/NewCondition",
                "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                "seller": {
                    "@type": "Organization",
                    "name": "EvolveMart Frontend Template" // Your template name
                }
            },
            "brand": {
                "@type": "Brand",
                "name": "EvolveMart" // Your brand name
            },
            "category": product.category.charAt(0).toUpperCase() + product.category.slice(1),
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": ratingValue,
                "reviewCount": reviewCount
            }
        };
        // Remove any old product structured data
        document.querySelectorAll('script[id^="product-ld-json-"]').forEach(s => s.remove());
        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(productStructuredData);
        script.id = `product-ld-json-${product.id}`;
        document.head.appendChild(script);

        // Render detailed product information
        productDetailContent.innerHTML = `
            <div class="product-detail-image">
                <picture>
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="400" height="400">
                </picture>
            </div>
            <div class="product-detail-info">
                <h3 id="product-detail-modal-title">${product.name}</h3>
                <div class="product-rating">
                    ${'<i class="fas fa-star" aria-hidden="true"></i>'.repeat(Math.floor(ratingValue))}
                    ${ratingValue % 1 >= 0.5 ? '<i class="fas fa-star-half-alt" aria-hidden="true"></i>' : ''}
                    <span>(${reviewCount} ${getTranslation('reviews')})</span>
                </div>
                <p class="price">${formatCurrency(product.price)}</p>
                <p class="description">${product.description}</p>
                <p class="category">${getTranslation('category-label')} <span class="category-name">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></p>
                <p class="stock-status ${product.stock === 0 ? 'out-of-stock' : ''}">${getTranslation('stock-label')} ${product.stock > 0 ? getTranslation('in-stock') : getTranslation('out-of-stock')}${product.stock > 0 ? ': ' + product.stock : ''}</p>
                
                <div class="additional-details">
                    <h4>Product Specifications</h4>
                    <ul>
                        <li><strong>Material:</strong> ${product.category === 'apparel' ? 'High-quality fabric' : (product.category === 'electronics' ? 'Durable plastics and metal' : 'Premium materials')}</li>
                        <li><strong>Dimensions:</strong> Varies by product</li>
                        <li><strong>Weight:</strong> Approx. ${(Math.random() * 1 + 0.1).toFixed(2)} kg</li>
                        <li><strong>Warranty:</strong> ${product.stock > 0 ? '1 Year Official Warranty' : 'N/A'}</li>
                    </ul>
                    <h4>Customer Reviews</h4>
                    <p>Based on customer feedback, this product is highly rated for its durability and performance. Many customers praise its ease of use and stylish design. We continuously gather feedback to improve our offerings.</p>
                    <p>For more detailed reviews, please check our <a href="#" onclick="showNotification('Customer reviews page requires a backend!', 'info'); return false;">Reviews Page</a>.</p>
                </div>

                <div class="product-detail-actions">
                    <div class="quantity-control">
                        <button id="decrease-pdm-quantity" aria-label="${getTranslation('product-detail-modal-quantity-decrease')}">-</button>
                        <input type="number" id="pdm-quantity-input" value="1" min="1" max="${product.stock}" aria-label="${getTranslation('product-detail-modal-quantity-input')}">
                        <button id="increase-pdm-quantity" aria-label="${getTranslation('product-detail-modal-quantity-increase')}">+</button>
                    </div>
                    <button class="btn primary-btn" id="add-to-cart-pdm-btn" data-id="${product.id}" ${addToCartDisabled} aria-label="${getTranslation(addToCartDisabled ? 'out-of-stock-error' : 'add-to-cart-btn', { productName: product.name })}">
                        ${addToCartText}
                    </button>
                    <button class="btn add-to-wishlist-btn ${isInWishlist ? 'added-to-wishlist' : ''}" id="add-to-wishlist-pdm-btn" data-id="${product.id}" aria-label="${getTranslation('add-to-wishlist-btn', { productName: product.name })}">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </button>
                </div>
                
                <div class="product-rating-section">
                    <h4>${getTranslation('rate-product-title')}</h4>
                    <p>${getTranslation('your-rating')}</p>
                    <div class="star-rating" data-product-id="${product.id}" aria-label="Rate this product out of 5 stars">
                        <i class="far fa-star" data-rating="1" aria-label="1 star"></i>
                        <i class="far fa-star" data-rating="2" aria-label="2 stars"></i>
                        <i class="far fa-star" data-rating="3" aria-label="3 stars"></i>
                        <i class="far fa-star" data-rating="4" aria-label="4 stars"></i>
                        <i class="far fa-star" data-rating="5" aria-label="5 stars"></i>
                    </div>
                    <button class="btn primary-btn submit-rating-btn" data-product-id="${product.id}" aria-label="${getTranslation('submit-rating-btn')}" style="margin-top: 20px;">
                        ${getTranslation('submit-rating-btn')}
                    </button>
                </div>
            </div>
        `;
        productDetailLoader.style.display = 'none';
        productDetailContent.classList.add('active');

        const pdmQuantityInput = document.getElementById('pdm-quantity-input');
        const pdmDecreaseBtn = document.getElementById('decrease-pdm-quantity');
        const pdmIncreaseBtn = document.getElementById('increase-pdm-quantity');
        const pdmAddToCartBtn = document.getElementById('add-to-cart-pdm-btn');
        const pdmAddToWishlistBtn = document.getElementById('add-to-wishlist-pdm-btn');
        const starRatingContainer = productDetailContent.querySelector('.star-rating');
        const submitRatingBtn = productDetailContent.querySelector('.submit-rating-btn');
        let currentSelectedRating = userRated; // Initialize with user's saved rating

        // Function to update star display
        function updateStarDisplay(rating) {
            starRatingContainer.querySelectorAll('i').forEach(star => {
                const starValue = parseInt(star.dataset.rating);
                if (starValue <= rating) {
                    star.classList.remove('far');
                    star.classList.add('fas');
                } else {
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
            });
        }

        // Apply initial user rating if exists
        updateStarDisplay(userRated);

        // Add event listeners for star rating
        if (starRatingContainer) {
            starRatingContainer.addEventListener('mouseover', (e) => {
                if (e.target.tagName === 'I') {
                    const rating = parseInt(e.target.dataset.rating);
                    updateStarDisplay(rating);
                }
            });
            starRatingContainer.addEventListener('mouseout', () => {
                updateStarDisplay(currentSelectedRating); // Revert to selected rating
            });
            starRatingContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'I') {
                    currentSelectedRating = parseInt(e.target.dataset.rating);
                    updateStarDisplay(currentSelectedRating); // Set current selected rating
                }
            });
        }

        // Handle rating submission
        if (submitRatingBtn) {
            submitRatingBtn.addEventListener('click', () => {
                if (currentSelectedRating > 0) {
                    // Simulate saving the rating (not persistent across sessions unless localStorage is used for ALL ratings)
                    productRatings[product.id] = {
                        rating: currentSelectedRating.toFixed(1), // Store as fixed for consistency
                        reviews: (productRatings[product.id]?.reviews || Math.floor(Math.random() * 100) + 1) + 1, // Increment review count
                        userRating: currentSelectedRating // Store user's specific rating
                    };
                    localStorage.setItem('productRatings', JSON.stringify(productRatings)); // Save to local storage
                    showNotification(getTranslation('rating-submitted', { rating: currentSelectedRating, productName: product.name }), 'success');
                    // Re-render product card on main page to reflect new rating if applicable
                    loadAllProducts(false, categoryFilter.value, sortByFilter.value, searchInput.value, productsPerPage);
                    loadFeaturedProducts();
                    loadRecentlyViewed();
                    updateProductCardWishlistIcons(); // Re-apply styles
                } else {
                    showNotification(getTranslation('select-rating'), 'error');
                }
            });
        }


        if (pdmDecreaseBtn) {
            pdmDecreaseBtn.addEventListener('click', () => {
                let currentVal = parseInt(pdmQuantityInput.value);
                if (currentVal > 1) {
                    pdmQuantityInput.value = currentVal - 1;
                }
            });
        }

        if (pdmIncreaseBtn) {
            pdmIncreaseBtn.addEventListener('click', () => {
                let currentVal = parseInt(pdmQuantityInput.value);
                if (currentVal < product.stock) {
                    pdmQuantityInput.value = currentVal + 1;
                } else {
                    showNotification(getTranslation('stock-limit-error', { productName: product.name, stock: product.stock }), 'error');
                }
            });
        }

        if (pdmQuantityInput) {
            pdmQuantityInput.addEventListener('change', (e) => {
                let val = parseInt(e.target.value);
                if (isNaN(val) || val < 1) {
                    e.target.value = 1;
                } else if (val > product.stock) {
                    e.target.value = product.stock;
                    showNotification(getTranslation('stock-limit-error', { productName: product.name, stock: product.stock }), 'error');
                }
            });
        }

        if (pdmAddToCartBtn) {
            pdmAddToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(pdmQuantityInput.value);
                addToCart(product.id, quantity);
                closeAllModals();
            });
        }

        if (pdmAddToWishlistBtn) {
            pdmAddToWishlistBtn.addEventListener('click', (e) => {
                toggleWishlist(product.id);
                if (wishlist.some(item => item.id === product.id)) {
                    e.currentTarget.classList.add('added-to-wishlist');
                } else {
                    e.currentTarget.classList.remove('added-to-wishlist');
                }
            });
        }
    }

    /**
     * Opens a new, simpler modal for quick product information.
     */
    async function openProductQuickViewModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found in openProductQuickViewModal:", productId);
            showNotification(getTranslation('product-not-found-error'), "error");
            quickViewLoader.style.display = 'none';
            quickViewDetails.style.display = 'flex';
            quickViewDetails.innerHTML = `<p style="text-align: center; color: var(--error-color); padding: 20px;">${getTranslation('product-not-found')}</p>`;
            openModal(quickViewModal);
            return;
        }

        openModal(quickViewModal);

        quickViewLoader.style.display = 'block';
        quickViewDetails.style.display = 'none';
        quickViewDetails.innerHTML = '';

        await new Promise(resolve => setTimeout(resolve, 200)); // Simulate loading time

        const isInWishlist = wishlist.some(item => item.id === product.id);
        const addToCartDisabled = product.stock === 0 ? 'disabled' : '';
        const addToCartText = product.stock === 0 ? getTranslation('out-of-stock-quick-view') : getTranslation('add-to-cart-quick-view');
        const stockStatusText = product.stock > 0 ? getTranslation('in-stock') : getTranslation('out-of-stock');
        const stockQtyText = product.stock > 0 ? `: ${product.stock}` : '';

        // Get simulated rating for Quick View
        const productRatingData = productRatings[product.id] || { rating: (Math.random() * (5 - 3) + 3).toFixed(1), reviews: Math.floor(Math.random() * 100) + 1 };
        const ratingValue = parseFloat(productRatingData.rating);
        const reviewCount = productRatingData.reviews;


        quickViewDetails.innerHTML = `
            <div class="quick-view-image">
                <picture>
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="300" height="300">
                </picture>
            </div>
            <div class="quick-view-info">
                <h3>${product.name}</h3>
                <div class="product-rating" aria-label="${getTranslation('product-rating-display', { rating: ratingValue, reviews: reviewCount })}">
                    ${'<i class="fas fa-star" aria-hidden="true"></i>'.repeat(Math.floor(ratingValue))}
                    ${ratingValue % 1 >= 0.5 ? '<i class="fas fa-star-half-alt" aria-hidden="true"></i>' : ''}
                    <span>(${reviewCount})</span>
                </div>
                <p class="price">${formatCurrency(product.price)}</p>
                <p class="description">${product.description.substring(0, 150)}${product.description.length > 150 ? '...' : ''}</p>
                <p class="category">${getTranslation('category-display', { categoryName: product.category.charAt(0).toUpperCase() + product.category.slice(1) })}</p>
                <p class="stock-status ${product.stock === 0 ? 'out-of-stock' : ''}">${getTranslation('stock-display', { stockStatus: stockStatusText, stockQty: stockQtyText })}</p>
                <div class="quick-view-actions">
                    <button class="btn primary-btn add-to-cart-qv-btn" ${addToCartDisabled} data-id="${product.id}" aria-label="${getTranslation(addToCartDisabled ? 'out-of-stock-error' : 'add-to-cart-btn', { productName: product.name })}">${addToCartText}</button>
                    <button class="btn add-to-wishlist-qv-btn ${isInWishlist ? 'added-to-wishlist' : ''}" data-id="${product.id}" aria-label="${getTranslation('add-to-wishlist-btn', { productName: product.name })}">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </button>
                    <button class="btn secondary-btn view-details-qv-btn" data-id="${product.id}" aria-label="${getTranslation('view-detail-product', { productName: product.name })}">${getTranslation('view-details-quick-view')}</button>
                </div>
            </div>
        `;
        quickViewLoader.style.display = 'none';
        quickViewDetails.style.display = 'flex';

        quickViewModal.querySelector('.add-to-cart-qv-btn').addEventListener('click', () => {
            addToCart(product.id);
            closeAllModals();
        });
        quickViewModal.querySelector('.add-to-wishlist-qv-btn').addEventListener('click', (e) => {
            toggleWishlist(product.id);
            if (wishlist.some(item => item.id === product.id)) {
                e.currentTarget.classList.add('added-to-wishlist');
            } else {
                e.currentTarget.classList.remove('added-to-wishlist');
            }
        });
        // Event listener for "View Details" in Quick View to open full Product Detail Modal
        quickViewModal.querySelector('.view-details-qv-btn').addEventListener('click', () => {
            closeAllModals(); // Close quick view modal
            openProductDetailModal(product.id); // Open full detail modal
        });
    }

    function addRecentlyViewed(productId) {
        recentlyViewed = recentlyViewed.filter(id => id !== productId); // Remove if already exists
        recentlyViewed.unshift(productId); // Add to the beginning
        if (recentlyViewed.length > MAX_RECENTLY_VIEWED) {
            recentlyViewed = recentlyViewed.slice(0, MAX_RECENTLY_VIEWED); // Trim if too long
        }
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
        loadRecentlyViewed(); // Refresh the display
    }

    function loadRecentlyViewed() {
        recentlyViewedListContainer.innerHTML = '';
        if (recentlyViewed.length === 0) {
            emptyRecentlyViewedMessage.style.display = 'block';
            emptyRecentlyViewedMessage.textContent = getTranslation('empty-recently-viewed-message');
            return;
        } else {
            emptyRecentlyViewedMessage.style.display = 'none';
        }

        // Filter out any recently viewed IDs that no longer exist in the `products` array
        const viewedProductsData = recentlyViewed.map(id => products.find(p => p.id === id)).filter(Boolean);

        // If after filtering, the list is empty but localStorage wasn't, clear localStorage
        if (viewedProductsData.length === 0 && recentlyViewed.length > 0) {
            recentlyViewed = [];
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
            emptyRecentlyViewedMessage.style.display = 'block';
            emptyRecentlyViewedMessage.textContent = getTranslation('empty-recently-viewed-message');
            return;
        }

        viewedProductsData.forEach(product => {
            recentlyViewedListContainer.appendChild(createProductCard(product));
        });
    }

    // --- Profile Functions (Simulated Login/Logout) ---
    function renderProfileContent() {
        profileLoadingSkeleton.style.display = 'block';
        profileContentArea.innerHTML = ''; // Clear previous content

        setTimeout(() => {
            profileLoadingSkeleton.style.display = 'none';
            if (isLoggedIn) {
                profileContentArea.innerHTML = `
                    <div class="profile-details">
                        <p><span>${getTranslation('full-name-label')}:</span> <strong>${userProfile.name}</strong></p>
                        <p><span>${getTranslation('email-label')}:</span> <strong>${userProfile.email}</strong></p>
                        <p><span>${getTranslation('member-status')}:</span> <strong>${userProfile.memberStatus}</strong></p>
                        <p><span>${getTranslation('member-since')}:</span> <strong>${userProfile.joinDate}</strong></p>
                        
                        <h4>${getTranslation('your-addresses')}</h4>
                        <div class="profile-addresses">
                            ${userProfile.shippingAddresses.length > 0 ? userProfile.shippingAddresses.map(addr => `
                                <div class="address-item">
                                    <span>${addr.name}</span>
                                    <span>${addr.address}</span>
                                    ${addr.isDefault ? `<span class="status-badge shipped">${getTranslation('primary-address')}</span>` : ''}
                                </div>
                            `).join('') : `<p>${getTranslation('no-addresses-yet')}</p>`}
                             <button class="btn secondary-btn add-new-item-btn" id="add-new-address-btn">${getTranslation('add-new-address')}</button>
                        </div>

                        <h4>${getTranslation('your-payment-methods')}</h4>
                        <div class="profile-payment-methods">
                            ${userProfile.paymentMethods.length > 0 ? userProfile.paymentMethods.map(payment => `
                                <div class="payment-item">
                                    <span>${payment.type}</span>
                                    <span>${payment.last4 ? `**** ${payment.last4}` : payment.email}</span>
                                    ${payment.isDefault ? `<span class="status-badge shipped">${getTranslation('primary-payment')}</span>` : ''}
                                </div>
                            `).join('') : `<p>${getTranslation('no-payment-methods-yet')}</p>`}
                            <button class="btn secondary-btn add-new-item-btn" id="add-new-payment-btn">${getTranslation('add-new-payment')}</button>
                        </div>

                        <h4>${getTranslation('my-recent-orders')}</h4>
                        <div class="profile-orders">
                            ${userProfile.orders.length > 0 ? userProfile.orders.map(order => `
                                <div class="profile-order-item" data-order-id="${order.id}" role="button" tabindex="0" aria-label="${getTranslation('view-detail-product', { productName: order.id })}">
                                    <span>${getTranslation('order-id')}: ${order.id}</span>
                                    <span>${getTranslation('order-date')}: ${order.date}</span>
                                    <span>${getTranslation('order-total')}: ${formatCurrency(order.total)}</span>
                                    <span>${getTranslation('order-status')}: <strong class="status-badge ${order.status}">${getTranslation(order.status + '-status')}</strong></span>
                                </div>
                            `).join('') : `<p>${getTranslation('no-recent-orders')}</p>`}
                        </div>
                        <p style="text-align: center; margin-top: 20px; font-size: 0.9em; color: var(--light-text-color);">${getTranslation('order-history-info')}</p>
                    </div>
                `;
                // Hide action buttons for logged in user, controlled by separate logic
                profileActionButton.style.display = 'none';
                viewOrderHistoryBtn.style.display = 'block';
                editProfileBtn.style.display = 'block';
                logoutBtn.style.display = 'block';

                // Add event listeners for new profile buttons
                document.getElementById('add-new-address-btn')?.addEventListener('click', () => showNotification(getTranslation('feature-requires-backend'), 'info'));
                document.getElementById('add-new-payment-btn')?.addEventListener('click', () => showNotification(getTranslation('feature-requires-backend'), 'info'));
                document.querySelectorAll('.profile-order-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        const orderId = e.currentTarget.dataset.orderId;
                        openOrderDetailModal(orderId);
                    });
                    item.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            const orderId = e.currentTarget.dataset.orderId;
                            openOrderDetailModal(orderId);
                        }
                    });
                });

            } else {
                profileContentArea.innerHTML = `
                    <p>${getTranslation('profile-placeholder')}</p>
                    <form id="login-form" class="login-form">
                        <div class="form-group">
                            <label for="login-email">${getTranslation('email-label')}</label>
                            <input type="email" id="login-email" required aria-label="${getTranslation('email-label')}" value="user@example.com">
                        </div>
                        <div class="form-group">
                            <label for="login-password">${getTranslation('password-label')}</label>
                            <input type="password" id="login-password" required aria-label="${getTranslation('password-label')}" value="password">
                        </div>
                        <button type="submit" class="btn primary-btn">${getTranslation('login-btn')}</button>
                    </form>
                    <p style="margin-top: 15px;">${getTranslation('no-account-yet')} <a href="#" id="register-link">${getTranslation('register-now')}</a></p>
                    <p style="margin-top: 10px; font-size: 0.9em; color: var(--light-text-color);">${getTranslation('registration-feature-info')}</p>
                    `;
                // Show action button for guest user, hide others
                profileActionButton.style.display = 'block'; // This button will be "Login / Register"
                profileActionButton.textContent = getTranslation('login-register-btn');
                viewOrderHistoryBtn.style.display = 'none';
                editProfileBtn.style.display = 'none';
                logoutBtn.style.display = 'none';

                const loginForm = document.getElementById('login-form');
                if (loginForm) loginForm.addEventListener('submit', handleLogin);
                const registerLink = document.getElementById('register-link');
                if (registerLink) registerLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeAllModals(); // Close profile modal first
                    openRegisterModal(); // Open new register modal
                });
                 if (registerLink) registerLink.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        closeAllModals(); // Close profile modal first
                        openRegisterModal(); // Open new register modal
                    }
                });

                document.querySelectorAll('#login-form input').forEach(input => {
                    input.addEventListener('input', () => validateInput(input));
                    input.addEventListener('blur', () => validateInput(input));
                });
            }
        }, 500);
    }

    async function handleLogin(e) {
        e.preventDefault();
        const loginForm = e.target;
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        const loginBtn = loginForm.querySelector('button[type="submit"]');

        if (!validateFormOnSubmit(loginForm)) {
            return;
        }

        showButtonLoading(loginBtn, 'Logging in...');
        await new Promise(resolve => setTimeout(resolve, 300));

        // Simulate backend login
        // REPLACE WITH ACTUAL BACKEND API CALL LATER IF NEEDED
        // Example: const response = await fetch('YOUR_BACKEND_LOGIN_ENDPOINT', { method: 'POST', body: JSON.stringify({ email: emailInput.value, password: passwordInput.value }) });
        // const data = await response.json();
        // if (response.ok) { ... handle success ... } else { ... handle error ... }

        if (emailInput.value === 'user@example.com' && passwordInput.value === 'password') {
            isLoggedIn = true;
            userProfile = {
                name: 'John Doe',
                email: 'user@example.com',
                memberStatus: 'Gold Member',
                joinDate: '2023-01-01',
                shippingAddresses: [
                    { id: 'addr1', name: 'Home', address: '123 Main St, Cityville, Country', isDefault: true },
                    { id: 'addr2', name: 'Work', address: '456 Business Rd, Officetown, Country', isDefault: false }
                ],
                paymentMethods: [
                    { id: 'pay1', type: 'Credit Card', last4: '1234', isDefault: true },
                    { id: 'pay2', type: 'PayPal', email: 'john.doe@example.com', isDefault: false }
                ],
                orders: [ // Filter dummyOrders to get orders for this simulated user
                    dummyOrders.find(o => o.id === 'ORD123456'), // Delivered
                    dummyOrders.find(o => o.id === 'ORD789012'), // Shipped
                    dummyOrders.find(o => o.id === 'ORD345678') // Processing
                ].filter(Boolean) // Filter out any undefined if order not found
            };
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            showNotification(getTranslation('login-success', { userName: userProfile.name }), 'success');
            renderProfileContent();
            closeAllModals(); // Close login modal on success
        } else {
            showNotification(getTranslation('invalid-credentials'), 'error');
        }
        hideButtonLoading(loginBtn);
    }

    function handleLogout() {
        isLoggedIn = false;
        userProfile = {
            name: 'Guest',
            email: 'guest@example.com',
            memberStatus: 'Bronze',
            joinDate: 'N/A', // Reset on logout
            shippingAddresses: [],
            paymentMethods: [],
            orders: []
        };
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userProfile');
        showNotification(getTranslation('logout-success'), 'success');
        renderProfileContent();
        closeAllModals(); // Close profile modal on logout
    }

    // NEW: Function to open Edit Profile Modal
    async function openEditProfileModal() {
        openModal(editProfileModal);
        editProfileLoader.style.display = 'block';
        editProfileFormArea.innerHTML = ''; // Clear previous content

        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading

        // Push state for history API
        history.pushState({ modal: true, editProfileModal: true, previousPath: window.location.pathname }, getTranslation('edit-profile-title'), '#edit-profile');

        editProfileFormArea.innerHTML = `
            <form id="edit-profile-form" class="edit-profile-form">
                <div class="form-group">
                    <label for="edit-name">${getTranslation('full-name-label')}</label>
                    <input type="text" id="edit-name" value="${userProfile.name}" required aria-label="${getTranslation('full-name-label')}" maxlength="100">
                </div>
                <div class="form-group">
                    <label for="edit-email">${getTranslation('email-label')}</label>
                    <input type="email" id="edit-email" value="${userProfile.email}" required aria-label="${getTranslation('email-label')}" maxlength="255">
                </div>
                <button type="submit" class="btn primary-btn" id="save-profile-btn" data-key="save-changes-btn">${getTranslation('save-changes-btn')}</button>
            </form>
            <p style="margin-top: 20px; font-size: 0.9em; color: var(--light-text-color);">${getTranslation('edit-profile-info')}</p>
        `;
        editProfileLoader.style.display = 'none';

        const editProfileForm = document.getElementById('edit-profile-form');
        if (editProfileForm) {
            editProfileForm.addEventListener('submit', handleEditProfile);
            document.querySelectorAll('#edit-profile-form input').forEach(input => {
                input.addEventListener('input', () => validateInput(input));
                input.addEventListener('blur', () => validateInput(input));
            });
        }
        applyTranslations(); // Re-apply translations for new form elements
    }

    // NEW: Function to handle Edit Profile Form submission
    async function handleEditProfile(e) {
        e.preventDefault();
        const editProfileForm = e.target;
        const newName = document.getElementById('edit-name').value.trim();
        const newEmail = document.getElementById('edit-email').value.trim();
        const saveProfileBtn = document.getElementById('save-profile-btn');

        if (!validateFormOnSubmit(editProfileForm)) {
            return;
        }

        showButtonLoading(saveProfileBtn, 'Saving...');
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call

        // Simulate successful update
        userProfile.name = newName;
        userProfile.email = newEmail;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        showNotification(getTranslation('profile-updated-success'), 'success');
        hideButtonLoading(saveProfileBtn);
        closeAllModals(); // Close edit profile modal
        openModal(profileModal); // Re-open profile modal
        renderProfileContent(); // Re-render profile to show changes
    }

    // NEW: Function to open Register Modal
    async function openRegisterModal() {
        openModal(registerModal);
        registerLoader.style.display = 'block';
        registerFormArea.innerHTML = ''; // Clear previous content

        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading

        // Push state for history API
        history.pushState({ modal: true, registerModal: true, previousPath: window.location.pathname }, getTranslation('register-title'), '#register');


        registerFormArea.innerHTML = `
            <form id="register-form" class="register-form">
                <div class="form-group">
                    <label for="register-name" data-key="full-name">${getTranslation('full-name')}</label>
                    <input type="text" id="register-name" required aria-label="${getTranslation('full-name')}" maxlength="100">
                </div>
                <div class="form-group">
                    <label for="register-email" data-key="email-label">${getTranslation('email-label')}</label>
                    <input type="email" id="register-email" required aria-label="${getTranslation('email-label')}" maxlength="255">
                </div>
                <div class="form-group">
                    <label for="register-password" data-key="password-label">${getTranslation('password-label')}</label>
                    <input type="password" id="register-password" required aria-label="${getTranslation('password-label')}" minlength="6" title="${getTranslation('password-too-short')}">
                </div>
                <div class="form-group">
                    <label for="confirm-password" data-key="confirm-password">${getTranslation('confirm-password')}</label>
                    <input type="password" id="confirm-password" required aria-label="${getTranslation('confirm-password')}">
                    <span class="error-message password-mismatch-error" style="display: none;">${getTranslation('passwords-do-not-match')}</span>
                </div>
                <button type="submit" class="btn primary-btn" id="register-submit-btn" data-key="register-now">${getTranslation('register-now')}</button>
            </form>
            <p style="margin-top: 20px; font-size: 0.9em; color: var(--light-text-color);">${getTranslation('registration-feature-info')}</p>
        `;
        registerLoader.style.display = 'none';

        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', handleRegister);
            const registerPasswordInput = document.getElementById('register-password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const passwordMismatchError = registerForm.querySelector('.password-mismatch-error');

            const validatePasswords = () => {
                let passwordsMatch = true;
                if (registerPasswordInput.value !== confirmPasswordInput.value) {
                    passwordMismatchError.style.display = 'block';
                    confirmPasswordInput.classList.add('is-invalid');
                    confirmPasswordInput.setAttribute('aria-invalid', 'true');
                    passwordsMatch = false;
                } else {
                    passwordMismatchError.style.display = 'none';
                    confirmPasswordInput.classList.remove('is-invalid');
                    confirmPasswordInput.removeAttribute('aria-invalid');
                }
                // Also validate confirm password input itself (e.g. required)
                validateInput(confirmPasswordInput);
                return passwordsMatch;
            };

            registerPasswordInput.addEventListener('input', () => { validateInput(registerPasswordInput); validatePasswords(); });
            registerPasswordInput.addEventListener('blur', () => { validateInput(registerPasswordInput); validatePasswords(); });
            confirmPasswordInput.addEventListener('input', validatePasswords);
            confirmPasswordInput.addEventListener('blur', validatePasswords);
            document.getElementById('register-name').addEventListener('input', () => validateInput(document.getElementById('register-name')));
            document.getElementById('register-name').addEventListener('blur', () => validateInput(document.getElementById('register-name')));
            document.getElementById('register-email').addEventListener('input', () => validateInput(document.getElementById('register-email')));
            document.getElementById('register-email').addEventListener('blur', () => validateInput(document.getElementById('register-email')));
        }
        applyTranslations(); // Re-apply translations for new form elements
    }

    // NEW: Function to handle Register Form submission
    async function handleRegister(e) {
        e.preventDefault();
        const registerForm = e.target;
        const nameInput = document.getElementById('register-name');
        const emailInput = document.getElementById('register-email');
        const passwordInput = document.getElementById('register-password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const registerSubmitBtn = document.getElementById('register-submit-btn');

        let allValid = validateFormOnSubmit(registerForm);

        // Additional password match validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            document.querySelector('#register-form .password-mismatch-error').style.display = 'block';
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.setAttribute('aria-invalid', 'true');
            allValid = false;
        } else {
            document.querySelector('#register-form .password-mismatch-error').style.display = 'none';
            confirmPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.removeAttribute('aria-invalid');
        }

        if (!allValid) {
            return;
        }

        showButtonLoading(registerSubmitBtn, 'Registering...');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

        // Simulate successful registration (no actual user creation)
        showNotification(getTranslation('register-success'), 'success');
        hideButtonLoading(registerSubmitBtn);
        closeAllModals(); // Close register modal
        // Optionally, auto-fill login form or open login modal
        openModal(profileModal);
        renderProfileContent(); // This will show the login form
        // Prefill login form (if it exists)
        if (document.getElementById('login-email')) {
            document.getElementById('login-email').value = emailInput.value;
        }
        registerForm.reset(); // Clear register form fields (but keep translations)

    }


    // --- Checkout Flow Functions ---
    function showCheckoutPage() {
        if (cart.length === 0) {
            showNotification(getTranslation('empty-cart-checkout-error'), 'error');
            return;
        }

        closeAllModals(); // Close any open modals before showing checkout page
        checkoutPage.classList.add('active');
        body.classList.add('no-scroll');
        checkoutPage.setAttribute('aria-hidden', 'false');

        const checkoutHeaderH2 = checkoutPage.querySelector('.checkout-header h2');
        if (checkoutHeaderH2) checkoutHeaderH2.textContent = getTranslation('checkout-page-title');
        const backToCartButton = checkoutPage.querySelector('.back-to-cart-btn');
        if (backToCartButton) backToCartButton.textContent = getTranslation('back-to-cart-btn');


        checkoutOrderItems.innerHTML = '';
        cart.forEach(item => {
            const checkoutItemDiv = document.createElement('div');
            checkoutItemDiv.classList.add('checkout-order-item');
            checkoutItemDiv.innerHTML = `
                <picture>
                    <img src="${item.image || 'assets/images/placeholder-product-default.jpg'}" alt="${item.name || getTranslation('product-not-found')}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="60" height="60">
                </picture>
                <div class="checkout-item-details">
                    <h4>${item.name || getTranslation('product-not-found')}</h4>
                    <p>${item.quantity || 1} x ${formatCurrency(item.price || 0)}</p>
                </div>
                <span class="checkout-item-price">${formatCurrency((item.price || 0) * (item.quantity || 0))}</span>
            `;
            checkoutOrderItems.appendChild(checkoutItemDiv);
        });

        const totals = calculateCartTotals();
        checkoutSubtotalSpan.textContent = getTranslation('item-subtotal') + ": " + formatCurrency(totals.subtotal);
        const shippingCost = 5.00; // Fixed dummy shipping cost. Can be replaced with actual calculation if needed.
        checkoutShippingCostSpan.textContent = getTranslation('shipping-cost') + ": " + formatCurrency(shippingCost);
        checkoutGrandTotalSpan.textContent = getTranslation('total-payment') + ": " + formatCurrency(totals.total + shippingCost);

        // Update translation for shipping form and payment section
        checkoutPage.querySelector('#shipping-form h3').textContent = getTranslation('shipping-info-title');
        checkoutPage.querySelector('label[for="fullName"]').textContent = getTranslation('full-name-label-shipping');
        checkoutPage.querySelector('label[for="address"]').textContent = getTranslation('address-label');
        checkoutPage.querySelector('label[for="city"]').textContent = getTranslation('city-label');
        checkoutPage.querySelector('label[for="postalCode"]').textContent = getTranslation('postal-code-label');
        checkoutPage.querySelector('label[for="phone"]').textContent = getTranslation('phone-number-label');
        shippingForm.querySelector('button[type="submit"]').textContent = getTranslation('continue-to-payment-btn');

        paymentMethodsSection.querySelector('h3').textContent = getTranslation('payment-methods-title');
        // Ensure correct labels for radio buttons using data-key if available, otherwise fallback
        paymentMethodsSection.querySelector('input[value="bankTransfer"]').nextElementSibling.textContent = getTranslation('bank-transfer');
        paymentMethodsSection.querySelector('input[value="creditCard"]').nextElementSibling.textContent = getTranslation('credit-card');
        paymentMethodsSection.querySelector('input[value="ewallet"]').nextElementSibling.textContent = getTranslation('e-wallet');
        placeOrderBtn.textContent = getTranslation('confirm-order-btn');

        paymentMethodsSection.style.display = 'none'; // Hide payment until shipping is done
        shippingForm.querySelector('button[type="submit"]').style.display = 'block'; // Show continue button
    }

    function hideCheckoutPage() {
        checkoutPage.classList.remove('active');
        body.classList.remove('no-scroll');
        checkoutPage.setAttribute('aria-hidden', 'true');
    }

    // NEW: Function to open Order Detail Modal
    async function openOrderDetailModal(orderId) {
        openModal(orderDetailModal);
        orderDetailLoader.style.display = 'block';
        orderDetailContent.style.display = 'none';
        orderDetailContent.innerHTML = '';
        orderDetailModal.dataset.orderId = orderId; // Store order ID on modal

        // Push state for history API
        history.pushState({ modal: true, orderId: orderId, previousPath: window.location.pathname }, getTranslation('order-details-title') + ' ' + orderId, `#order-details-${orderId}`);

        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading

        const order = dummyOrders.find(o => o.id === orderId);

        if (!order) {
            orderDetailContent.innerHTML = `<p style="text-align: center; color: var(--error-color); padding: 20px;">${getTranslation('order-not-found')}</p>`;
            orderDetailLoader.style.display = 'none';
            orderDetailContent.style.display = 'block';
            return;
        }

        orderDetailContent.innerHTML = `
            <div class="order-detail-summary">
                <p><span>${getTranslation('order-id')}:</span> <strong>${order.id}</strong></p>
                <p><span>${getTranslation('order-date')}:</span> <strong>${order.date}</strong></p>
                <p><span>${getTranslation('order-total')}:</span> <strong>${formatCurrency(order.total)}</strong></p>
                <p><span>${getTranslation('order-status')}:</span> <strong class="status-badge ${order.status}">${getTranslation(order.status + '-status')}</strong></p>
                <p><span>${getTranslation('tracking-shipping-address')}:</span> <strong>${order.shippingAddress}</strong></p>
            </div>

            <div class="order-detail-items">
                <h4>${getTranslation('order-items')}</h4>
                <ul>
                    ${order.items.map(item => `
                        <li>
                            <img src="${item.image || 'assets/images/placeholder-product-default.jpg'}" alt="${item.name}" width="80" height="80" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';">
                            <div class="item-info">
                                <h5>${item.name}</h5>
                                <p>${getTranslation('item-qty')}: ${item.qty}</p>
                            </div>
                            <span class="item-price">${formatCurrency(item.price * item.qty)}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="tracking-status-timeline">
                <h4>${getTranslation('tracking-details')}</h4>
                <ul>
                    ${order.tracking.history.map(entry => {
                        const isCurrentHistoryEntry = (entry.status.toLowerCase().replace(/\s/g, '-') === order.tracking.stage.toLowerCase().replace(/\s/g, '-')); // Compare normalized stage
                        const statusIcons = { // Re-define locally for clarity, or use global
                            'Order Placed': 'fa-clipboard-list',
                            'Processed': 'fa-boxes-packing',
                            'Shipped': 'fa-truck-ramp-box',
                            'In Transit': 'fa-route',
                            'Out for Delivery': 'fa-person-walking-luggage',
                            'Delivered': 'fa-house-circle-check',
                            'Cancelled': 'fa-ban'
                        };
                        const iconClass = statusIcons[entry.status] || 'fa-circle-question';
                        return `
                            <li class="${isCurrentHistoryEntry ? 'active-entry' : ''}">
                                <div class="timeline-dot ${isCurrentHistoryEntry ? 'active status-' + order.status : ''}">
                                    <i class="fas ${iconClass}" aria-hidden="true"></i>
                                </div>
                                <div class="timeline-content">
                                    <p class="status-text">${entry.status}</p>
                                    <p class="location-text">${entry.location}</p>
                                    <p class="date-text">${entry.date}</p>
                                </div>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        `;
        orderDetailLoader.style.display = 'none';
        orderDetailContent.style.display = 'flex'; // Display as flex for internal layout
    }


    // --- Order Tracking Function (Modernized with Timeline) ---
    async function handleOrderTracking(e) {
        e.preventDefault();
        const orderId = orderIdInput.value.trim().toUpperCase();
        const trackButton = orderTrackingForm.querySelector('button[type="submit"]');

        if (!orderId) {
            showNotification(getTranslation('fill-all-fields-error'), 'error');
            return;
        }
        // Validate input against pattern before proceeding
        if (!validateInput(orderIdInput)) {
            return;
        }

        showButtonLoading(trackButton, 'Tracking...');
        // Hide initial placeholder and clear previous results area
        if (initialOrderTrackingPlaceholder) initialOrderTrackingPlaceholder.style.display = 'none';
        orderTrackingResults.innerHTML = `<div class="loading-spinner" role="status" aria-label="Tracking order..."></div>`;

        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call delay

        const foundOrder = dummyOrders.find(order => order.id === orderId);

        hideButtonLoading(trackButton);

        if (foundOrder) {
            // Define icons for each status type
            const statusIcons = {
                'Order Placed': 'fa-clipboard-list',
                'Processed': 'fa-boxes-packing',
                'Shipped': 'fa-truck-ramp-box',
                'In Transit': 'fa-route',
                'Out for Delivery': 'fa-person-walking-luggage',
                'Delivered': 'fa-house-circle-check',
                'Cancelled': 'fa-ban'
            };

            const trackingTimelineHtml = `
                <div class="tracking-status-timeline">
                    <h4>${getTranslation('tracking-details')}</h4>
                    <ul>
                        ${foundOrder.tracking.history.map(entry => {
                            const isCurrentHistoryEntry = (entry.status.toLowerCase().replace(/\s/g, '-') === foundOrder.tracking.stage.toLowerCase().replace(/\s/g, '-')); // Compare normalized stage
                            const iconClass = statusIcons[entry.status] || 'fa-circle-question'; // Default icon if not found
                            return `
                                <li class="${isCurrentHistoryEntry ? 'active-entry' : ''}">
                                    <div class="timeline-dot ${isCurrentHistoryEntry ? 'active status-' + foundOrder.status : ''}">
                                        <i class="fas ${iconClass}" aria-hidden="true"></i>
                                    </div>
                                    <div class="timeline-content">
                                        <p class="status-text">${entry.status}</p>
                                        <p class="location-text">${entry.location}</p>
                                        <p class="date-text">${entry.date}</p>
                                    </div>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            `;

            orderTrackingResults.innerHTML = `
                <div class="order-found-title">${getTranslation('order-found')}</div>
                <div class="tracking-details-container">
                    <div class="tracking-summary" data-order-id="${foundOrder.id}">
                        <p><span>${getTranslation('tracking-order-id')}:</span> <span>${foundOrder.id}</span></p>
                        <p><span>${getTranslation('tracking-order-date')}:</span> <span>${foundOrder.date}</span></p>
                        <p><span>${getTranslation('tracking-order-total')}:</span> <span>${formatCurrency(foundOrder.total)}</span></p>
                        <p><span>${getTranslation('tracking-order-status')}:</span> <span class="status-badge ${foundOrder.status}">${getTranslation(foundOrder.status + '-status')}</span></p>
                        <p><span>${getTranslation('tracking-shipping-address')}:</span> <span>${foundOrder.shippingAddress}</span></p>
                    </div>
                    ${trackingTimelineHtml}
                </div>
                <div class="tracking-items">
                    <h4>${getTranslation('tracking-items-ordered')}</h4>
                    <ul>
                        ${foundOrder.items.map(item => `
                            <li>
                                <picture>
                                    <img src="${item.image || 'assets/images/placeholder-product-default.jpg'}" alt="${item.name}" width="60" height="60" loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';">
                                </picture>
                                <span>${item.name} (${getTranslation('tracking-qty')}: ${item.qty})</span> <span style="font-weight: 600;">${formatCurrency(item.price * item.qty)}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;

            showNotification(getTranslation('order-found'), 'success');
        } else {
            orderTrackingResults.innerHTML = `<p>${getTranslation('order-not-found')}</p>`;
            if (initialOrderTrackingPlaceholder) initialOrderTrackingPlaceholder.style.display = 'block'; // Show original placeholder back
            showNotification(getTranslation('order-not-found'), 'error');
        }
    }

    // Function to open Info Page Modal (kept from previous version if still used by support links)
    async function openInfoPageModal(pageKey) {
        const pageData = dummyInfoPages[pageKey];
        if (!pageData) {
            console.error("Info page content not found for key:", pageKey);
            infoPageContent.innerHTML = `<p style="text-align: center; color: var(--error-color); padding: 20px;">Information not available.</p>`;
            infoPageModalTitle.textContent = getTranslation('info-page-modal-title');
            openModal(infoPageModal);
            return;
        }

        openModal(infoPageModal);
        infoPageContent.innerHTML = `<div class="loading-spinner" role="status" aria-label="Loading information..."></div>`; // Show loader
        infoPageModalTitle.textContent = getTranslation('info-page-modal-title'); // Default title while loading
        infoPageModalTitle.dataset.infoPageKey = pageKey; // Store key for translation update

        // Push state for history API
        history.pushState({ modal: true, infoPageKey: pageKey, previousPath: window.location.pathname }, getTranslation(pageData.title_key), `#info-${pageKey}`);


        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading time

        infoPageModalTitle.textContent = getTranslation(pageData.title_key);
        infoPageContent.innerHTML = getTranslation(pageData.content_key);
    }

    /*====================================================================
      6. CAROUSEL & COUNTDOWN LOGIC
      Specific logic for carousels and flash sale countdown.
      (Note: Section numbering is adjusted after removing Admin Panel section)
    ====================================================================*/

    let flashSaleEndTime = new Date().getTime() + (2 * 60 * 60 * 1000) + (30 * 60 * 1000); // 2 hours 30 mins from now
    let countdownInterval;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = flashSaleEndTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (countdownTimer) {
            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownTimer.textContent = getTranslation('sale-ended');
                if (flashSaleListContainer) {
                    flashSaleListContainer.innerHTML = `<p style="text-align: center; color: var(--flash-sale-text-color);" data-key="flash-sale-ended-message-key">${getTranslation('flash-sale-ended-message')}</p>`;
                    flashSaleListContainer.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                        btn.disabled = true;
                        btn.textContent = getTranslation('sale-end-text');
                        btn.setAttribute('aria-label', getTranslation('sale-end-text'));
                    });
                }
            } else {
                countdownTimer.textContent =
                    (hours < 10 ? '0' : '') + hours + getTranslation('time-unit-hour') + " " +
                    (minutes < 10 ? '0' : '') + minutes + getTranslation('time-unit-minute') + " " +
                    (seconds < 10 ? '0' : '') + seconds + getTranslation('time-unit-second');
            }
        }
    }

    function startCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        updateCountdown(); // Call immediately to avoid delay
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Initialize Featured Products Carousel
    function initFeaturedCarousel() {
        if (!featuredCarouselPrevBtn || !featuredCarouselNextBtn || !featuredCardsWrapper) return;

        let featuredScrollAmount = 0;
        const getFeaturedCardWidth = () => {
            const firstCard = featuredCardsWrapper.querySelector('.product-card');
            // Ensure card exists and has width, fallback to a safe default
            return firstCard ? firstCard.offsetWidth + 30 : 380; // 30 is sum of gap + padding
        };

        // Reset scroll position on init
        featuredCardsWrapper.scrollTo({ left: 0, behavior: 'auto' });
        featuredScrollAmount = 0;

        featuredCarouselNextBtn.addEventListener('click', () => {
            const cardWidth = getFeaturedCardWidth();
            featuredScrollAmount += cardWidth;
            const maxScroll = featuredCardsWrapper.scrollWidth - featuredCardsWrapper.clientWidth;
            if (maxScroll <= 0) { // If content fits, no scrolling needed
                featuredScrollAmount = 0; // Reset for next iteration if window resized
                return;
            }
            if (featuredScrollAmount >= maxScroll) { // Loop back to start
                featuredScrollAmount = 0;
            }
            featuredCardsWrapper.scrollTo({
                left: featuredScrollAmount,
                behavior: 'smooth'
            });
        });

        featuredCarouselPrevBtn.addEventListener('click', () => {
            const cardWidth = getFeaturedCardWidth();
            featuredScrollAmount -= cardWidth;
            const maxScroll = featuredCardsWrapper.scrollWidth - featuredCardsWrapper.clientWidth;
            if (maxScroll <= 0) { // If content fits, no scrolling needed
                featuredScrollAmount = 0; // Reset for next iteration if window resized
                return;
            }
            if (featuredScrollAmount < 0) { // Loop back to end
                featuredScrollAmount = maxScroll;
            }
            featuredCardsWrapper.scrollTo({
                left: featuredScrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Initialize Testimonial Carousel
    function initTestimonialCarousel() {
        if (!testimonialCarouselWrapper || !testimonialPrevBtn || !testimonialNextBtn) return;

        let testimonialScrollAmount = 0;
        const getTestimonialCardWidth = () => {
            const firstCard = testimonialCarouselWrapper.querySelector('.testimonial-card');
            return firstCard ? firstCard.offsetWidth + 30 : 380; // 30 is sum of gap + padding
        };

        testimonialCarouselWrapper.scrollTo({ left: 0, behavior: 'auto' });
        testimonialScrollAmount = 0;

        testimonialNextBtn.addEventListener('click', () => {
            const cardWidth = getTestimonialCardWidth();
            testimonialScrollAmount += cardWidth;
            const maxScroll = testimonialCarouselWrapper.scrollWidth - testimonialCarouselWrapper.clientWidth;
            if (maxScroll <= 0) {
                testimonialScrollAmount = 0;
                return;
            }
            if (testimonialScrollAmount >= maxScroll) {
                testimonialScrollAmount = 0;
            }
            testimonialCarouselWrapper.scrollTo({
                left: testimonialScrollAmount,
                behavior: 'smooth'
            });
        });

        testimonialPrevBtn.addEventListener('click', () => {
            const cardWidth = getTestimonialCardWidth();
            testimonialScrollAmount -= cardWidth;
            const maxScroll = testimonialCarouselWrapper.scrollWidth - testimonialCarouselWrapper.clientWidth;
            if (maxScroll <= 0) {
                testimonialScrollAmount = 0;
                return;
            }
            if (testimonialScrollAmount < 0) {
                testimonialScrollAmount = maxScroll;
            }
            testimonialCarouselWrapper.scrollTo({
                left: testimonialScrollAmount,
                behavior: 'smooth'
            });
        });
    }

    /*====================================================================
      7. EVENT LISTENERS
      All event listeners for user interaction.
      (Note: Section numbering is adjusted after removing Admin Panel section)
    ====================================================================*/

    // --- Mobile Sidebar Toggles ---
    mobileMenuToggle.addEventListener('click', () => {
        lastFocusedElement = document.activeElement;
        mobileSidebar.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('no-scroll');
        mobileSidebar.setAttribute('aria-hidden', 'false');
        mobileSidebar.setAttribute('tabindex', '-1');
        closeSidebar.focus(); // Focus on close button for accessibility
    });

    closeSidebar.addEventListener('click', () => {
        mobileSidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
        mobileSidebar.setAttribute('aria-hidden', 'true');
        mobileSidebar.removeAttribute('tabindex');
        if (lastFocusedElement) {
            lastFocusedElement.focus(); // Restore focus to the element that opened the sidebar
            lastFocusedElement = null;
        }
    });

    sidebarNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close sidebar when a navigation link is clicked
            mobileSidebar.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
            mobileSidebar.setAttribute('aria-hidden', 'true');
            mobileSidebar.removeAttribute('tabindex');
        });
    });

    // --- Modal Closing ---
    overlay.addEventListener('click', closeAllModals); // Close all modals when overlay is clicked
    allCloseButtons.forEach(button => {
        button.addEventListener('click', closeAllModals); // Close modals when their close button is clicked
    });
    document.addEventListener('keydown', (e) => {
        // Close modals/sidebar on Escape key press
        if (e.key === 'Escape' && (document.querySelector('.modal.active') || mobileSidebar.classList.contains('active'))) {
            closeAllModals();
        }
    });

    // --- Navigation Icons (Open Modals) ---
    searchIcon.addEventListener('click', () => { openModal(searchModal); });
    cartIcon.addEventListener('click', () => { openModal(cartModal); });
    wishlistIcon.addEventListener('click', () => { openModal(wishlistModal); });
    profileIcon.addEventListener('click', () => { openModal(profileModal); renderProfileContent(); }); // Render profile content when opened

    // --- Sidebar Navigation Icons (Open Modals) ---
    sidebarSearchIcon.addEventListener('click', () => { openModal(searchModal); });
    sidebarCartIcon.addEventListener('click', () => { openModal(cartModal); });
    sidebarWishlistIcon.addEventListener('click', () => { openModal(wishlistModal); });
    sidebarProfileIcon.addEventListener('click', () => { openModal(profileModal); renderProfileContent(); });

    // Removed: Admin Panel link event listeners and internal navigation listeners

    // --- Search Functionality ---
    let searchTimeout;

    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(); // Debounced search execution
        }, DEBOUNCE_DELAY);
    });

    executeSearchBtn.addEventListener('click', () => {
        clearTimeout(searchTimeout); // Clear any pending debounced calls
        performSearch(); // Execute search immediately
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            clearTimeout(searchTimeout);
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query.length < 2) {
            searchResultsContainer.innerHTML = `<p>${getTranslation('search-min-chars')}</p>`;
            return;
        }

        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );

        searchResultsContainer.innerHTML = '';
        if (filtered.length === 0) {
            searchResultsContainer.innerHTML = `<p>${getTranslation('no-search-results')}</p>`;
        } else {
            const resultCountHtml = document.createElement('p');
            resultCountHtml.textContent = getTranslation('results-found', { count: filtered.length });
            resultCountHtml.style.marginBottom = '15px';
            resultCountHtml.style.fontWeight = '600';
            resultCountHtml.style.textAlign = 'left';
            searchResultsContainer.appendChild(resultCountHtml);

            filtered.forEach(product => {
                const searchItem = document.createElement('div');
                searchItem.classList.add('search-result-item');
                searchItem.setAttribute('role', 'button');
                searchItem.setAttribute('tabindex', '0');
                searchItem.setAttribute('aria-label', `View details for ${product.name}`);
                searchItem.innerHTML = `
                    <picture>
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/images/placeholder-product-default.jpg';" width="60" height="60">
                    </picture>
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <span>${formatCurrency(product.price)}</span>
                    </div>
                `;
                searchItem.addEventListener('click', () => {
                    openProductDetailModal(product.id);
                });
                searchItem.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        openProductDetailModal(product.id);
                    }
                });
                searchResultsContainer.appendChild(searchItem);
            });
        }
    }

    // --- Product Filtering and Sorting Event Listeners ---
    categoryFilter.addEventListener('change', () => loadAllProducts(false, categoryFilter.value, sortByFilter.value, searchInput.value, productsPerPage));
    sortByFilter.addEventListener('change', () => loadAllProducts(false, categoryFilter.value, sortByFilter.value, searchInput.value, productsPerPage));

    loadMoreProductsBtn.addEventListener('click', () => {
        // Load all products (or more products) when button is clicked
        loadAllProducts(true, categoryFilter.value, sortByFilter.value, searchInput.value);
    });

    if (viewAllCategoriesBtn) {
        viewAllCategoriesBtn.addEventListener('click', () => {
            // Filter products by all categories and scroll to products section
            filterAndDisplayCategoryProducts('all');
        });
    }

    if (viewAllFlashSaleBtn) {
        viewAllFlashSaleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Reset filters and display all flash sale products
            categoryFilter.value = 'all';
            sortByFilter.value = 'default';
            searchInput.value = '';
            loadAllProducts(false, 'all', 'default', '', productsPerPage).then(() => {
                if (flashSaleSection) {
                    flashSaleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            showNotification(getTranslation('displaying-all-flash-sale-products'), 'info');
        });
    }

    // --- Checkout Button Listeners ---
    checkoutBtn.addEventListener('click', showCheckoutPage);
    backToCartBtn.addEventListener('click', hideCheckoutPage);
    if (viewCartPageBtn) {
        viewCartPageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(getTranslation('feature-requires-backend'), 'info');
        });
    }

    shippingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = shippingForm.querySelector('button[type="submit"]');

        if (validateFormOnSubmit(shippingForm)) {
            showButtonLoading(submitBtn);
            await new Promise(resolve => setTimeout(resolve, 300)); // Simulate saving delay
            showNotification(getTranslation('shipping-info-saved'), 'success');
            paymentMethodsSection.style.display = 'block'; // Show payment options
            submitBtn.style.display = 'none'; // Hide continue button
            placeOrderBtn.focus(); // Focus on place order button
        }
    });

    placeOrderBtn.addEventListener('click', async () => {
        const selectedPaymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');

        if (selectedPaymentMethodInput) {
            const paymentMethodValue = selectedPaymentMethodInput.value;
            let paymentMethodTranslationKey;
            switch(paymentMethodValue) {
                case 'bankTransfer': paymentMethodTranslationKey = 'bank-transfer'; break;
                case 'creditCard': paymentMethodTranslationKey = 'credit-card'; break;
                case 'ewallet': paymentMethodTranslationKey = 'e-wallet'; break;
                default: paymentMethodTranslationKey = paymentMethodValue;
            }
            const translatedPaymentMethod = getTranslation(paymentMethodTranslationKey);

            showButtonLoading(placeOrderBtn);
            showNotification(getTranslation('order-processing', { method: translatedPaymentMethod }), 'info');

            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate payment processing

            // Simulate adding a new order to userProfile upon successful checkout
            const newOrderId = `ORD${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
            const today = new Date();
            const newOrder = {
                id: newOrderId,
                status: 'processing',
                date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
                total: calculateCartTotals().total + 5.00, // Include shipping
                items: cart.map(item => ({ ...item })), // Deep copy cart items
                shippingAddress: `${document.getElementById('fullName').value}, ${document.getElementById('address').value}, ${document.getElementById('city').value}, ${document.getElementById('postalCode').value}, ${document.getElementById('phone').value}`,
                tracking: { // Basic tracking for new order
                    stage: 'processing',
                    currentLocation: 'Origin Warehouse',
                    progressPercent: 10,
                    history: [
                        { status: 'Order Placed', location: 'Origin Warehouse', date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')} ${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')} AM`, icon: 'fa-clipboard-list' },
                        { status: 'Processing', location: 'Origin Warehouse', date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')} ${today.getHours().toString().padStart(2, '0')}:${(today.getMinutes() + 10).toString().padStart(2, '0')} AM`, icon: 'fa-boxes-packing' }
                    ]
                }
            };

            userProfile.orders.unshift(newOrder); // Add to the beginning of user's orders
            dummyOrders.unshift(newOrder); // Also add to global dummyOrders for tracking lookup
            localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save updated profile

            showNotification(getTranslation('order-success'), 'success');
            cart = []; // Clear cart after successful order
            saveCart();
            updateCartDisplay();
            hideCheckoutPage();
            hideButtonLoading(placeOrderBtn);
            // Optionally, show order confirmation modal or redirect to order tracking page
            // For now, let's just show a notification.
        } else {
            showNotification(getTranslation('select-payment-method-error'), 'error');
        }
    });

    // --- Order Tracking Function (continued from Part 4, adding listeners) ---
    if (orderTrackingForm) {
        orderTrackingForm.addEventListener('submit', handleOrderTracking);
        orderIdInput.addEventListener('input', () => validateInput(orderIdInput));
        orderIdInput.addEventListener('blur', () => validateInput(orderIdInput));
    }

    // --- Accordion for FAQ ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.getAttribute('aria-expanded') === 'true';

            // Close other open accordions
            document.querySelectorAll('.accordion-header[aria-expanded="true"]').forEach(openHeader => {
                if (openHeader !== header) {
                    openHeader.setAttribute('aria-expanded', 'false');
                    openHeader.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle current accordion
            if (isActive) {
                header.setAttribute('aria-expanded', 'false');
                content.classList.remove('active');
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
            }
        });
    });

    // --- Smooth Scrolling for Navigation Links (Adjusted for fixed header) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') { // Prevent default for empty href="#" or current page anchor
                e.preventDefault();
                return;
            }

            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement && targetId.startsWith('#')) {
                    e.preventDefault();

                    const headerOffset = mainHeader.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // 20px extra padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile sidebar if open after navigation
                    if (mobileSidebar.classList.contains('active')) {
                        mobileSidebar.classList.remove('active');
                        overlay.classList.remove('active');
                        body.classList.remove('no-scroll');
                        mobileSidebar.setAttribute('aria-hidden', 'true');
                        mobileSidebar.removeAttribute('tabindex');
                    }
                }
            } catch (error) {
                console.error("Error with smooth scroll link:", error);
            }
        });
    });

    // --- Newsletter Forms ---
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        if (validateFormOnSubmit(form)) {
            showNotification(getTranslation('newsletter-success'), 'success');
            form.reset(); // Clear form
        }
    });

    footerNewsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        if (validateFormOnSubmit(form)) {
            showNotification(getTranslation('newsletter-success'), 'success');
            form.reset(); // Clear form
        }
    });

    // --- Contact Form ---
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        if (validateFormOnSubmit(form)) {
            showNotification(getTranslation('contact-form-success'), 'success');
            form.reset(); // Clear form
        }
    });

    // --- Dark Mode Toggle Event Listener ---
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            body.classList.toggle('dark-mode', isDarkMode);
            localStorage.setItem('darkMode', isDarkMode); // Save preference

            if (isDarkMode) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                darkModeToggle.setAttribute('aria-label', getTranslation('light-mode-enabled'));
                showNotification(getTranslation('dark-mode-enabled'), 'info');
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
                darkModeToggle.setAttribute('aria-label', getTranslation('dark-mode-enabled'));
                showNotification(getTranslation('light-mode-enabled'), 'info');
            }

            // Update sidebar toggle as well
            if (sidebarDarkModeToggle) {
                if (isDarkMode) {
                    sidebarDarkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                    sidebarDarkModeToggle.setAttribute('aria-label', getTranslation('light-mode-enabled'));
                } else {
                    sidebarDarkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
                    sidebarDarkModeToggle.setAttribute('aria-label', getTranslation('dark-mode-enabled'));
                }
            }
        });
    }

    // --- Support Links Event Listeners to open Info Page Modal ---
    [...supportLinks, ...sidebarSupportLinks].forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageKey = e.currentTarget.dataset.infoPage;
            openInfoPageModal(pageKey);
        });
        link.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.currentTarget.click(); // Trigger click to activate modal
            }
        });
    });


    // --- Profile Action Buttons (Dummy functionality for ThemeForest) ---
    if (viewOrderHistoryBtn) {
        viewOrderHistoryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification(getTranslation('order-history-info'), 'info');
            // Instead of just a notification, you could open a specific modal for all orders here
            // e.g., openAllOrdersModal();
        });
    }
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // showNotification(getTranslation('edit-profile-info'), 'info');
            openEditProfileModal(); // Open the new edit profile modal
        });
    }
    // NEW: Handle logout button click
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    // NEW: Handle profile action button (Login/Register) click when not logged in
    if (profileActionButton) {
        profileActionButton.addEventListener('click', () => {
            if (!isLoggedIn) {
                // If not logged in, clicking this button should open the profile modal (which shows login form)
                openModal(profileModal);
                renderProfileContent();
            }
        });
    }


    /*====================================================================
      8. INITIALIZATION LOGIC
      Functions to initialize all functionality when the page loads.
      (Note: Section numbering is adjusted after removing Admin Panel section)
    ====================================================================*/

    async function initializeApp() {
        // Apply dark mode preference on load
        if (isDarkMode) {
            body.classList.add('dark-mode');
            if (darkModeToggle) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                darkModeToggle.setAttribute('aria-label', getTranslation('light-mode-enabled'));
            }
            if (sidebarDarkModeToggle) {
                sidebarDarkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                sidebarDarkModeToggle.setAttribute('aria-label', getTranslation('light-mode-enabled'));
            }
        } else {
            if (darkModeToggle) {
                darkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
                darkModeToggle.setAttribute('aria-label', getTranslation('dark-mode-enabled'));
            }
            if (sidebarDarkModeToggle) {
                sidebarDarkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
                sidebarDarkModeToggle.setAttribute('aria-label', getTranslation('dark-mode-enabled'));
            }
        }

        // Add validation event listeners to forms
        document.querySelectorAll(
            '.shipping-form input, .shipping-form textarea, .shipping-form select, ' + // Added select for shipping form
            '.newsletter-form input, .contact-form input, .contact-form textarea, ' +
            '#order-tracking-form input, ' + // Order ID input
            '#login-form input, ' + // Login form inputs
            '#edit-profile-form input, ' + // NEW: Edit Profile form inputs
            '#register-form input' // NEW: Register form inputs
        ).forEach(input => {
            input.addEventListener('input', () => validateInput(input));
            input.addEventListener('blur', () => validateInput(input));
        });


        // Load initial data and render sections
        await Promise.all([
            loadAllProducts(false, categoryFilter.value, sortByFilter.value, searchInput.value, productsPerPage),
            loadFeaturedProducts(),
            loadFlashSaleProducts(),
            loadCategories(),
            loadRecentlyViewed()
        ]);

        // Initialize carousels after products are loaded
        initFeaturedCarousel();
        initTestimonialCarousel();

        startCountdown();
        updateCartDisplay();
        updateWishlistDisplay();
        updateProductCardWishlistIcons(); // Ensure wishlist icons are correct on load

        // NEW: Add dummy orders to user profile if logged in but no orders, for demo consistency
        if (isLoggedIn && userProfile.orders.length === 0) {
            userProfile.orders = [
                dummyOrders.find(o => o.id === 'ORD123456'),
                dummyOrders.find(o => o.id === 'ORD789012'),
                dummyOrders.find(o => o.id === 'ORD345678')
            ].filter(Boolean);
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
        }

        applyTranslations(); // Apply initial translations to all elements

        // Handle browser history navigation (back/forward button) for modals
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.modal) {
                if (event.state.productId) {
                    openProductDetailModal(event.state.productId);
                } else if (event.state.orderId) { // NEW: Handle popstate for Order Detail Modal
                    openOrderDetailModal(event.state.orderId);
                } else if (event.state.profileModal) { // NEW: Handle popstate for Profile Modal states
                    openModal(profileModal);
                    renderProfileContent();
                } else if (event.state.editProfileModal) { // NEW: Handle popstate for Edit Profile Modal
                    openEditProfileModal();
                } else if (event.state.registerModal) { // NEW: Handle popstate for Register Modal
                    openRegisterModal();
                }
                else {
                    // If a modal state without a specific ID, close all modals to return to the base page.
                    closeAllModals();
                }
            } else if (document.querySelector('.modal.active') || mobileSidebar.classList.contains('active') || checkoutPage.classList.contains('active')) {
                // If any modal/sidebar/checkout is currently open and history state doesn't indicate it, close it.
                closeAllModals();
            }
        });

        // Handle direct URL access to product detail page (e.g., /product/p1)
        const initialPath = window.location.pathname;
        const productIdMatch = initialPath.match(/\/product\/(p\d+)/);
        if (productIdMatch && productIdMatch[1]) {
            const initialProductId = productIdMatch[1];
            const productExists = products.some(p => p.id === initialProductId);
            if (productExists) {
                 openProductDetailModal(initialProductId);
            } else {
                 history.replaceState({}, document.title, '/'); // Redirect to home if product not found
                 showNotification(getTranslation('product-not-found-error'), 'error');
            }
        }
    }

    // Call the initialization function when DOM is ready
    initializeApp();

}); // End of DOMContentLoaded