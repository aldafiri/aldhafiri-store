// قائمة المنتجات مع الصور الحقيقية الواقعية
const products = [
  {id:1, name:"جهاز ألعاب PlayStation 5", desc:"تجربة لعب غامرة بجودة عالية وسرعة فائقة", price:1999, category:"أجهزة", image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80", glow:"#174fa7", tag:"الأكثر طلبًا"},
  {id:2, name:"جهاز ألعاب Xbox Series X", desc:"أداء قوي ورسومات مذهلة لعالم الألعاب", price:1799, category:"أجهزة", image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80", glow:"#155e42", tag:"مميز"},
  {id:3, name:"كمبيوتر قيمنق RGB", desc:"قوة أداء خارقة وأضواء ملونة قابلة للتخصيص", price:4299, category:"كمبيوتر", image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80", glow:"#5b237e", tag:"احترافي"},
  {id:4, name:"سماعة ألعاب احترافية", desc:"صوت محيطي نقي وراحة فائقة للاستخدام الطويل", price:249, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80", glow:"#174a88", tag:""},
  {id:5, name:"كيبورد ميكانيكي RGB", desc:"استجابة سريعة ومفاتيح ميكانيكية متينة بإضاءة مذهلة", price:329, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80", glow:"#70204e", tag:""},
  {id:6, name:"ماوس قيمنق احترافي", desc:"تحكم دقيق وحساسية عالية مصمم لتكون الأسرع", price:159, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80", glow:"#154c78", tag:""},
  {id:7, name:"كرسي قيمنق مريح", desc:"دعم كامل للظهر والرقبة لجلسات اللعب الطويلة", price:699, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80", glow:"#1a3f78", tag:""},
  {id:8, name:"يد تحكم لاسلكية DualSense", desc:"تحكم مريح واهتزاز تفاعلي دقيق للألعاب", price:279, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80", glow:"#55318b", tag:"جديد"},
  {id:9, name:"شاشة قيمنق 27 بوصة", desc:"وضوح عالي التحديد بمعدل تحديث سريع لتجربة سلسة", price:1099, category:"كمبيوتر", image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80", glow:"#174fa7", tag:""},
  {id:10, name:"مايكروفون للبث المباشر", desc:"صوت نقي وواضح تماماً للبث والتواصل الاجتماعي", price:389, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80", glow:"#572b8b", tag:""},
  {id:11, name:"ماوس باد عريض RGB", desc:"سطح واسع وناعم بإضاءة محيطية ساحرة", price:119, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=500&q=80", glow:"#7b235f", tag:""},
  {id:12, name:"مقود سباقات تفاعلي", desc:"تجربة قيادة واقعية ومحاكية لعشاق ألعاب السيارات", price:899, category:"إكسسوارات", image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80", glow:"#174b56", tag:""}
];

let cart = {};
let activeCategory = "الكل";
const grid = document.getElementById("productsGrid");
const money = n => new Intl.NumberFormat("ar-SA").format(n) + " ر.س";

// عرض المنتجات في الشبكة
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

// دالة إضافة منتج للسلة
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  toast("تمت إضافة المنتج إلى السلة");
}

// عرض السلة وحساب الإجمالي
function renderCart(){
  const ids = Object.keys(cart).filter(id => cart[id] > 0);
  document.getElementById("cartCount").textContent = ids.reduce((sum,id)=>sum+cart[id],0);
  const host = document.getElementById("cartItems");
  if(!ids.length){host.innerHTML='<div class="empty">سلتك فارغة حاليًا 🛒</div>';document.getElementById("cartTotal").textContent=money(0);return;}
  host.innerHTML = ids.map(id => {
    const p=products.find(item=>item.id===Number(id));
    return `<div class="cart-item"><div><strong>${p.name}</strong><small>${money(p.price)} للقطعة</small></div>
      <div class="qty"><button data-minus="${p.id}" aria-label="تقليل الكمية">−</button><span>${cart[id]}</span><button data-plus="${p.id}" aria-label="زيادة الكمية">＋</button></div></div>`;
  }).join("");
  const total = ids.reduce((sum,id)=>sum+products.find(p=>p.id===Number(id)).price*cart[id],0);
  document.getElementById("cartTotal").textContent=money(total);
}

// التنبيهات (Toast)
function toast(message){
  const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");
  clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2300);
}

// إدارة كميات السلة داخل القائمة الجانبية
document.getElementById("cartItems").addEventListener("click",e=>{
  const plus=e.target.closest("[data-plus]"),minus=e.target.closest("[data-minus]");
  if(plus){const id=plus.dataset.plus;cart[id]=(cart[id]||0)+1;}
  if(minus){const id=minus.dataset.minus;cart[id]=(cart[id]||0)-1;if(cart[id]<=0)delete cart[id];}
  renderCart();
});

// الفلترة حسب الأقسام
document.getElementById("filters").addEventListener("click",e=>{
  const button=e.target.closest("[data-category]");if(!button)return;
  activeCategory=button.dataset.category;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===button));
  renderProducts();
});

// البحث الفوري
document.getElementById("search").addEventListener("input",renderProducts);

// فتح وإغلاق سلة المشتريات
const overlay=document.getElementById("cartOverlay");
document.getElementById("openCart").addEventListener("click",()=>overlay.classList.add("show"));
document.getElementById("closeCart").addEventListener("click",()=>overlay.classList.remove("show"));
overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.remove("show")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")overlay.classList.remove("show")});

// زر الطلب التجريبي
document.getElementById("checkout").addEventListener("click",()=>{
  if(!Object.keys(cart).length){toast("أضف منتجًا إلى السلة أولًا");return;}
  toast("هذه نسخة تجريبية؛ لم يتم إرسال طلب أو تحصيل مبلغ.");
});

// نظام صفحة تفاصيل المنتج المستقلة
const productsSection = document.getElementById("products");
const whyUsSection = document.getElementById("why-us");
const heroSection = document.querySelector(".hero");
const detailsSection = document.getElementById("productDetails");
const detailsContent = document.getElementById("detailsContent");

function showProductDetails(productId) {
  const p = products.find(item => item.id === Number(productId));
  if (!p) return;

  detailsContent.innerHTML = `
    <div style="text-align: center; background: radial-gradient(circle at 50% 60%, ${p.glow} 0, transparent 65%), #090c15; border-radius: 16px; padding: 40px; height: 350px; display: grid; place-items: center;">
      <img src="${p.image}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain; filter: drop-shadow(0 12px 16px #000a);">
    </div>
    <div>
      <span class="eyebrow" style="margin-bottom: 10px;">${p.category}</span>
      <h1 style="font-size: 2rem; margin: 10px 0;">${p.name}</h1>
      <p style="color: var(--muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 20px;">${p.desc} - هذا المنتج مصمم خصيصاً ليمنحك أفضل أداء ممكن في عالم القيمنق ولضمان تجربة استثنائية.</p>
      <div style="font-size: 1.6rem; font-weight: 900; margin-bottom: 25px; color: var(--green);">${money(p.price)}</div>
      <button class="btn" onclick="addToCart(${p.id})" style="padding: 12px 25px; font-size: 1rem;">إضافة إلى السلة 🛒</button>
    </div>
  `;

  heroSection.style.display = "none";
  productsSection.style.display = "none";
  whyUsSection.style.display = "none";
  detailsSection.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("backToHome").addEventListener("click", () => {
  detailsSection.style.display = "none";
  heroSection.style.display = "block";
  productsSection.style.display = "block";
  whyUsSection.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// تعيين السنة الحالية في التذييل
document.getElementById("year").textContent=new Date().getFullYear();

// التشغيل الأولي
renderProducts();
renderCart();ب