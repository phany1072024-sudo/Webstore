/* =====================================================
   កែតម្រូវទីនេះ (CONFIG) — ព័ត៌មានហាងរបស់អ្នក
   ===================================================== */
const CONFIG = {
    storeName: "Web Store",
    telegramUser: "your_telegram_username",   // ឈ្មោះ Telegram ដោយគ្មាន @
    phone: "012 345 678",
    address: "ភ្នំពេញ, កម្ពុជា",
    currency: "$",

    // ថ្លៃដឹក (កែតាមចិត្ត) — key ត្រូវតែ unique
    zones: [
        { id: "pp",   name: "ភ្នំពេញ",            fee: 1.5 },
        { id: "near", name: "កណ្តាល / ជិតភ្នំពេញ",   fee: 2.0 },
        { id: "prov", name: "ខេត្តផ្សេងៗ",          fee: 3.0 }
    ],
    freeShippingOver: 50,       // ទិញលើសពីនេះ ដឹកឥតគិតថ្លៃ (0 = បិទ)
    codZones: ["pp", "near"],   // តំបន់ដែលអនុញ្ញាត COD (ខេត្តផ្សេងត្រូវបង់មុន)

    // ព័ត៌មានគណនីធនាគារសម្រាប់ផ្ទេរប្រាក់
    bank: {
        name: "ABA Bank",
        account: "000 000 000",
        holder: "YOUR NAME",
        qrImage: "images/qr.jpg"     // ដាក់រូប QR KHQR របស់អ្នកទីនេះ
    }
};

/* =====================================================
   បញ្ជីផលិតផល — [ប្រភេទ, ឈ្មោះ, តម្លៃ, emoji, តម្លៃដើម(បើបញ្ចុះ), ពិពណ៌នា]
   ID ដំណើរការតាមលំដាប់ (១, ២, ៣...) — រូបត្រូវដាក់ឈ្មោះ images/p1.jpg, p2.jpg ...
   បើគ្មានរូប នឹងបង្ហាញ emoji ជំនួស
   ===================================================== */
const CATS = {
    shirt:  { name: "អាវយឺត",       sizes: ["S", "M", "L", "XL"] },
    jacket: { name: "អាវក្រៅ",       sizes: ["S", "M", "L", "XL"] },
    pants:  { name: "ខោ",          sizes: ["S", "M", "L", "XL"] },
    dress:  { name: "រ៉ូប / សំពត់",   sizes: ["S", "M", "L"] },
    shoe:   { name: "ស្បែកជើង",     sizes: ["38", "39", "40", "41", "42", "43", "44"] },
    bag:    { name: "កាបូប",        sizes: [] },
    hat:    { name: "មួក",          sizes: [] },
    acc:    { name: "គ្រឿងលម្អ",     sizes: [] }
};

