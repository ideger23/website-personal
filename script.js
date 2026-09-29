const whatsappNumber = "6285809095836";
const whatsappMessage = encodeURIComponent(
  "Halo Ferdi, saya melihat portofolio Anda dan tertarik untuk menghubungi Anda."
);

const waButton = document.getElementById("waButton");
if (waButton) {
  waButton.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
