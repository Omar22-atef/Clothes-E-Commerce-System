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
    { name: "Classic Denim Jacket", price: 89, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
    { name: "Slim Fit Chino", price: 65, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80" },
    { name: "Oxford Shirt", price: 52, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" },
    { name: "Urban Hoodie", price: 57, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=900&q=80" },
  ],
  women: [
    { name: "Flow Midi Dress", price: 92, image: "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?auto=format&fit=crop&w=900&q=80" },
    { name: "Pleated Maxi Skirt", price: 83, image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?auto=format&fit=crop&w=900&q=80" },
    { name: "Silk Blouse", price: 74, image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80" },
    { name: "Tailored Blazer", price: 119, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80" },
  ],
  kids: [
    { name: "Comfy Cotton Set", price: 38, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80" },
    { name: "Kids Denim Overall", price: 44, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80" },
    { name: "Rainbow Hoodie", price: 35, image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80" },
    { name: "Sporty Jogger", price: 31, image: "https://images.unsplash.com/photo-1508020963102-c6c723be5764?auto=format&fit=crop&w=900&q=80" },
  ],
};

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

  function drawOrders() {
    ordersContainer.innerHTML = orders
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
        const selected = orders.find((order) => order.id === btn.dataset.id);
        if (!selected) return;
        modalOrderId.textContent = `Order ${selected.id}`;
        modalMeta.textContent = `${selected.date} | ${selected.status} | Total: $${selected.total}`;
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
        <img class="product-image" src="${product.image}" alt="${product.name}" />
        <div class="product-body">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-meta">
            <span class="price">$${product.price}</span>
            <button class="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

renderProfilePage();
renderOrdersPage();
renderCategoryPage();