const RAW = [
    ["shirt",  "អាវយឺតពណ៌ស",            12, "👕", 0,  "កប្បាសសុទ្ធ ទន់ ស្រួលពាក់ប្រចាំថ្ងៃ"],
    ["shirt",  "អាវយឺតពណ៌ខ្មៅ",          14, "👕", 0,  "កប្បាសសុទ្ធ មិនងាយស្រពោន"],
    ["shirt",  "អាវយឺត Oversize",        16, "👕", 0,  "ស្ទីលធំរលុង ទាន់សម័យ"],
    ["shirt",  "អាវយឺត Polo",            18, "👕", 0,  "មានកអាវ សមរម្យទាំងការងារ និងដើរលេង"],
    ["shirt",  "អាវយឺតដៃវែង",            17, "👕", 0,  "ស័ក្តិសមអាកាសធាតុត្រជាក់"],
    ["shirt",  "អាវយឺតបោះពុម្ពរូប",       15, "👕", 19, "ការបោះពុម្ពច្បាស់ មិនរលាស់"],
    ["jacket", "អាវក្រៅ Hoodie",          28, "🧥", 0,  "ក្រណាត់ក្រាស់ កក់ក្តៅ មានមួក"],
    ["jacket", "អាវក្រៅការពារខ្យល់",       32, "🧥", 40, "ស្រាល ការពារខ្យល់ និងភ្លៀងស្រាល"],
    ["jacket", "អាវក្រៅ Denim",           38, "🧥", 0,  "ក្រណាត់ jeans ក្លាស៊ិក"],
    ["jacket", "អាវក្រៅ Bomber",          30, "🧥", 0,  "ស្ទីល Bomber ទាន់សម័យ"],
    ["pants",  "ខោ Jeans",               26, "👖", 0,  "ក្រណាត់ជាប់ បត់បែនបានល្អ"],
    ["pants",  "ខោខ្លី",                  13, "🩳", 0,  "ស្រាល ត្រជាក់ ស័ក្តិសមរដូវក្តៅ"],
    ["pants",  "ខោ Jogger",              20, "👖", 0,  "ស្រួលខ្លួន ស័ក្តិសមកីឡា និងដើរលេង"],
    ["pants",  "ខោកាគី",                  24, "👖", 0,  "សមរម្យទាំងការងារ និងដើរលេង"],
    ["pants",  "ខោកីឡា",                 11, "🩳", 0,  "ស្ងួតលឿន ស័ក្តិសមហាត់ប្រាណ"],
    ["dress",  "រ៉ូបវែង",                 29, "👗", 0,  "ស្រទន់ ស្អាតឆើតឆាយ"],
    ["dress",  "រ៉ូបខ្លី",                 24, "👗", 0,  "ស្រាល ស្រួលពាក់"],
    ["dress",  "រ៉ូបក្រណាត់ផ្កា",          27, "👗", 33, "ក្រណាត់ផ្កាស្រស់ស្អាត"],
    ["dress",  "សំពត់ពត់",                18, "👗", 0,  "ងាយផ្គូរផ្គង ជាមួយអាវច្រើនបែប"],
    ["shoe",   "ស្បែកជើងកីឡា",            35, "👟", 0,  "ទន់ ស្រាល ស័ក្តិសមដើរ និងរត់"],
    ["shoe",   "ស្បែកជើង Sneaker ស",     40, "👟", 0,  "ពណ៌សស្អាត ផ្គូរផ្គងបានគ្រប់ឈុត"],
    ["shoe",   "ស្បែកជើងស្បែក",           48, "👞", 0,  "ស្បែកពិត សមរម្យសម្រាប់ការងារ"],
    ["shoe",   "ស្បែកជើងផ្អៀក",           9,  "🩴", 0,  "ស្រាល ស្រួលពាក់ក្នុងផ្ទះ ឬដើរលេង"],
    ["shoe",   "ស្បែកជើង Running",       45, "👟", 55, "ពូកទន់ ស្រូបកម្លាំងប៉ះទង្គិច"],
    ["shoe",   "ស្បែកជើងកែងខ្ពស់",         32, "👠", 0,  "ស្អាតឆើតឆាយ សម្រាប់ពិធី"],
    ["bag",    "កាបូបស្ពាយ",             20, "🎒", 0,  "ធន់ទ្រាំទឹកស្រាល ទំហំធំ"],
    ["bag",    "កាបូបសាកសួង",            18, "👜", 0,  "ស្ទីលទាន់សម័យ"],
    ["bag",    "កាបូបយួរដៃ",             25, "👜", 0,  "ស្ទីលក្លាស៊ិក"],
    ["bag",    "កាបូបលុយ",               10, "👛", 0,  "តូចរួមខ្លួន ដាក់កាតបានច្រើន"],
    ["bag",    "កាបូបធ្វើដំណើរ",          42, "🧳", 0,  "ទំហំធំ សម្រាប់ដំណើរឆ្ងាយ"],
    ["bag",    "កាបូបស្ត្រី",              30, "👜", 36, "ស្អាត ស័ក្តិសមគ្រប់ឱកាស"],
    ["hat",    "មួកកាប",                  8,  "🧢", 0,  "ត្រៀមសម្រាប់ការពារកម្តៅថ្ងៃ"],
    ["hat",    "មួក Bucket",             9,  "👒", 0,  "ស្ទីលទាន់សម័យ ទំហំអាចកែបាន"],
    ["hat",    "មួកក្តៅ (Beanie)",        7,  "🧢", 0,  "កក់ក្តៅ ស្រួលពាក់"],
    ["acc",    "នាឡិកាដៃ",               45, "⌚", 0,  "ស្អាត ធន់ ទ្រាំទឹកស្រាល"],
    ["acc",    "វ៉ែនតាការពារថ្ងៃ",         15, "🕶", 0,  "ការពារកាំរស្មី UV"],
    ["acc",    "ខ្សែក្រវាត់",              12, "👔", 0,  "ស្បែក សមរម្យសម្រាប់ខោគ្រប់បែប"],
    ["acc",    "ខ្សែដៃ",                  6,  "📿", 0,  "ស្រាល ស្អាត"],
    ["acc",    "ស្រោមជើង (កញ្ចប់ ៥គូ)",    5,  "🧦", 0,  "កប្បាសទន់ ស្រូបញើសល្អ"]
];

