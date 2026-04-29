const customer = {
  fullName: "Sophia Martinez",
  email: "sophia@email.com",
  phone: "+1 (555) 104-2208",
  address: "221 Market St, San Francisco, CA 94103",
  savedAddresses: [
    "221 Market St, San Francisco, CA 94103",
    "889 Madison Ave, New York, NY 10021",
  ],
  paymentMethods: ["Visa •••• 2219", "Mastercard •••• 0042", "PayPal: sophia@email.com"],
  wishlist: ["Tailored Blazer", "Flow Midi Dress", "Signature Bomber", "Urban Hoodie"],
};

const orders = [
  {
    id: "VN-90871",
    date: "2026-04-19",
    status: "Pending",
    total: 174,
    products: ["Tailored Blazer", "Minimal Cotton Tee", "Essential Polo"],
  },
  {
    id: "VN-89654",
    date: "2026-03-22",
    status: "Shipped",
    total: 151,
    products: ["Straight Denim Jeans", "Pleated Maxi Skirt"],
  },
  {
    id: "VN-88111",
    date: "2026-03-09",
    status: "Delivered",
    total: 92,
    products: ["Flow Midi Dress"],
  },
  {
    id: "VN-87001",
    date: "2026-02-28",
    status: "Cancelled",
    total: 57,
    products: ["Urban Hoodie"],
  },
];

const categoryProducts = {
  men: [
    {
      id: "men-classic-denim-jacket",
      name: "Classic Denim Jacket",
      price: 89,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Indigo", "Black", "Stone"],
      sizes: ["S", "M", "L", "XL"],
      description: "Premium washed denim jacket designed for everyday layering.",
    },
    {
      id: "men-slim-fit-chino",
      name: "Slim Fit Chino",
      price: 65,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Camel", "Olive", "Navy"],
      sizes: ["30", "32", "34", "36"],
      description: "Tailored comfort with stretch fabric and clean silhouette.",
    },
    {
      id: "men-oxford-shirt",
      name: "Oxford Shirt",
      price: 52,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["White", "Sky Blue", "Sand"],
      sizes: ["S", "M", "L", "XL"],
      description: "A refined oxford shirt with breathable cotton texture.",
    },
    {
      id: "men-urban-hoodie",
      name: "Urban Hoodie",
      price: 57,
      image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Charcoal", "Cream", "Dusty Green"],
      sizes: ["S", "M", "L", "XL"],
      description: "Heavyweight hoodie with relaxed fit and soft brushed interior.",
    },
    {
      id: "men-signature-bomber",
      name: "Signature Bomber",
      price: 109,
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Black", "Mocha", "Khaki"],
      sizes: ["M", "L", "XL"],
      description: "Modern bomber jacket balancing structure and movement.",
    },
    {
      id: "men-essential-polo",
      name: "Essential Polo",
      price: 49,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["White", "Navy", "Forest"],
      sizes: ["S", "M", "L", "XL"],
      description: "Smart-casual polo made from premium breathable knit.",
    },
  ],
  women: [
    {
      id: "women-flow-midi-dress",
      name: "Flow Midi Dress",
      price: 92,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Rose", "Ivory", "Navy"],
      sizes: ["XS", "S", "M", "L"],
      description: "Airy midi dress designed for graceful movement and comfort.",
    },
    {
      id: "women-pleated-maxi-skirt",
      name: "Pleated Maxi Skirt",
      price: 83,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1594938298603-c8148c4b4357?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Champagne", "Sage", "Black"],
      sizes: ["XS", "S", "M", "L"],
      description: "Elegant pleated texture with a flattering high-waist cut.",
    },
    {
      id: "women-silk-blouse",
      name: "Silk Blouse",
      price: 74,
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Pearl", "Sand", "Midnight"],
      sizes: ["XS", "S", "M", "L"],
      description: "Luxe silk-blend blouse with fluid drape and subtle shine.",
    },
    {
      id: "women-tailored-blazer",
      name: "Tailored Blazer",
      price: 119,
      image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Camel", "Black", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      description: "Sharp tailored blazer for elevated office and evening looks.",
    },
    {
      id: "women-rib-knit-top",
      name: "Rib Knit Top",
      price: 46,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Taupe", "White", "Wine"],
      sizes: ["XS", "S", "M", "L"],
      description: "Soft rib-knit top that pairs easily with denim and skirts.",
    },
    {
      id: "women-wide-leg-trouser",
      name: "Wide Leg Trouser",
      price: 88,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Stone", "Navy", "Espresso"],
      sizes: ["XS", "S", "M", "L"],
      description: "Relaxed wide-leg trousers with polished pleat detailing.",
    },
  ],
  kids: [
    {
      id: "kids-comfy-cotton-set",
      name: "Comfy Cotton Set",
      price: 38,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Sky", "Mint", "Sand"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Super-soft cotton two-piece set for all-day comfort.",
    },
    {
      id: "kids-denim-overall",
      name: "Kids Denim Overall",
      price: 44,
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Blue", "Light Wash", "Grey"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Durable denim overalls with playful fit and easy snaps.",
    },
    {
      id: "kids-rainbow-hoodie",
      name: "Rainbow Hoodie",
      price: 35,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Rainbow", "Coral", "Blue"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Colorful everyday hoodie that keeps little ones warm.",
    },
    {
      id: "kids-sporty-jogger",
      name: "Sporty Jogger",
      price: 31,
      image: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1508020963102-c6c723be5764?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Navy", "Grey", "Green"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Flexible joggers built for movement and playground fun.",
    },
    {
      id: "kids-striped-tee",
      name: "Striped Tee",
      price: 24,
      image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Blue/White", "Red/White", "Green/White"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Classic striped t-shirt made with soft breathable cotton.",
    },
    {
      id: "kids-puffer-vest",
      name: "Puffer Vest",
      price: 53,
      image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?auto=format&fit=crop&w=900&q=80",
      images: [
        "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&w=1400&q=80",
      ],
      colors: ["Mustard", "Navy", "Forest"],
      sizes: ["2Y", "4Y", "6Y", "8Y"],
      description: "Lightweight padded vest perfect for active outdoor days.",
    },
  ],
};
const allProducts = Object.values(categoryProducts).flat();

