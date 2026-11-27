/* =========================================================
   OPTIVUE – Eyewear Prescription Glasses Frame Selector
   Beginner-friendly Vanilla JavaScript
   ========================================================= */

// ---------------------------------------------------------
// 1. HELPER FUNCTION: GENERATE CLEAN SVG EYEWEAR IMAGES
// Creates an inline SVG data URL matching each frame shape
// so images always load reliably without external files.
// ---------------------------------------------------------
function createFrameImage(shape, strokeColor, fillTint) {
  let lensesMarkup = "";

  if (shape === "Round") {
    lensesMarkup = `
      <circle cx="88" cy="78" r="36" fill="${fillTint}" stroke="${strokeColor}" stroke-width="5.5" />
      <circle cx="192" cy="78" r="36" fill="${fillTint}" stroke="${strokeColor}" stroke-width="5.5" />
      <path d="M124 75 C132 67, 148 67, 156 75" fill="none" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
      <line x1="24" y1="72" x2="52" y2="72" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
      <line x1="228" y1="72" x2="256" y2="72" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
    `;
  } else if (shape === "Wayfarer") {
    lensesMarkup = `
      <path d="M46 54 H126 L120 104 C118 112, 108 116, 86 116 C62 116, 52 110, 50 100 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="6" stroke-linejoin="round" />
      <path d="M154 54 H234 L230 100 C228 110, 218 116, 194 116 C172 116, 162 112, 160 104 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="6" stroke-linejoin="round" />
      <path d="M126 62 H154" stroke="${strokeColor}" stroke-width="6" stroke-linecap="round" />
      <line x1="22" y1="58" x2="46" y2="58" stroke="${strokeColor}" stroke-width="6" stroke-linecap="round" />
      <line x1="234" y1="58" x2="258" y2="58" stroke="${strokeColor}" stroke-width="6" stroke-linecap="round" />
    `;
  } else if (shape === "Aviator") {
    lensesMarkup = `
      <path d="M48 54 C72 48, 114 48, 126 64 C130 92, 114 118, 86 118 C60 118, 44 96, 48 54 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round" />
      <path d="M232 54 C208 48, 166 48, 154 64 C150 92, 166 118, 194 118 C220 118, 236 96, 232 54 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round" />
      <line x1="122" y1="53" x2="158" y2="53" stroke="${strokeColor}" stroke-width="3.5" stroke-linecap="round" />
      <path d="M126 66 C134 60, 146 60, 154 66" fill="none" stroke="${strokeColor}" stroke-width="3.5" stroke-linecap="round" />
      <line x1="22" y1="58" x2="48" y2="58" stroke="${strokeColor}" stroke-width="4" stroke-linecap="round" />
      <line x1="232" y1="58" x2="258" y2="58" stroke="${strokeColor}" stroke-width="4" stroke-linecap="round" />
    `;
  } else {
    // Cat-Eye
    lensesMarkup = `
      <path d="M40 48 C68 56, 108 56, 126 68 C126 98, 108 114, 82 114 C56 114, 44 94, 40 48 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="5.5" stroke-linejoin="round" />
      <path d="M240 48 C212 56, 172 56, 154 68 C154 98, 172 114, 198 114 C224 114, 236 94, 240 48 Z" fill="${fillTint}" stroke="${strokeColor}" stroke-width="5.5" stroke-linejoin="round" />
      <path d="M126 68 C134 62, 146 62, 154 68" fill="none" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
      <line x1="22" y1="52" x2="42" y2="52" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
      <line x1="238" y1="52" x2="258" y2="52" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
    `;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 155">
      <rect width="280" height="155" rx="10" fill="#FAF8F4" />
      ${lensesMarkup}
    </svg>
  `;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
}

// ---------------------------------------------------------
// 2. SAMPLE EYEWEAR FRAMES DATA
// ---------------------------------------------------------
const framesData = [
  {
    id: 1,
    name: "Aurelia Round",
    shape: "Round",
    material: "Acetate",
    price: 119,
    featured: true,
    description: "Classic keyhole bridge in warm espresso acetate.",
    image: createFrameImage("Round", "#222222", "rgba(255,255,255,0.65)")
  },
  {
    id: 2,
    name: "Soho Classic",
    shape: "Wayfarer",
    material: "Acetate",
    price: 129,
    featured: true,
    description: "Structured everyday silhouette with balanced weight.",
    image: createFrameImage("Wayfarer", "#111111", "rgba(255,255,255,0.65)")
  },
  {
    id: 3,
    name: "Aero Minimal",
    shape: "Aviator",
    material: "Titanium",
    price: 159,
    featured: true,
    description: "Featherlight double-bridge titanium for all-day wear.",
    image: createFrameImage("Aviator", "#4B463F", "rgba(255,255,255,0.55)")
  },
  {
    id: 4,
    name: "Verve Cat-Eye",
    shape: "Cat-Eye",
    material: "Acetate",
    price: 135,
    featured: true,
    description: "Softly upswept corners that frame the browline.",
    image: createFrameImage("Cat-Eye", "#1C1A17", "rgba(255,255,255,0.65)")
  },
  {
    id: 5,
    name: "Nordic Wire",
    shape: "Round",
    material: "Titanium",
    price: 149,
    featured: false,
    description: "Slim matte-black titanium rims with nose pads.",
    image: createFrameImage("Round", "#3A3A3A", "rgba(245,241,234,0.7)")
  },
  {
    id: 6,
    name: "Metro Edge",
    shape: "Wayfarer",
    material: "Titanium",
    price: 155,
    featured: false,
    description: "Modern angular wayfarer engineered in pure titanium.",
    image: createFrameImage("Wayfarer", "#333333", "rgba(245,241,234,0.7)")
  },
  {
    id: 7,
    name: "Solis Heritage",
    shape: "Aviator",
    material: "Acetate",
    price: 125,
    featured: false,
    description: "Vintage-inspired navigator shape in dark tortoiseshell.",
    image: createFrameImage("Aviator", "#3E2C1E", "rgba(255,255,255,0.6)")
  },
  {
    id: 8,
    name: "Lumina Sculpt",
    shape: "Cat-Eye",
    material: "Titanium",
    price: 165,
    featured: false,
    description: "Ultra-light sculpted cat-eye ideal for high-index lenses.",
    image: createFrameImage("Cat-Eye", "#524B42", "rgba(245,241,234,0.7)")
  }
];

// Educational details for the 5 prescription lens indexes
const lensIndexGuide = [
  {
    index: "1.50",
    title: "1.50 – Standard Lens",
    rangeLabel: "0.00 to ±1.75",
    description:
      "Classic optical plastic offering crisp clarity and great value for mild prescriptions."
  },
  {
    index: "1.56",
    title: "1.56 – Mid Index Lens",
    rangeLabel: "±2.00 to ±3.75",
    description:
      "Slightly thinner and lighter than 1.50 standard lenses; great for low-to-moderate powers."
  },
  {
    index: "1.60",
    title: "1.60 – Thin Lens",
    rangeLabel: "±4.00 to ±5.75",
    description:
      "Noticeably slimmer profile and durable build for moderate prescriptions and daily comfort."
  },
  {
    index: "1.67",
    title: "1.67 – High Index Lens",
    rangeLabel: "±6.00 to ±7.75",
    description:
      "Significantly reduces lens edge thickness and weight for strong prescriptions."
  },
  {
    index: "1.74",
    title: "1.74 – Ultra Thin Lens",
    rangeLabel: "±8.00 and above",
    description:
      "The thinnest high-index lens option available, ideal for very strong prescriptions."
  }
];

// ---------------------------------------------------------
// 3. APPLICATION STATE & DOM REFERENCES
// ---------------------------------------------------------
let selectedShape = "All";
let selectedMaterial = "All";
let searchQuery = "";
let cart = [];

const featuredGrid = document.getElementById("featuredGrid");
const framesGrid = document.getElementById("framesGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const shapeFilterGroup = document.getElementById("shapeFilterGroup");
const materialFilterGroup = document.getElementById("materialFilterGroup");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");

const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.getElementById("navLinks");
const menuToggleBtn = document.getElementById("menuToggleBtn");

const cartCountEl = document.getElementById("cartCount");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartFeedbackEl = document.getElementById("cartFeedback");
const toastEl = document.getElementById("toast");

const lensForm = document.getElementById("lensForm");
const sampleRxBtn = document.getElementById("sampleRxBtn");
const formErrorEl = document.getElementById("formError");
const resultPlaceholder = document.getElementById("resultPlaceholder");
const resultOutput = document.getElementById("resultOutput");
const recommendedTitle = document.getElementById("recommendedTitle");
const recommendedReason = document.getElementById("recommendedReason");
const rxSummary = document.getElementById("rxSummary");
const indexCards = document.getElementById("indexCards");

// ---------------------------------------------------------
// 4. RENDER PRODUCT CARDS (FEATURED & CATALOGUE)
// ---------------------------------------------------------
function createProductCardHTML(frame) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <span class="product-tag">${frame.material}</span>
        <img src="${frame.image}" alt="${frame.name} - ${frame.shape} ${frame.material} eyeglasses" />
      </div>
      <div class="product-body">
        <p class="product-meta">${frame.shape} Frame</p>
        <h3 class="product-title">${frame.name}</h3>
        <p class="product-desc">${frame.description}</p>
        <div class="product-footer">
          <span class="product-price">$${frame.price}</span>
          <button type="button" class="add-cart-btn" data-id="${frame.id}">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

// Render the 4 featured products on the homepage
function renderFeaturedFrames() {
  const featured = framesData.filter((frame) => frame.featured);
  featuredGrid.innerHTML = featured.map(createProductCardHTML).join("");
}

// Filter and render frames in the Eyewear Frame Catalogue
function renderCatalogue() {
  const query = searchQuery.trim().toLowerCase();

  const filteredFrames = framesData.filter((frame) => {
    const matchesShape = selectedShape === "All" || frame.shape === selectedShape;
    const matchesMaterial =
      selectedMaterial === "All" || frame.material === selectedMaterial;
    const matchesSearch =
      query === "" ||
      frame.name.toLowerCase().includes(query) ||
      frame.shape.toLowerCase().includes(query) ||
      frame.material.toLowerCase().includes(query);

    return matchesShape && matchesMaterial && matchesSearch;
  });

  if (filteredFrames.length === 0) {
    framesGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    framesGrid.innerHTML = filteredFrames.map(createProductCardHTML).join("");
  }

  resultsCount.textContent = `Showing ${filteredFrames.length} of ${framesData.length} frames`;
}

// Reset all shape, material, and search filters
function resetAllFilters() {
  selectedShape = "All";
  selectedMaterial = "All";
  searchQuery = "";
  searchInput.value = "";

  updateActiveFilterButton(shapeFilterGroup, "All", "shape");
  updateActiveFilterButton(materialFilterGroup, "All", "material");
  renderCatalogue();
}

function updateActiveFilterButton(groupElement, activeValue, dataKey) {
  const buttons = groupElement.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    if (btn.dataset[dataKey] === activeValue) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// ---------------------------------------------------------
// 5. NAVIGATION & SECTION HIGHLIGHTING
// ---------------------------------------------------------
function setupNavigation() {
  // Mobile hamburger menu toggle
  menuToggleBtn.addEventListener("click", () => {
    const isOpen = navLinksContainer.classList.toggle("open");
    menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Update active link on click & close mobile menu
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      navLinksContainer.classList.remove("open");
      menuToggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight active navigation link automatically while scrolling
  const sections = document.querySelectorAll("main section[id]");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  });
}

// ---------------------------------------------------------
// 6. SHOPPING CART LOGIC
// ---------------------------------------------------------
function addToCart(frameId) {
  const frame = framesData.find((item) => item.id === frameId);
  if (!frame) return;

  const existingItem = cart.find((item) => item.id === frameId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...frame, quantity: 1 });
  }

  updateCartUI();
  showToast(`Added "${frame.name}" to your cart`);
}

function removeFromCart(frameId) {
  cart = cart.filter((item) => item.id !== frameId);
  updateCartUI();
}

function updateCartUI() {
  // Update total item count badge in navbar
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalCount;

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalEl.textContent = `$${totalPrice}`;

  // Hide previous checkout message when cart changes
  cartFeedbackEl.classList.add("hidden");

  // Render items inside the cart drawer
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your cart is empty. Explore frames to add one.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.shape} &bull; ${item.material} &bull; Qty: ${item.quantity}</p>
          <p><strong>$${item.price * item.quantity}</strong></p>
        </div>
        <button type="button" class="remove-item-btn" data-remove-id="${item.id}">
          Remove
        </button>
      </div>
    `
    )
    .join("");
}

