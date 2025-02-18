export function initSlider() {
  const slider = document.querySelector('.trade-cards');
  const cards = document.querySelectorAll('.trade-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 32; // Including gap

  function updateSlider() {
    const maxIndex = cards.length - 1;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Initial setup
  updateSlider();

  // Update on window resize
  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSlider();
  });
} 