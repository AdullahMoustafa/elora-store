/* =========================
   WHATSAPP NUMBER
========================= */

const WHATSAPP_NUMBER = "4915731342137";

/* =========================
   PRODUCTS
========================= */

const products = [
  {
    id: 1,
    name: "Elegant Long Dress",
    nameAr: "فستان طويل أنيق",
    price: 65,
    category: "Women",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=700"
  },
  {
    id: 2,
    name: "Classic Modest Outfit",
    nameAr: "إطلالة محتشمة كلاسيكية",
    price: 75,
    category: "Women",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700"
  },
  {
    id: 3,
    name: "Everyday Loose Shirt",
    nameAr: "قميص واسع يومي",
    price: 48,
    category: "Women",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=700"
  },
  {
    id: 4,
    name: "Classic Men's Outfit",
    nameAr: "إطلالة رجالية كلاسيكية",
    price: 80,
    category: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700"
  },
  {
    id: 5,
    name: "Minimalist Men's Shirt",
    nameAr: "قميص رجالي بسيط",
    price: 55,
    category: "Men",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700"
  },
  {
    id: 6,
    name: "Elegant Handbag",
    nameAr: "حقيبة يد أنيقة",
    price: 45,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700"
  },
  {
    id: 7,
    name: "Classic Shoulder Bag",
    nameAr: "حقيبة كتف كلاسيكية",
    price: 50,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700"
  },
  {
    id: 8,
    name: "Timeless Fashion Bag",
    nameAr: "حقيبة عصرية أنيقة",
    price: 60,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700"
  }
];

/* =========================
   TRANSLATIONS
========================= */

const translations = {
  en: {
    announcement: "Discover timeless modest fashion — Free shipping on orders over $100",
    home: "Home",
    categories: "Categories",
    shop: "Shop",
    about: "About",
    bag: "Bag",
    search: "Search products...",
    heroEyebrow: "MODEST FASHION, TIMELESS STYLE",
    heroTitle: 'Elegance in<br><span>Every Detail.</span>',
    heroText: "Discover a collection designed for confidence, comfort and effortless elegance.",
    shopNow: "SHOP COLLECTION",
    categoryEyebrow: "EXPLORE OUR COLLECTION",
    categoryTitle: "Shop by Category",
    women: "Women's Wear",
    men: "Men's Wear",
    accessories: "Accessories",
    productsEyebrow: "CURATED FOR YOU",
    productsTitle: "Our Collection",
    productsText: "Timeless pieces for everyday elegance.",
    all: "All",
    aboutEyebrow: "OUR PHILOSOPHY",
    aboutTitle: "Beauty in Simplicity.",
    aboutText: "At ÉLORA, we believe that true elegance is effortless. Our collection celebrates modesty, comfort and timeless style through carefully selected pieces.",
    exploreMore: "EXPLORE MORE",
    newsletterEyebrow: "STAY CONNECTED",
    newsletterTitle: "A Little Elegance in Your Inbox",
    newsletterText: "Subscribe to receive updates about new collections and special offers.",
    email: "Enter your email address",
    subscribe: "SUBSCRIBE",
    footerText: "Modest Fashion. Timeless Elegance.",
    copyright: "© 2026 ÉLORA. All rights reserved.",
    cartTitle: "Your Shopping Bag",
    total: "Total",
    checkout: "CHECKOUT",
    empty: "Your bag is empty.",
    add: "ADD TO BAG",
    remove: "Remove",
    thankYou: "Thank you for subscribing to ÉLORA!",
    emptyAlert: "Your shopping bag is empty!",
    orderGreeting: "Hello ÉLORA! I would like to place an order:",
    orderProducts: "Order details:",
    quantity: "Quantity",
    orderTotal: "Total",
    orderNote: "Please contact me to confirm my order. Thank you!",
    checkoutError: "Could not open WhatsApp. Please try again."
  },

  ar: {
    announcement: "اكتشفي الأناقة المحتشمة — شحن مجاني للطلبات فوق 100 دولار",
    home: "الرئيسية",
    categories: "الأقسام",
    shop: "تسوقي",
    about: "من نحن",
    bag: "حقيبتي",
    search: "ابحثي عن المنتجات...",
    heroEyebrow: "أزياء محتشمة وأناقة لا تنتهي",
    heroTitle: "الأناقة في<br><span>كل التفاصيل.</span>",
    heroText: "اكتشفي مجموعة صُممت لتمنحك الثقة والراحة والأناقة بكل بساطة.",
    shopNow: "تسوقي المجموعة",
    categoryEyebrow: "اكتشفي مجموعتنا",
    categoryTitle: "تسوقي حسب القسم",
    women: "ملابس نسائية",
    men: "ملابس رجالية",
    accessories: "إكسسوارات",
    productsEyebrow: "اخترناها لكِ",
    productsTitle: "مجموعتنا",
    productsText: "قطع أنيقة تناسب كل يوم.",
    all: "الكل",
    aboutEyebrow: "فلسفتنا",
    aboutTitle: "الجمال في البساطة.",
    aboutText: "في إيلورا، نؤمن أن الأناقة الحقيقية لا تحتاج إلى تكلف. مجموعتنا تحتفي بالاحتشام والراحة والأسلوب الراقي من خلال قطع مختارة بعناية.",
    exploreMore: "اكتشفي المزيد",
    newsletterEyebrow: "ابقَي على تواصل",
    newsletterTitle: "لمسة من الأناقة في بريدك",
    newsletterText: "اشتركي ليصلك كل جديد عن مجموعاتنا والعروض الخاصة.",
    email: "أدخلي بريدك الإلكتروني",
    subscribe: "اشتراك",
    footerText: "أزياء محتشمة. أناقة لا تنتهي.",
    copyright: "© 2026 إيلورا. جميع الحقوق محفوظة.",
    cartTitle: "حقيبة التسوق",
    total: "الإجمالي",
    checkout: "إتمام الشراء",
    empty: "حقيبتك فارغة.",
    add: "أضيفي إلى الحقيبة",
    remove: "حذف",
    thankYou: "شكرًا لاشتراكك في إيلورا!",
    emptyAlert: "حقيبة التسوق فارغة!",
    orderGreeting: "مرحبًا إيلورا، أريد تسجيل طلب جديد:",
    orderProducts: "تفاصيل الطلب:",
    quantity: "الكمية",
    orderTotal: "الإجمالي",
    orderNote: "يرجى التواصل معي لتأكيد الطلب. شكرًا لكم!",
    checkoutError: "تعذر فتح واتساب. حاولي مرة أخرى."
  }
};