function openCartDrawer() {
  cartOverlay.classList.remove("hidden");
  cartOverlay.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartOverlay.classList.add("hidden");
  cartOverlay.setAttribute("aria-hidden", "true");
}

let toastTimer = null;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 2400);
}

// ---------------------------------------------------------
// 7. PRESCRIPTION LENS SELECTOR (VALIDATION + RECOMMENDATION)
// ---------------------------------------------------------
function validatePrescription(rightSph, leftSph, cyl, axis, pd) {
  if (
    Number.isNaN(rightSph) ||
    Number.isNaN(leftSph) ||
    Number.isNaN(cyl) ||
    Number.isNaN(axis) ||
    Number.isNaN(pd)
  ) {
    return "Please fill in all five prescription fields before clicking Find My Lens.";
  }

  if (rightSph < -12 || rightSph > 10 || leftSph < -12 || leftSph > 10) {
    return "SPH values must be between -12.00 and +10.00 diopters.";
  }

  if (cyl < -6 || cyl > 6) {
    return "CYL value must be between -6.00 and +6.00 diopters.";
  }

  if (axis < 0 || axis > 180) {
    return "Axis must be between 0 and 180 degrees.";
  }

  if (cyl !== 0 && axis === 0) {
    return "When CYL is non-zero, please enter an Axis value between 1 and 180 degrees.";
  }

  if (pd < 48 || pd > 80) {
    return "Pupillary Distance (PD) should be between 48 mm and 80 mm.";
  }

  return "";
}