const PRODUCTS = RAW.map((r, i) => ({
    id: i + 1, cat: r[0], name: r[1], price: r[2], emoji: r[3],
    old: r[4] || 0, desc: r[5], image: `images/p${i + 1}.jpg`
}));

/* ================== STATE ================== */
let cart = load("cart", []);
let orders = load("orders", []);
let activeCat = "all";
let keyword = "";
let sortBy = "default";
let modal = { p: null, size: "", qty: 1 };

/* ================== HELPERS ================== */
const $ = (s) => document.querySelector(s);
const money = (n) => CONFIG.currency + n.toFixed(2);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = (id) => PRODUCTS.find(p => p.id === id);

function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
}
function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove("show"), 2400);
}

function picHTML(p) {
    return `<img src="${p.image}" alt="${esc(p.name)}" loading="lazy"
        onerror="this.parentElement.textContent='${p.emoji}'">`;
}

/* ================== PRODUCTS LIST ================== */
function renderFilter() {
    const btns = [`<button class="active" data-cat="all">ទាំងអស់</button>`]
        .concat(Object.entries(CATS).map(([k, v]) => `<button data-cat="${k}">${v.name}</button>`));
    $("#filter").innerHTML = btns.join("");
}

function renderProducts() {
    let list = PRODUCTS.filter(p =>
        (activeCat === "all" || p.cat === activeCat) &&
        (p.name + " " + CATS[p.cat].name).toLowerCase().includes(keyword.toLowerCase())
    );

    if (sortBy === "low") list.sort((a, b) => a.price - b.price);
    if (sortBy === "high") list.sort((a, b) => b.price - a.price);
    if (sortBy === "sale") list.sort((a, b) => (b.old > 0) - (a.old > 0));

    $("#grid").innerHTML = list.map(p => `
        <div class="card" data-open="${p.id}">
            ${p.old ? `<span class="badge">-${Math.round((1 - p.price / p.old) * 100)}%</span>` : ""}
            <div class="pic">${picHTML(p)}</div>
            <h3>${esc(p.name)}</h3>
            <p class="cat">${CATS[p.cat].name}</p>
            <p class="price">${money(p.price)}${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</p>
            <button class="add" data-add="${p.id}">${CATS[p.cat].sizes.length ? "ជ្រើសទំហំ" : "បន្ថែមទៅកន្ត្រក"}</button>
        </div>
    `).join("");

    $("#empty").hidden = list.length > 0;
    $("#resultCount").textContent = `${list.length} ផលិតផល`;
}

$("#filter").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    document.querySelectorAll("#filter button").forEach(b => b.classList.toggle("active", b === btn));
    renderProducts();
});

function setKeyword(v, scroll) {
    keyword = v.trim();
    $("#searchInput").value = v;
    $("#mSearch").value = v;
    renderProducts();
    if (keyword && scroll) $("#products").scrollIntoView({ behavior: "smooth" });
}
$("#searchInput").addEventListener("input", (e) => setKeyword(e.target.value, true));
$("#mSearch").addEventListener("input", (e) => setKeyword(e.target.value, false));
$("#sortSelect").addEventListener("change", (e) => { sortBy = e.target.value; renderProducts(); });

