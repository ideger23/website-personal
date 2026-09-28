// ===============================
// KONFIGURASI PORTOFOLIO
// Ganti nomor WhatsApp di bawah.
// Format: kode negara + nomor tanpa tanda +, spasi, atau 0 awal.
// Contoh Indonesia: 6281234567890
// ===============================
const whatsappNumber = "62XXXXXXXXXX";
const whatsappMessage = encodeURIComponent(
  "Halo Ferdi, saya tertarik dengan profil dan portofolio Anda."
);

const waButton = document.getElementById("waButton");
if (waButton) {
  if (whatsappNumber.includes("X")) {
    waButton.href = "#";
    waButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Silakan isi nomor WhatsApp kamu di file script.js terlebih dahulu.");
    });
  } else {
    waButton.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