// Determine the suggested lens index using beginner-friendly if / else if rules
function getRecommendedLensIndex(rightSph, leftSph, cyl) {
  // Find the stronger eye power and factor in half of any cylinder astigmatism
  const strongerSph = Math.max(Math.abs(rightSph), Math.abs(leftSph));
  const effectivePower = strongerSph + Math.abs(cyl) * 0.5;

  if (effectivePower <= 1.75) {
    return {
      index: "1.50",
      reason:
        "Your prescription is in the mild range, so a 1.50 Standard Lens provides clear vision without unnecessary extra thickness."
    };
  } else if (effectivePower <= 3.75) {
    return {
      index: "1.56",
      reason:
        "For a low-to-moderate prescription, a 1.56 Mid Index Lens trims edge thickness and keeps your glasses comfortable."
    };
  } else if (effectivePower <= 5.75) {
    return {
      index: "1.60",
      reason:
        "Your moderate prescription benefits from a 1.60 Thin Lens, giving noticeably slimmer edges and lighter weight."
    };
  } else if (effectivePower <= 7.75) {
    return {
      index: "1.67",
      reason:
        "With a stronger prescription, a 1.67 High Index Lens significantly reduces edge thickness and lens magnification."
    };
  } else {
    return {
      index: "1.74",
      reason:
        "For a very high prescription, a 1.74 Ultra Thin Lens offers the slimmest, lightest profile available."
    };
  }
}

