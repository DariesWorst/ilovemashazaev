<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const valentines = document.querySelector(".valentines");
  const card = document.querySelector(".card");

  // ➡️ Funcția care ridică cardul
  function openCard() {
    valentines.style.animationPlayState = "paused";
    card.style.transition = "top 0.6s ease";
    card.style.top = "-90px";
  }

  // ➡️ Funcția care închide cardul
  function closeCard() {
    valentines.style.animationPlayState = "running";
    card.style.top = "5px";
  }

  // ✅ PC: Hover
  container.addEventListener("mouseenter", openCard);
  container.addEventListener("mouseleave", closeCard);

  // ✅ Mobil: Tap
  let isOpen = false; // stare pentru mobil
  container.addEventListener("click", () => {
    if (isOpen) {
      closeCard();
    } else {
      openCard();
    }
    isOpen = !isOpen; // schimbă starea
  });
});
</script>
