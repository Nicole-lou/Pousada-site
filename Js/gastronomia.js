document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.gastronomia-card, .p-4.bg-white').forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      setTimeout(() => {
        card.style.transition = "all 0.7s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    });
  });