function formatDiopter(value) {
  const fixed = value.toFixed(2);
  return value > 0 ? `+${fixed}` : fixed;
}

function handleLensFormSubmit(event) {
  event.preventDefault();

  const rightSph = parseFloat(document.getElementById("rightSph").value);
  const leftSph = parseFloat(document.getElementById("leftSph").value);
  const cyl = parseFloat(document.getElementById("cylValue").value);
  const axis = parseFloat(document.getElementById("axisValue").value);
  const pd = parseFloat(document.getElementById("pdValue").value);

  // Step 1: Validate inputs
  const errorMessage = validatePrescription(rightSph, leftSph, cyl, axis, pd);
  if (errorMessage) {
    formErrorEl.textContent = errorMessage;
    formErrorEl.classList.remove("hidden");
    return;
  }

  formErrorEl.classList.add("hidden");

  // Step 2: Calculate recommendation
  const recommendation = getRecommendedLensIndex(rightSph, leftSph, cyl);
  const matchedGuide = lensIndexGuide.find((item) => item.index === recommendation.index);

  // Step 3: Display recommendation and educational cards
  resultPlaceholder.classList.add("hidden");
  resultOutput.classList.remove("hidden");

  recommendedTitle.textContent = matchedGuide.title;
  recommendedReason.textContent = recommendation.reason;

  const pdNote =
    pd < 58
      ? "Smaller PD — compact round or narrow frames help center your eyes nicely."
      : pd > 68
      ? "Wider PD — medium-to-wide frames like Wayfarer or Aviator offer great alignment."
      : "Standard adult PD — compatible with most frame widths.";

  rxSummary.innerHTML = `
    <strong>Entered Rx:</strong>
    Right SPH <strong>${formatDiopter(rightSph)}</strong> &bull;
    Left SPH <strong>${formatDiopter(leftSph)}</strong> &bull;
    CYL <strong>${formatDiopter(cyl)}</strong> &bull;
    Axis <strong>${axis}&deg;</strong> &bull;
    PD <strong>${pd} mm</strong>
    <br />
    <span>${pdNote}</span>
  `;

  indexCards.innerHTML = lensIndexGuide
    .map((item) => {
      const isRecommended = item.index === recommendation.index;
      return `
        <div class="index-card ${isRecommended ? "recommended" : ""}">
          <div class="index-card-top">
            <strong>${item.title} ${isRecommended ? "(Suggested)" : ""}</strong>
            <span class="index-range">${item.rangeLabel}</span>
          </div>
          <p>${item.description}</p>
        </div>
      `;
    })
    .join("");
}