/* =========================
   WEBSITE STATE
========================= */

let currentLanguage = "en";
let currentFilter = "All";
let searchText = "";
let cart = [];

/* =========================
   ELEMENTS
========================= */

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");

/* =========================
   HELPER FUNCTIONS
========================= */

function getText(key) {
  return translations[currentLanguage][key];
}

function getProductName(product) {
  return currentLanguage === "ar" ? product.nameAr : product.name;
}

function getCategoryName(category) {
  const categoryKeys = {
    Women: "women",
    Men: "men",
    Accessories: "accessories"
  };

  return categoryKeys[category]
    ? getText(categoryKeys[category])
    : category;
}

/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts() {
  productGrid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      currentFilter === "All" || product.category === currentFilter;

    const searchableText = [
      product.name,
      product.nameAr,
      product.category,
      getCategoryName(product.category)
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <p class="empty-cart">
        ${currentLanguage === "ar"
          ? "لا توجد منتجات مطابقة."
          : "No products found."}
      </p>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${getProductName(product)}"
          loading="lazy"
        >
      </div>

      <div class="product-info">
        <h3>${getProductName(product)}</h3>
        <p>$${product.price.toFixed(2)}</p>

        <button class="add-button" data-id="${product.id}" type="button">
          ${getText("add")}
        </button>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

/* =========================
   TRANSLATE WEBSITE
========================= */

function translateWebsite() {
  const t = translations[currentLanguage];
  const isArabic = currentLanguage === "ar";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.body.classList.toggle("arabic", isArabic);

  document.getElementById("languageButton").textContent =
    isArabic ? "EN" : "AR";

  document.getElementById("announcement").textContent = t.announcement;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (t[key] !== undefined) {
      element.textContent = t[key];
    }
  });

  document.getElementById("heroTitle").innerHTML = t.heroTitle;
  document.getElementById("searchInput").placeholder = t.search;
  document.getElementById("emailInput").placeholder = t.email;

  displayProducts();
  updateCart();
}

/* =========================
   ADD TO CART
========================= */

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
}

/* =========================
   UPDATE CART
========================= */

function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">${getText("empty")}</p>
    `;
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img
        src="${item.image}"
        alt="${getProductName(item)}"
        loading="lazy"
      >

      <div>
        <h4>${getProductName(item)}</h4>
        <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
        <button data-remove="${item.id}" type="button">
          ${getText("remove")}
        </button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartCount.textContent = count;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

/* =========================
   OPEN AND CLOSE CART
========================= */

function openCart() {
  cartPanel.classList.add("show");
  cartOverlay.classList.add("show");
}

function closeCart() {
  cartPanel.classList.remove("show");
  cartOverlay.classList.remove("show");
}

/* =========================
   WHATSAPP CHECKOUT
========================= */

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert(getText("emptyAlert"));
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let message = `${getText("orderGreeting")}\n\n`;
  message += `${getText("orderProducts")}\n`;

  cart.forEach((item, index) => {
    message += `\n${index + 1}. ${getProductName(item)}\n`;
    message += `${getText("quantity")}: ${item.quantity}\n`;
    message += `Price: $${item.price.toFixed(2)}\n`;
    message += `Subtotal: $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  message += `\n--------------------\n`;
  message += `${getText("orderTotal")}: $${total.toFixed(2)}\n\n`;
  message += getText("orderNote");

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const newWindow = window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

  if (!newWindow) {
    window.location.href = whatsappURL;
  }
}

/* =========================
   PRODUCT EVENTS
========================= */

productGrid.addEventListener("click", event => {
  const button = event.target.closest(".add-button");

  if (!button) return;

  addToCart(Number(button.dataset.id));
});

/* =========================
   REMOVE PRODUCTS
========================= */

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");

  if (!button) return;

  const id = Number(button.dataset.remove);

  cart = cart.filter(item => item.id !== id);

  updateCart();
});

/* =========================
   CART EVENTS
========================= */

document.getElementById("cartButton").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);

document.getElementById("checkoutButton").addEventListener(
  "click",
  checkoutWhatsApp
);

/* Close cart using Escape key */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
  }
});

/* =========================
   LANGUAGE SWITCH
========================= */

document.getElementById("languageButton").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  translateWebsite();
});

/* =========================
   FILTER BUTTONS
========================= */

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    displayProducts();
  });
});

/* =========================
   CATEGORY CARDS
========================= */

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    currentFilter = card.dataset.category;

    document.querySelectorAll(".filter-btn").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === currentFilter
      );
    });

    displayProducts();
  });
});

/* =========================
   SEARCH
========================= */

document.getElementById("searchInput").addEventListener("input", event => {
  searchText = event.target.value.trim().toLowerCase();

  displayProducts();
});

/* =========================
   NEWSLETTER
========================= */

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  alert(getText("thankYou"));

  event.target.reset();
});

/* =========================
   INITIAL DISPLAY
========================= */

displayProducts();
updateCart();
translateWebsite();