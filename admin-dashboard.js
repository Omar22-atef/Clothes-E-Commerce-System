const productForm = document.getElementById("productForm");
const productsTableBody = document.getElementById("productsTableBody");
const productSubmit = document.getElementById("productSubmit");
const productCancel = document.getElementById("productCancel");
const productImageInput = document.getElementById("productImage");
const productImageData = document.getElementById("productImageData");
const imagePreview = document.getElementById("imagePreview");
const imagePlaceholder = document.getElementById("imagePlaceholder");
const clearImageBtn = document.getElementById("clearImage");

const userForm = document.getElementById("userForm");
const usersTableBody = document.getElementById("usersTableBody");
const userSubmit = document.getElementById("userSubmit");
const userCancel = document.getElementById("userCancel");

const statProducts = document.getElementById("statProducts");
const statLowStock = document.getElementById("statLowStock");
const statUsers = document.getElementById("statUsers");
const statInventoryValue = document.getElementById("statInventoryValue");
const activityList = document.getElementById("activityList");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

const MAX_IMAGE_BYTES = 1.5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif"
]);

const ACTIVITY_KEY = "adminActivity";
let activity = [];

let products = [];
let users = [];

function createId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function loadStorage() {
  try {
    products = JSON.parse(localStorage.getItem("adminProducts")) || [];
  } catch {
    products = [];
  }
  try {
    users = JSON.parse(localStorage.getItem("adminUsers")) || [];
  } catch {
    users = [];
  }
  try {
    activity = JSON.parse(localStorage.getItem(ACTIVITY_KEY)) || [];
  } catch {
    activity = [];
  }
}

function migrateProducts() {
  products = products.map((p) => ({
    ...p,
    image: typeof p.image === "string" ? p.image : ""
  }));
  saveProducts();
}

function saveProducts() {
  localStorage.setItem("adminProducts", JSON.stringify(products));
}

function saveUsers() {
  localStorage.setItem("adminUsers", JSON.stringify(users));
}

function saveActivity() {
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity));
}

function escapeHtml(s) {
  if (s == null) {
    return "";
  }
  const div = document.createElement("div");
  div.textContent = String(s);
  return div.innerHTML;
}

function logActivity(message) {
  activity.unshift({ id: createId(), t: Date.now(), message });
  activity = activity.slice(0, 20);
  saveActivity();
  renderActivity();
}

function renderActivity() {
  if (!activityList) {
    return;
  }
  if (!activity.length) {
    activityList.innerHTML = "<li><span class=\"activity-time\">—</span>No activity yet. Changes you make will show here.</li>";
    return;
  }
  activityList.innerHTML = activity
    .slice(0, 8)
    .map((a) => {
      const d = new Date(a.t);
      return `<li><span class="activity-time">${escapeHtml(d.toLocaleString())}</span>${escapeHtml(a.message)}</li>`;
    })
    .join("");
}

function updateStats() {
  const n = products.length;
  const low = products.filter((p) => Number(p.stock) < 5).length;
  const u = users.length;
  const value = products.reduce(
    (sum, p) => sum + Number(p.price) * Number(p.stock),
    0
  );
  if (statProducts) {
    statProducts.textContent = String(n);
  }
  if (statLowStock) {
    statLowStock.textContent = String(low);
  }
  if (statUsers) {
    statUsers.textContent = String(u);
  }
  if (statInventoryValue) {
    statInventoryValue.textContent = `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })}`;
  }
}

function setImagePreviewFromDataUrl(dataUrl) {
  if (!dataUrl) {
    imagePreview.setAttribute("hidden", "");
    imagePreview.removeAttribute("src");
    imagePlaceholder.removeAttribute("hidden");
    return;
  }
  imagePreview.src = dataUrl;
  imagePreview.removeAttribute("hidden");
  imagePlaceholder.setAttribute("hidden", "");
}

function clearImageUi() {
  productImageData.value = "";
  if (productImageInput) {
    productImageInput.value = "";
  }
  setImagePreviewFromDataUrl("");
}

function clearErrors(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = "";
    }
  });
}