// ---------------------------------------------------------
// 8. EVENT LISTENERS & INITIALIZATION
// ---------------------------------------------------------
function init() {
  renderFeaturedFrames();
  renderCatalogue();
  setupNavigation();
  updateCartUI();

  // Shape filter button clicks
  shapeFilterGroup.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    selectedShape = button.dataset.shape;
    updateActiveFilterButton(shapeFilterGroup, selectedShape, "shape");
    renderCatalogue();
  });

  // Material filter button clicks
  materialFilterGroup.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    selectedMaterial = button.dataset.material;
    updateActiveFilterButton(materialFilterGroup, selectedMaterial, "material");
    renderCatalogue();
  });

  // Live product search input
  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderCatalogue();
  });

  // Reset / Clear filter buttons
  resetFiltersBtn.addEventListener("click", resetAllFilters);
  clearSearchBtn.addEventListener("click", resetAllFilters);

  // Add to cart button clicks (event delegation for both featured and catalogue grids)
  document.addEventListener("click", (event) => {
    const addBtn = event.target.closest(".add-cart-btn");
    if (addBtn) {
      const frameId = Number(addBtn.dataset.id);
      addToCart(frameId);
      return;
    }

    const removeBtn = event.target.closest(".remove-item-btn");
    if (removeBtn) {
      const frameId = Number(removeBtn.dataset.removeId);
      removeFromCart(frameId);
    }
  });

  // Cart drawer controls
  cartToggleBtn.addEventListener("click", openCartDrawer);
  closeCartBtn.addEventListener("click", closeCartDrawer);
  cartOverlay.addEventListener("click", (event) => {
    if (event.target === cartOverlay) {
      closeCartDrawer();
    }
  });

  clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      cartFeedbackEl.textContent = "Please add at least one frame to confirm your selection.";
    } else {
      cartFeedbackEl.textContent =
        "Frame selection saved for your optician visit! (Demo project – no payment processed.)";
    }
    cartFeedbackEl.classList.remove("hidden");
  });

  // Prescription form submit & sample fill button
  lensForm.addEventListener("submit", handleLensFormSubmit);

  sampleRxBtn.addEventListener("click", () => {
    document.getElementById("rightSph").value = "-4.25";
    document.getElementById("leftSph").value = "-3.75";
    document.getElementById("cylValue").value = "-0.75";
    document.getElementById("axisValue").value = "90";
    document.getElementById("pdValue").value = "63";
    formErrorEl.classList.add("hidden");
  });
}

// Start the app when the DOM is ready
document.addEventListener("DOMContentLoaded", init);
