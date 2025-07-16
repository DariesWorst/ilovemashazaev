<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const valentines = document.querySelector(".valentines");
  const card = document.querySelector(".card");

  let timeoutId = null;
  let isOpen = false;

  function openCard() {
    valentines.style.animationPlayState = "paused";
    card.style.transition = "top 0.6s ease";
    card.style.top = "-90px";
    isOpen = true;
  }

  function closeCard() {
    valentines.style.animationPlayState = "running";
    card.style.top = "5px";
    isOpen = false;
  }

  // Desktop hover with 3s delay
  container.addEventListener("mouseenter", () => {
    timeoutId = setTimeout(openCard, 3000); // 3000 ms = 3 sec delay
  });

  container.addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
    closeCard();
  });

  // Mobile tap toggle with 3s delay between toggles
  container.addEventListener("click", () => {
    if (timeoutId) clearTimeout(timeoutId);

    if (!isOpen) {
      timeoutId = setTimeout(openCard, 3000);
    } else {
      timeoutId = setTimeout(closeCard, 3000);
    }
  });
});
</script>
