<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const valentines = document.querySelector(".valentines");
  const card = document.querySelector(".card");

  // Funcția care deschide cardul (ridică)
  function openCard() {
    valentines.style.animationPlayState = "paused";
    card.style.transition = "top 0.6s ease";
    card.style.top = "-90px";
  }

  // Funcția care închide cardul (revine)
  function closeCard() {
    valentines.style.animationPlayState = "running";
    card.style.top = "5px";
  }

  // Hover pentru desktop
  container.addEventListener("mouseenter", openCard);
  container.addEventListener("mouseleave", closeCard);

  // Tap pe mobil: toggle între deschis și închis
  let isOpen = false;
  container.addEventListener("click", () => {
    if (isOpen) {
      closeCard();
    } else {
      openCard();
    }
    isOpen = !isOpen;
  });
});
</script>