function setError(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = message;
  }
}

function validateProduct() {
  clearErrors([
    "productNameError",
    "productCategoryError",
    "productPriceError",
    "productStockError",
    "productImageError"
  ]);

  const name = document.getElementById("productName").value.trim();
  const category = document.getElementById("productCategory").value;
  const price = document.getElementById("productPrice").value.trim();
  const stock = document.getElementById("productStock").value.trim();
  const imageData = productImageData.value.trim();

  let valid = true;

  if (name.length < 3) {
    setError("productNameError", "Name must be at least 3 characters.");
    valid = false;
  }

  if (!category) {
    setError("productCategoryError", "Please choose a category.");
    valid = false;
  }

  if (!price || Number(price) <= 0) {
    setError("productPriceError", "Price must be greater than 0.");
    valid = false;
  }

  if (stock === "" || Number(stock) < 0 || !Number.isInteger(Number(stock))) {
    setError("productStockError", "Stock must be a whole number 0 or more.");
    valid = false;
  }

  if (!imageData) {
    setError("productImageError", "Please upload a product image (or keep the current one when editing).");
    valid = false;
  }

  return valid;
}

function validateUser() {
  clearErrors(["userNameError", "userEmailError", "userRoleError"]);

  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const role = document.getElementById("userRole").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  if (name.length < 3) {
    setError("userNameError", "Name must be at least 3 characters.");
    valid = false;
  }

  if (!emailRegex.test(email)) {
    setError("userEmailError", "Enter a valid email address.");
    valid = false;
  }

  if (!role) {
    setError("userRoleError", "Please choose a role.");
    valid = false;
  }

  return valid;
}

function renderProducts() {
  if (!products.length) {
    productsTableBody.innerHTML = `
      <tr>
        <td class="empty" colspan="6">No products added yet.</td>
      </tr>
    `;
    updateStats();
    return;
  }

  productsTableBody.innerHTML = products
    .map((product) => {
      const imgCell = product.image
        ? `<img class="cell-thumb" src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">`
        : "<div class=\"thumb-fallback\">No image</div>";
      return `
        <tr>
          <td>${imgCell}</td>
          <td>${escapeHtml(product.name)}</td>
          <td>${escapeHtml(product.category)}</td>
          <td>$${Number(product.price).toFixed(2)}</td>
          <td>${escapeHtml(String(product.stock))}</td>
          <td>
            <div class="row-actions">
              <button type="button" class="text-btn edit" data-action="edit-product" data-id="${escapeHtml(product.id)}">Edit</button>
              <button type="button" class="text-btn delete" data-action="delete-product" data-id="${escapeHtml(product.id)}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  updateStats();
}

function renderUsers() {
  if (!users.length) {
    usersTableBody.innerHTML = `
      <tr>
        <td class="empty" colspan="4">No users added yet.</td>
      </tr>
    `;
    updateStats();
    return;
  }

  usersTableBody.innerHTML = users
    .map(
      (user) => `
        <tr>
          <td>${escapeHtml(user.name)}</td>
          <td>${escapeHtml(user.email)}</td>
          <td>${escapeHtml(user.role)}</td>
          <td>
            <div class="row-actions">
              <button type="button" class="text-btn edit" data-action="edit-user" data-id="${escapeHtml(user.id)}">Edit</button>
              <button type="button" class="text-btn delete" data-action="delete-user" data-id="${escapeHtml(user.id)}">Delete</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");

  updateStats();
}

function resetProductForm() {
  productForm.reset();
  document.getElementById("productId").value = "";
  clearImageUi();
  clearErrors([
    "productNameError",
    "productCategoryError",
    "productPriceError",
    "productStockError",
    "productImageError"
  ]);
  productSubmit.textContent = "Add product";
  productCancel.classList.add("hidden");
}

function resetUserForm() {
  userForm.reset();
  document.getElementById("userId").value = "";
  clearErrors(["userNameError", "userEmailError", "userRoleError"]);
  userSubmit.textContent = "Add user";
  userCancel.classList.add("hidden");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

if (productImageInput) {
  productImageInput.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      return;
    }
    clearErrors(["productImageError"]);
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      setError("productImageError", "Use JPEG, PNG, WebP, or GIF.");
      productImageInput.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setError("productImageError", "Image must be 1.5 MB or smaller.");
      productImageInput.value = "";
      return;
    }
    try {
      const dataUrl = await readFileAsDataUrl(file);
      productImageData.value = dataUrl;
      setImagePreviewFromDataUrl(dataUrl);
    } catch {
      setError("productImageError", "Could not read that file. Try another image.");
    }
  });
}

