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

renderProfilePage();
renderOrdersPage();