$("#grid").addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
        e.stopPropagation();
        const p = byId(Number(add.dataset.add));
        if (CATS[p.cat].sizes.length) openProduct(p.id);
        else addToCart(p.id, "", 1);
        return;
    }
    const card = e.target.closest("[data-open]");
    if (card) openProduct(Number(card.dataset.open));
});

/* ================== PRODUCT MODAL ================== */
function openProduct(id) {
    const p = byId(id);
    modal = { p, size: "", qty: 1 };
    const sizes = CATS[p.cat].sizes;

    $("#mPic").innerHTML = picHTML(p);
    $("#mCat").textContent = CATS[p.cat].name;
    $("#mName").textContent = p.name;
    $("#mPrice").innerHTML = money(p.price) + (p.old ? `<span class="old">${money(p.old)}</span>` : "");
    $("#mDesc").textContent = p.desc;
    $("#mQty").textContent = 1;
    $("#mSizeWrap").style.display = sizes.length ? "block" : "none";
    $("#mSizes").innerHTML = sizes.map(s => `<button data-size="${s}">${s}</button>`).join("");
    $("#pModal").hidden = false;
}

$("#mSizes").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    modal.size = b.dataset.size;
    document.querySelectorAll("#mSizes button").forEach(x => x.classList.toggle("sel", x === b));
});
$("#mMinus").addEventListener("click", () => { modal.qty = Math.max(1, modal.qty - 1); $("#mQty").textContent = modal.qty; });
$("#mPlus").addEventListener("click", () => { modal.qty = Math.min(20, modal.qty + 1); $("#mQty").textContent = modal.qty; });
$("#mAdd").addEventListener("click", () => {
    const needSize = CATS[modal.p.cat].sizes.length > 0;
    if (needSize && !modal.size) return toast("សូមជ្រើសរើសទំហំជាមុន");
    addToCart(modal.p.id, modal.size, modal.qty);
    $("#pModal").hidden = true;
});

/* បិទ modal ទាំងអស់ */
document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", (e) => {
        if (e.target === m || e.target.hasAttribute("data-close")) m.hidden = true;
    });
});

/* ================== CART ================== */
function addToCart(id, size, qty) {
    const found = cart.find(i => i.id === id && i.size === size);
    if (found) found.qty = Math.min(20, found.qty + qty);
    else cart.push({ id, size, qty });
    save("cart", cart);
    renderCart();
    toast("បានបន្ថែមទៅកន្ត្រក ✓");
}

function changeQty(id, size, delta) {
    const item = cart.find(i => i.id === id && i.size === size);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i !== item);
    if (item.qty > 20) item.qty = 20;
    save("cart", cart);
    renderCart();
}

function subtotal() {
    return cart.reduce((s, i) => s + byId(i.id).price * i.qty, 0);
}

function shipping(zoneId, sub) {
    const z = CONFIG.zones.find(z => z.id === zoneId) || CONFIG.zones[0];
    if (CONFIG.freeShippingOver && sub >= CONFIG.freeShippingOver) return 0;
    return z.fee;
}

function renderCart() {
    cart = cart.filter(i => byId(i.id));   // ដកផលិតផលដែលលែងមាន

    const count = cart.reduce((n, i) => n + i.qty, 0);
    $("#cartCount").textContent = count;

    if (!cart.length) {
        $("#cartItems").innerHTML = `<p class="cart-empty">កន្ត្រករបស់អ្នកទទេ 🛒</p>`;
        $("#drawerFoot").style.display = "none";
        return;
    }

    $("#drawerFoot").style.display = "flex";
    $("#cartItems").innerHTML = cart.map(i => {
        const p = byId(i.id);
        return `
        <div class="item">
            <div class="thumb">${picHTML(p)}</div>
            <div class="meta">
                <b>${esc(p.name)}</b>
                ${i.size ? `<small>ទំហំ: ${esc(i.size)}</small>` : ""}
                <span>${money(p.price)} × ${i.qty} = ${money(p.price * i.qty)}</span>
            </div>
            <div class="qty">
                <button data-act="dec" data-id="${p.id}" data-size="${esc(i.size)}">−</button>
                <span>${i.qty}</span>
                <button data-act="inc" data-id="${p.id}" data-size="${esc(i.size)}">+</button>
            </div>
            <button class="remove" data-act="rm" data-id="${p.id}" data-size="${esc(i.size)}" aria-label="លុប">🗑</button>
        </div>`;
    }).join("");

    renderTotals();
}

