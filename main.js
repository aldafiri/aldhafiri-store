let activeCategory = "الكل";
const grid = document.getElementById("productsGrid");

function renderProducts(){
  const query = document.getElementById("search").value.trim().toLowerCase();
  const shown = products.filter(p =>
    (activeCategory === "الكل" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.category.toLowerCase().includes(query))
  );
  document.getElementById("productCount").textContent = shown.length + " منتجات";
  
  grid.innerHTML = shown.length ? shown.map(p => `
    <article class="product" onclick="showProductDetails(${p.id})">
      <div class="product-art" style="--glow:${p.glow}">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${p.name}</h3><div class="desc">${p.desc}</div>
        <div class="product-bottom"><span class="price">${money(p.price)}</span>
        <button class="btn add" data-add="${p.id}" aria-label="أضف ${p.name} إلى السلة" onclick="event.stopPropagation(); addToCart(${p.id})">＋</button></div>
      </div>
    </article>`).join("") : `<p class="empty">ما لقينا منتجات تطابق بحثك.</p>`;
}

document.getElementById("filters").addEventListener("click", e => {
  const button = e.target.closest("[data-category]");
  if(!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
  renderProducts();
});

document.getElementById("search").addEventListener("input", renderProducts);

// فتح وإغلاق السلة
const overlay = document.getElementById("cartOverlay");
document.getElementById("openCart").addEventListener("click", () => overlay.classList.add("show"));
document.getElementById("closeCart").addEventListener("click", () => overlay.classList.remove("show"));
overlay.addEventListener("click", e => { if(e.target === overlay) overlay.classList.remove("show"); });

// إتمام الطلب
const checkoutModal = document.getElementById("checkoutModal");
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(!Object.keys(cart).length){ toast("أضف منتجًا إلى السلة أولًا"); return; }
  overlay.classList.remove("show");
  checkoutModal.classList.add("show");
});
document.getElementById("closeCheckout").addEventListener("click", () => checkoutModal.classList.remove("show"));

function submitOrder(e) {
  e.preventDefault();
  checkoutModal.classList.remove("show");
  cart = {};
  saveCart();
  renderCart();
  toast("🎉 تم استلام طلبك بنجاح! رقم الطلب #DH-" + Math.floor(1000 + Math.random() * 9000));
}

// صفحة تفاصيل المنتج مع (عداد المخزون + زر المشاركة)
const productsSection = document.getElementById("products");
const whyUsSection = document.getElementById("why-us");
const heroSection = document.querySelector(".hero");
const detailsSection = document.getElementById("productDetails");
const detailsContent = document.getElementById("detailsContent");

function showProductDetails(productId) {
  const p = products.find(item => item.id === Number(productId));
  if (!p) return;

  detailsContent.innerHTML = `
    <div style="text-align: center; background: radial-gradient(circle at 50% 60%, ${p.glow} 0, transparent 65%), #090c15; border-radius: 16px; padding: 40px; height: 350px; display: grid; place-items: center; position: relative;">
      <img src="${p.image}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; filter: drop-shadow(0 12px 16px #000a);">
    </div>
    <div>
      <span class="eyebrow" style="margin-bottom: 10px;">${p.category}</span>
      <h1 style="font-size: 2rem; margin: 10px 0;">${p.name}</h1>
      <p style="color: var(--muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 15px;">${p.desc} - مصمم خصيصاً ليمنحك احترافية مطلقة وتجربة قيمنق لا تُنسى مع ضمان كامل.</p>
      
      <!-- عداد المخزون الوهمي -->
      <div style="color: #ffaa00; font-size: 0.9rem; margin-bottom: 15px; font-weight: bold;">
        ⚠️ المتبقي ${ (p.id % 4) + 2 } قطع فقط في المخزون! اطلب الآن قبل نفاد الكمية.
      </div>

      <div style="font-size: 1.6rem; font-weight: 900; margin-bottom: 20px; color: var(--green);">${money(p.price)}</div>
      
      <div style="display: flex; gap: 10px; align-items: center;">
        <button class="btn" onclick="addToCart(${p.id})" style="padding: 12px 25px; font-size: 1rem; flex: 1;">إضافة إلى السلة 🛒</button>
        <button onclick="shareProduct('${p.name}')" class="icon-btn" style="padding: 12px 18px; font-size: 1.1rem;" title="مشاركة المنتج">🔗</button>
      </div>
    </div>
  `;

  const related = products.filter(item => item.id !== p.id).slice(0, 4);
  document.getElementById("relatedProductsGrid").innerHTML = related.map(rel => `
    <article class="product" onclick="showProductDetails(${rel.id})" style="cursor:pointer;">
      <div class="product-art" style="--glow:${rel.glow}">
        <img src="${rel.image}" alt="${rel.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${rel.name}</h3>
        <div class="product-bottom"><span class="price">${money(rel.price)}</span></div>
      </div>
    </article>
  `).join("");

  heroSection.style.display = "none";
  productsSection.style.display = "none";
  whyUsSection.style.display = "none";
  detailsSection.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// دالة مشاركة المنتج
function shareProduct(name) {
  navigator.clipboard.writeText(window.location.href);
  toast(`🔗 تم نسخ رابط منتج (${name}) للحافظة!`);
}

document.getElementById("backToHome").addEventListener("click", () => {
  detailsSection.style.display = "none";
  heroSection.style.display = "block";
  productsSection.style.display = "block";
  whyUsSection.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();