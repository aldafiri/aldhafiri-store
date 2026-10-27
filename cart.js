let cart = JSON.parse(localStorage.getItem("dh_cart")) || {};
const money = n => new Intl.NumberFormat("ar-SA").format(n) + " ر.س";

function saveCart() {
  localStorage.setItem("dh_cart", JSON.stringify(cart));
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  toast("تمت إضافة المنتج إلى السلة 🛒");
}

// دالة تفريغ السلة بالكامل
function clearCart() {
  if (confirm("هل أنت متأكد من تفريغ السلة بالكامل؟")) {
    cart = {};
    saveCart();
    renderCart();
    toast("تم تفريغ السلة");
  }
}

function renderCart(){
  const ids = Object.keys(cart).filter(id => cart[id] > 0);
  document.getElementById("cartCount").textContent = ids.reduce((sum,id)=>sum+cart[id],0);
  const host = document.getElementById("cartItems");
  
  if(!ids.length){
    host.innerHTML = '<div class="empty">سلتك فارغة حاليًا 🛒</div>';
    document.getElementById("cartTotal").textContent = money(0);
    return;
  }
  
  host.innerHTML = ids.map(id => {
    const p = products.find(item => item.id === Number(id));
    return `<div class="cart-item">
      <div><strong>${p.name}</strong><small>${money(p.price)} للقطعة</small></div>
      <div class="qty"><button data-minus="${p.id}" aria-label="تقليل الكمية">−</button><span>${cart[id]}</span><button data-plus="${p.id}" aria-label="زيادة الكمية">＋</button></div>
    </div>`;
  }).join("") + `
    <button onclick="clearCart()" style="width:100%; background:#ff383822; border:1px solid #ff3838; color:#ff3838; border-radius:10px; padding:8px; margin-top:15px; font-weight:bold;">تفريغ السلة بالكامل 🗑️</button>
  `;

  const total = ids.reduce((sum,id)=>sum+products.find(p=>p.id===Number(id)).price*cart[id],0);
  document.getElementById("cartTotal").textContent = money(total);
}

function toast(message){
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2300);
}

document.getElementById("cartItems").addEventListener("click", e => {
  const plus = e.target.closest("[data-plus]"), minus = e.target.closest("[data-minus]");
  if(plus){ const id = plus.dataset.plus; cart[id] = (cart[id] || 0) + 1; }
  if(minus){ 
    const id = minus.dataset.minus; 
    cart[id] = (cart[id] || 0) - 1; 
    if(cart[id] <= 0) delete cart[id]; 
  }
  saveCart();
  renderCart();
});