function renderTotals() {
    const zone = $("#zoneSelect").value;
    const sub = subtotal();
    const ship = shipping(zone, sub);

    $("#sSub").textContent = money(sub);
    $("#sShip").textContent = ship === 0 ? "ឥតគិតថ្លៃ" : money(ship);
    $("#cartTotal").textContent = money(sub + ship);

    const need = CONFIG.freeShippingOver - sub;
    $("#freeHint").textContent = CONFIG.freeShippingOver && need > 0
        ? `ទិញបន្ថែម ${money(need)} ដើម្បីដឹកឥតគិតថ្លៃ 🚚` : "";

    // COD ត្រឹមតំបន់ដែលអនុញ្ញាតប៉ុណ្ណោះ
    const codOk = CONFIG.codZones.includes(zone);
    const codRadio = document.querySelector('input[name="pay"][value="cod"]');
    codRadio.disabled = !codOk;
    if (!codOk) document.querySelector('input[name="pay"][value="transfer"]').checked = true;
    codRadio.parentElement.style.opacity = codOk ? 1 : .45;
}

$("#cartItems").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const id = Number(b.dataset.id), size = b.dataset.size;
    if (b.dataset.act === "inc") changeQty(id, size, 1);
    if (b.dataset.act === "dec") changeQty(id, size, -1);
    if (b.dataset.act === "rm") {
        cart = cart.filter(i => !(i.id === id && i.size === size));
        save("cart", cart);
        renderCart();
    }
});

$("#zoneSelect").addEventListener("change", renderTotals);

$("#clearCart").addEventListener("click", () => {
    if (confirm("សម្អាតកន្ត្រកទាំងអស់?")) {
        cart = [];
        save("cart", cart);
        renderCart();
    }
});

function openDrawer() { $("#drawer").classList.add("open"); $("#backdrop").classList.add("show"); }
function closeDrawer() { $("#drawer").classList.remove("open"); $("#backdrop").classList.remove("show"); }
$("#openCart").addEventListener("click", openDrawer);
$("#closeCart").addEventListener("click", closeDrawer);
$("#backdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDrawer();
        document.querySelectorAll(".modal").forEach(m => m.hidden = true);
    }
});

/* ================== CHECKOUT ================== */
function newOrderId() {
    const d = new Date();
    const ymd = String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `WS${ymd}-${rnd}`;
}

function buildOrderText(o) {
    const lines = o.items.map((i, n) =>
        `${n + 1}. ${i.name}${i.size ? ` (ទំហំ ${i.size})` : ""} × ${i.qty} = ${money(i.price * i.qty)}`);
    return [
        `🛍 ការបញ្ជាទិញថ្មី — ${CONFIG.storeName}`,
        `លេខបញ្ជាទិញ: ${o.id}`,
        ``,
        ...lines,
        ``,
        `ទំនិញ: ${money(o.sub)}`,
        `ថ្លៃដឹក: ${o.ship === 0 ? "ឥតគិតថ្លៃ" : money(o.ship)}`,
        `💰 សរុប: ${money(o.total)}`,
        `បង់ប្រាក់: ${o.pay === "cod" ? "បង់ពេលទទួល (COD)" : "ផ្ទេរប្រាក់ ABA/KHQR"}`,
        ``,
        `👤 ឈ្មោះ: ${o.name}`,
        `📞 ទូរស័ព្ទ: ${o.phone}`,
        `📍 តំបន់: ${o.zoneName}`,
        `🏠 អាសយដ្ឋាន: ${o.address}`,
        o.note ? `📝 ចំណាំ: ${o.note}` : ""
    ].filter(l => l !== "").join("\n");
}

