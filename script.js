const menuItems = [
  { name: "Nasi Goreng", price: 15000 },
  { name: "Indomie Telur", price: 12000 },
  { name: "Mie Goreng", price: 10000 },
  { name: "Roti Bakar Coklat", price: 8000 },
  { name: "Kopi Hitam", price: 5000 },
  { name: "Kopi Susu", price: 7000 },
  { name: "Teh Manis", price: 4000 },
  { name: "Es Jeruk", price: 6000 },
  { name: "Susu Jahe", price: 8000 },
  { name: "Gorengan (3 pcs)", price: 5000 },
  { name: "Nasi Ayam Geprek", price: 18000 },
  { name: "Nugget + Nasi", price: 13000 }
];

const menuList = document.getElementById("menu-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cart = [];
let total = 0;

// Tampilkan menu
menuItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <h4>${item.name}</h4>
    <p>Rp ${item.price}</p>
    <button onclick="addToCart(${index})">Pesan</button>
  `;
  menuList.appendChild(div);
});

function addToCart(index) {
  const item = menuItems[index];
  cart.push(item);
  total += item.price;
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, idx) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let message = "Halo WARKOP GG, saya ingin pesan:\n";
  cart.forEach(item => {
    message += `- ${item.name} (Rp ${item.price})\n`;
  });
  message += `\nTotal: Rp ${total}`;

  // Nomor WhatsApp kamu (format internasional, tanpa +)
  const phoneNumber = "6283138098975";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Buka WhatsApp
  window.open(whatsappURL, '_blank');

  // Reset keranjang setelah kirim
  cart = [];
  total = 0;
  updateCart();
}