if (clearImageBtn) {
  clearImageBtn.addEventListener("click", () => {
    clearImageUi();
    clearErrors(["productImageError"]);
  });
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateProduct()) {
    return;
  }

  const id = document.getElementById("productId").value;
  const image = productImageData.value.trim();
  const payload = {
    id: id || createId(),
    name: document.getElementById("productName").value.trim(),
    category: document.getElementById("productCategory").value,
    price: Number(document.getElementById("productPrice").value),
    stock: Number(document.getElementById("productStock").value),
    image
  };

  if (id) {
    products = products.map((item) => (item.id === id ? payload : item));
    logActivity(`Updated product: ${payload.name}`);
  } else {
    products.push(payload);
    logActivity(`Added product: ${payload.name}`);
  }

  saveProducts();
  renderProducts();
  resetProductForm();
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateUser()) {
    return;
  }

  const id = document.getElementById("userId").value;
  const payload = {
    id: id || createId(),
    name: document.getElementById("userName").value.trim(),
    email: document.getElementById("userEmail").value.trim(),
    role: document.getElementById("userRole").value
  };

  if (id) {
    users = users.map((item) => (item.id === id ? payload : item));
    logActivity(`Updated user: ${payload.email}`);
  } else {
    users.push(payload);
    logActivity(`Added user: ${payload.email} (${payload.role})`);
  }

  saveUsers();
  renderUsers();
  resetUserForm();
});

productCancel.addEventListener("click", resetProductForm);
userCancel.addEventListener("click", resetUserForm);

function editProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return;
  }

  document.getElementById("productId").value = product.id;
  document.getElementById("productName").value = product.name;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productStock").value = product.stock;
  productImageData.value = product.image || "";
  if (productImageInput) {
    productImageInput.value = "";
  }
  setImagePreviewFromDataUrl(product.image || "");

  productSubmit.textContent = "Update product";
  productCancel.classList.remove("hidden");
  clearErrors(["productImageError"]);
  location.hash = "#catalog";
  syncPageFromHash();
}

function deleteProduct(id) {
  const p = products.find((item) => item.id === id);
  products = products.filter((item) => item.id !== id);
  saveProducts();
  renderProducts();
  resetProductForm();
  if (p) {
    logActivity(`Deleted product: ${p.name}`);
  }
}

function editUser(id) {
  const user = users.find((item) => item.id === id);
  if (!user) {
    return;
  }

  document.getElementById("userId").value = user.id;
  document.getElementById("userName").value = user.name;
  document.getElementById("userEmail").value = user.email;
  document.getElementById("userRole").value = user.role;

  userSubmit.textContent = "Update user";
  userCancel.classList.remove("hidden");
  location.hash = "#team";
  syncPageFromHash();
}

function deleteUser(id) {
  const u = users.find((item) => item.id === id);
  users = users.filter((item) => item.id !== id);
  saveUsers();
  renderUsers();
  resetUserForm();
  if (u) {
    logActivity(`Removed user: ${u.email}`);
  }
}

function bindTableActions() {
  if (productsTableBody) {
    productsTableBody.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) {
        return;
      }
      const id = btn.getAttribute("data-id");
      if (!id) {
        return;
      }
      const action = btn.getAttribute("data-action");
      if (action === "edit-product") {
        editProduct(id);
      } else if (action === "delete-product") {
        deleteProduct(id);
      }
    });
  }
  if (usersTableBody) {
    usersTableBody.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) {
        return;
      }
      const id = btn.getAttribute("data-id");
      if (!id) {
        return;
      }
      const action = btn.getAttribute("data-action");
      if (action === "edit-user") {
        editUser(id);
      } else if (action === "delete-user") {
        deleteUser(id);
      }
    });
  }
}