$("#orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) return toast("កន្ត្រកទទេ");

    const f = new FormData(e.target);
    const zone = CONFIG.zones.find(z => z.id === f.get("zone"));
    const sub = subtotal();
    const ship = shipping(zone.id, sub);

    const order = {
        id: newOrderId(),
        date: new Date().toISOString(),
        name: String(f.get("name")).trim(),
        phone: String(f.get("phone")).trim(),
        address: String(f.get("address")).trim(),
        note: String(f.get("note") || "").trim(),
        zoneName: zone.name,
        pay: f.get("pay"),
        sub, ship, total: sub + ship,
        items: cart.map(i => ({ name: byId(i.id).name, price: byId(i.id).price, qty: i.qty, size: i.size }))
    };

    orders.unshift(order);
    save("orders", orders.slice(0, 30));

    showSuccess(order);

    cart = [];
    save("cart", cart);
    renderCart();
    e.target.reset();
    closeDrawer();
});

function showSuccess(o) {
    const text = buildOrderText(o);
    $("#oId").textContent = o.id;
    $("#oText").value = text;
    $("#oTg").href = `https://t.me/${CONFIG.telegramUser}`;

    const isTransfer = o.pay === "transfer";
    $("#payBox").hidden = !isTransfer;
    if (isTransfer) {
        $("#oAmount").textContent = money(o.total);
        $("#bankName").textContent = CONFIG.bank.name;
        $("#bankAcc").textContent = CONFIG.bank.account;
        $("#bankHolder").textContent = CONFIG.bank.holder;
        const qr = $("#qrImg");
        qr.style.display = "";
        qr.src = CONFIG.bank.qrImage;
    }
    $("#oModal").hidden = false;
    copyText(text);
}

function copyText(text) {
    if (navigator.clipboard) return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
    return Promise.resolve(false);
}

$("#oCopy").addEventListener("click", async () => {
    const ok = await copyText($("#oText").value);
    if (!ok) { $("#oText").select(); document.execCommand && document.execCommand("copy"); }
    toast("បានចម្លងសារ ✓");
});

/* ================== ORDER HISTORY ================== */
$("#openOrders").addEventListener("click", (e) => {
    e.preventDefault();
    $("#navbar").classList.remove("open");
    $("#hList").innerHTML = orders.length ? orders.map(o => `
        <div class="h-item">
            <div class="h-top"><b>${esc(o.id)}</b><span>${money(o.total)}</span></div>
            <p>${new Date(o.date).toLocaleString("km-KH")} • ${o.pay === "cod" ? "COD" : "ផ្ទេរប្រាក់"}</p>
            <p>${o.items.map(i => esc(i.name) + (i.size ? ` (${esc(i.size)})` : "") + " ×" + i.qty).join(", ")}</p>
        </div>`).join("")
        : `<p class="cart-empty">មិនទាន់មានការបញ្ជាទិញទេ</p>`;
    $("#hModal").hidden = false;
});

/* ================== CONTACT FORM ================== */
$("#msgForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text = `✉️ សារពី ${f.get("name")} (${f.get("phone")})\n\n${f.get("message")}`;
    await copyText(text);
    window.open(`https://t.me/${CONFIG.telegramUser}`, "_blank", "noopener");
    toast("បានចម្លងសារ! សូម Paste ក្នុង Telegram");
    e.target.reset();
});

/* ================== NAV (mobile) ================== */
$("#burger").addEventListener("click", () => $("#navbar").classList.toggle("open"));
$("#navbar").addEventListener("click", (e) => {
    if (e.target.tagName === "A") $("#navbar").classList.remove("open");
});

/* ================== INIT ================== */
$("#cAddress").textContent = CONFIG.address;
$("#cPhone").textContent = CONFIG.phone;
const tg = $("#cTelegram");
tg.textContent = "@" + CONFIG.telegramUser;
tg.href = "https://t.me/" + CONFIG.telegramUser;

$("#zoneSelect").innerHTML = CONFIG.zones
    .map(z => `<option value="${z.id}">${z.name} — ថ្លៃដឹក ${money(z.fee)}</option>`).join("");
$("#featShip").textContent = CONFIG.freeShippingOver
    ? `ឥតគិតថ្លៃពេលទិញលើស ${money(CONFIG.freeShippingOver)}` : "ដឹកទូទាំងប្រទេស";

renderFilter();
renderProducts();
renderCart();