function renderProfilePage() {
  const fullNameEl = document.getElementById("fullName");
  if (!fullNameEl) return;

  document.getElementById("fullName").textContent = customer.fullName;
  document.getElementById("email").textContent = customer.email;
  document.getElementById("phone").textContent = customer.phone;
  document.getElementById("address").textContent = customer.address;

  const addressesList = document.getElementById("savedAddresses");
  const paymentList = document.getElementById("paymentMethods");
  const wishlistGrid = document.getElementById("wishlist");

  addressesList.innerHTML = customer.savedAddresses.map((item) => `<li>${item}</li>`).join("");
  paymentList.innerHTML = customer.paymentMethods.map((item) => `<li>${item}</li>`).join("");
  wishlistGrid.innerHTML = customer.wishlist.map((item) => `<div class="wishlist-item">${item}</div>`).join("");

  document.getElementById("editProfileBtn").addEventListener("click", () => {
    alert("Edit Profile clicked. Connect this button to your real profile form.");
  });
}

function statusClass(status) {
  const map = {
    Pending: "pending",
    Shipped: "shipped",
    Delivered: "delivered",
    Cancelled: "cancelled",
  };
  return map[status] || "pending";
}

function renderOrdersPage() {
  const ordersContainer = document.getElementById("ordersList");
  if (!ordersContainer) return;

  const modal = document.getElementById("orderModal");
  const modalOrderId = document.getElementById("modalOrderId");
  const modalMeta = document.getElementById("modalMeta");
  const modalProducts = document.getElementById("modalProducts");

  function getAllOrders() {
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem("modischOrders") || "[]");
    } catch {
      saved = [];
    }
    // Show real orders if any exist, otherwise fall back to demo data
    return saved.length > 0 ? saved : orders;
  }

  function drawOrders() {
    const allOrders = getAllOrders();

    if (!allOrders.length) {
      ordersContainer.innerHTML = `
        <article class="card" style="text-align:center;padding:48px 24px;">
          <h3 style="margin:0 0 8px">No orders yet</h3>
          <p class="muted">Your placed orders will appear here.</p>
          <a class="btn btn-primary" href="./Home.html" style="margin-top:16px;display:inline-block;">Start Shopping</a>
        </article>`;
      return;
    }

    ordersContainer.innerHTML = allOrders
      .map(
        (order) => `
        <article class="card order-card">
          <div class="order-top">
            <div>
              <strong>Order #${order.id}</strong>
            </div>
            <span class="badge ${statusClass(order.status)}">${order.status}</span>
          </div>
          <div class="order-meta">
            <div><strong>Date:</strong> ${order.date}</div>
            <div><strong>Total:</strong> $${order.total}</div>
            <div><strong>Items:</strong> ${order.products.length}</div>
          </div>
          <div class="product-tags">
            ${order.products.map((product) => `<span class="tag">${product}</span>`).join("")}
          </div>
          <div style="margin-top: 12px">
            <button class="btn btn-outline view-details" data-id="${order.id}">View Details</button>
          </div>
        </article>
      `
      )
      .join("");

    document.querySelectorAll(".view-details").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = getAllOrders().find((order) => order.id === btn.dataset.id);
        if (!selected) return;
        modalOrderId.textContent = 'Order #' + selected.id;
        modalMeta.textContent = selected.date + ' - ' + selected.status + ' - Total: $' + selected.total;
        modalProducts.innerHTML = selected.products
          .map((product) => `<div class="tag" style="display:inline-block; margin:4px 6px 0 0;">${product}</div>`)
          .join("");
        modal.classList.add("open");
      });
    });
  }

  drawOrders();

  document.getElementById("refreshOrders").addEventListener("click", () => {
    drawOrders();
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
}

function renderCategoryPage() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  const currentCategory = document.body.dataset.category;
  const products = categoryProducts[currentCategory] || [];

  grid.innerHTML = products
    .map(
      (product) => `
      <article class="card product-card">
        <a href="./product-details.html?id=${encodeURIComponent(product.id)}">
          <img class="product-image" src="${product.image}" alt="${product.name}" />
        </a>
        <div class="product-body">
          <h3 class="product-title">
            <a class="product-link" href="./product-details.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
          </h3>
          <div class="product-meta">
            <span class="price">$${product.price}</span>
            <a class="btn btn-outline" href="./product-details.html?id=${encodeURIComponent(product.id)}">View Item</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderProductDetailsPage() {
  const page = document.getElementById("productDetailsPage");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = allProducts.find((item) => item.id === productId) || allProducts[0];

  if (!product) return;

  const mainImage = document.getElementById("mainProductImage");
  const thumbGrid = document.getElementById("productThumbGrid");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");
  const sizeOptions = document.getElementById("sizeOptions");
  const colorOptions = document.getElementById("colorOptions");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const addMessage = document.getElementById("addMessage");

  let selectedSize = product.sizes[0];
  let selectedColor = product.colors[0];
  let selectedImage = product.images[0];

  productName.textContent = product.name;
  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
  mainImage.src = selectedImage;
  mainImage.alt = product.name;

  function renderThumbs() {
    thumbGrid.innerHTML = product.images
      .map(
        (img) => `
      <button class="thumb-btn ${img === selectedImage ? "active" : ""}" data-image="${img}" type="button">
        <img src="${img}" alt="${product.name}" />
      </button>
    `
      )
      .join("");

    thumbGrid.querySelectorAll(".thumb-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedImage = btn.dataset.image;
        mainImage.src = selectedImage;
        renderThumbs();
      });
    });
  }

  function renderVariantOptions(container, values, selectedValue, type) {
    container.innerHTML = values
      .map(
        (value) => `
      <button class="option-btn ${value === selectedValue ? "active" : ""}" data-value="${value}" data-type="${type}" type="button">
        ${value}
      </button>
    `
      )
      .join("");
  }

  function bindVariantHandlers() {
    document.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const value = btn.dataset.value;
        if (type === "size") {
          selectedSize = value;
          renderVariantOptions(sizeOptions, product.sizes, selectedSize, "size");
        }
        if (type === "color") {
          selectedColor = value;
          renderVariantOptions(colorOptions, product.colors, selectedColor, "color");
        }
        bindVariantHandlers();
        addMessage.textContent = "";
      });
    });
  }

  renderThumbs();
  renderVariantOptions(sizeOptions, product.sizes, selectedSize, "size");
  renderVariantOptions(colorOptions, product.colors, selectedColor, "color");
  bindVariantHandlers();

  addToCartBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("modischCart") || "[]");
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: selectedImage,
      quantity: 1,
    });
    localStorage.setItem("modischCart", JSON.stringify(cart));
    addMessage.textContent = `${product.name} (${selectedSize}, ${selectedColor}) added to cart.`;
  });
}

function renderCartPage() {
  const cartPage = document.getElementById("cartPage");
  if (!cartPage) return;

  const cartList = document.getElementById("cartList");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartShipping = document.getElementById("cartShipping");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function getCart() {
    return JSON.parse(localStorage.getItem("modischCart") || "[]");
  }

  function saveCart(cart) {
    localStorage.setItem("modischCart", JSON.stringify(cart));
  }

  function drawCart() {
    const cart = getCart();

    if (!cart.length) {
      cartList.innerHTML = `
        <article class="card cart-empty">
          <h3>Your cart is empty</h3>
          <p class="muted">Add products from Men, Women, or Kids collections.</p>
          <a class="btn btn-primary" href="./Home.html">Continue Shopping</a>
        </article>
      `;
      cartSubtotal.textContent = "$0";
      cartShipping.textContent = "$0";
      cartTotal.textContent = "$0";
      cartCount.textContent = "0";
      return;
    }

    cartList.innerHTML = cart
      .map(
        (item, index) => `
      <article class="card cart-item">
        <img class="cart-item-image" src="${item.image}" alt="${item.name}" />
        <div class="cart-item-body">
          <h3>${item.name}</h3>
          <p class="muted">Size: ${item.size} | Color: ${item.color}</p>
          <p class="cart-item-price">$${item.price}</p>
          <div class="cart-actions">
            <button class="btn btn-outline cart-qty-btn" data-action="decrease" data-index="${index}" type="button">-</button>
            <span class="cart-qty">${item.quantity || 1}</span>
            <button class="btn btn-outline cart-qty-btn" data-action="increase" data-index="${index}" type="button">+</button>
            <button class="btn btn-outline cart-remove-btn" data-index="${index}" type="button">Remove</button>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const shipping = subtotal > 0 ? 12 : 0;
    const total = subtotal + shipping;
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    cartSubtotal.textContent = `$${subtotal}`;
    cartShipping.textContent = `$${shipping}`;
    cartTotal.textContent = `$${total}`;
    cartCount.textContent = `${count}`;

    cartList.querySelectorAll(".cart-qty-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
        const action = btn.dataset.action;
        const latestCart = getCart();
        const currentItem = latestCart[index];
        if (!currentItem) return;

        const currentQty = currentItem.quantity || 1;
        if (action === "increase") {
          currentItem.quantity = currentQty + 1;
        } else if (action === "decrease") {
          currentItem.quantity = Math.max(1, currentQty - 1);
        }
        saveCart(latestCart);
        drawCart();
      });
    });

    cartList.querySelectorAll(".cart-remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
        const latestCart = getCart().filter((_, itemIndex) => itemIndex !== index);
        saveCart(latestCart);
        drawCart();
      });
    });
  }

  drawCart();

  clearCartBtn?.addEventListener("click", () => {
    saveCart([]);
    drawCart();
  });

  checkoutBtn?.addEventListener("click", () => {
    const cart = getCart();
    if (!cart.length) {
      alert("Your cart is empty. Add items before checkout.");
      return;
    }

    // Build a new order from the current cart
    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const shipping = 12;
    const total = subtotal + shipping;

    const newOrder = {
      id: "VN-" + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toISOString().slice(0, 10),
      status: "Pending",
      total: total,
      products: cart.map((item) => `${item.name} (${item.size}, ${item.color}) ×${item.quantity || 1}`),
    };

    // Persist the order to localStorage
    let savedOrders = [];
    try {
      savedOrders = JSON.parse(localStorage.getItem("modischOrders") || "[]");
    } catch {
      savedOrders = [];
    }
    savedOrders.unshift(newOrder);
    localStorage.setItem("modischOrders", JSON.stringify(savedOrders));

    // Clear the cart
    saveCart([]);
    drawCart();

    // Show confirmation
    const msg = document.createElement("div");
    msg.style.cssText =
      "position:fixed;top:24px;left:50%;transform:translateX(-50%);background:#1a1814;color:#fff;" +
      "padding:14px 28px;border-radius:8px;font-size:0.9rem;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.18);";
    msg.textContent = `✓ Order ${newOrder.id} placed! Redirecting to your orders…`;
    document.body.appendChild(msg);
    setTimeout(() => {
      msg.remove();
      window.location.href = "./orders.html";
    }, 2000);
  });
}

renderProfilePage();
renderOrdersPage();
renderCategoryPage();
renderProductDetailsPage();
renderCartPage();