const PAGE_TITLES = {
  "": "Dashboard",
  "#overview": "Dashboard",
  "#catalog": "Catalog",
  "#orders": "Orders",
  "#team": "Team"
};

function setNavActiveByHash() {
  const h = location.hash || "#overview";
  document.querySelectorAll(".nav-item").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === h);
  });
  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) {
    pageTitle.textContent = PAGE_TITLES[h] || "Dashboard";
  }
}

function syncPageFromHash() {
  setNavActiveByHash();
}

function openSidebar() {
  if (sidebar) {
    sidebar.classList.add("is-open");
  }
  if (sidebarBackdrop) {
    sidebarBackdrop.classList.add("is-open");
    sidebarBackdrop.removeAttribute("hidden");
  }
}

function closeSidebar() {
  if (sidebar) {
    sidebar.classList.remove("is-open");
  }
  if (sidebarBackdrop) {
    sidebarBackdrop.classList.remove("is-open");
    sidebarBackdrop.setAttribute("hidden", "");
  }
}

function setupSidebar() {
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      if (sidebar && sidebar.classList.contains("is-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }
  document.querySelectorAll(".nav-item").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        closeSidebar();
      }
    });
  });
}

function setupGreeting() {
  const el = document.getElementById("greeting");
  const t = new Date();
  if (el) {
    const h = t.getHours();
    const g =
      h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    el.textContent = g;
  }
  const timeEl = document.getElementById("todayDate");
  if (timeEl) {
    timeEl.setAttribute("datetime", t.toISOString().slice(0, 10));
    timeEl.textContent = t.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}

function setupHashNav() {
  window.addEventListener("hashchange", syncPageFromHash);
  if (!location.hash) {
    location.hash = "#overview";
  }
  syncPageFromHash();
}

function setupQuickActions() {
  const goCat = document.getElementById("goCatalog");
  const goTeam = document.getElementById("goTeam");
  const exp = document.getElementById("exportCatalog");
  if (goCat) {
    goCat.addEventListener("click", () => {
      location.hash = "#catalog";
      syncPageFromHash();
    });
  }
  if (goTeam) {
    goTeam.addEventListener("click", () => {
      location.hash = "#team";
      syncPageFromHash();
    });
  }
  if (exp) {
    exp.addEventListener("click", () => {
      if (typeof XLSX === "undefined") {
        alert("Excel library did not load. Check your network connection and try again.");
        return;
      }
      const header = [
        "ID",
        "Name",
        "Category",
        "Price (USD)",
        "Stock",
        "Has image"
      ];
      const rows = products.map((p) => [
        p.id,
        p.name,
        p.category,
        Number(p.price),
        Number(p.stock),
        p.image ? "Yes" : "No"
      ]);
      const aoa = [header, ...rows];
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Catalog");
      const filename = "modisch-catalog.xlsx";
      XLSX.writeFile(wb, filename);
      logActivity("Exported product catalog (Excel).");
    });
  }
  const addBtn = document.querySelector(".page-header .btn-header");
  if (addBtn) {
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      location.hash = "#catalog";
      syncPageFromHash();
      const nameInput = document.getElementById("productName");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 300);
      }
    });
  }
}

/* Initial data */
loadStorage();
migrateProducts();

if (!products.length) {
  products = [
    {
      id: createId(),
      name: "Classic denim jacket",
      category: "Men",
      price: 89,
      stock: 36,
      image: ""
    }
  ];
  saveProducts();
}

if (!users.length) {
  users = [
    {
      id: createId(),
      name: "Admin user",
      email: "admin@modisch.com",
      role: "Admin"
    }
  ];
  saveUsers();
}

bindTableActions();
setupGreeting();
setupHashNav();
setupSidebar();
setupQuickActions();
renderActivity();
renderProducts();
renderUsers();
