(() => {
  const images = document.querySelectorAll('.photo-frame img');
  images.forEach((image) => {
    const showImage = () => image.closest('.photo-frame')?.classList.add('has-image');
    image.addEventListener('load', showImage, { once: true });
    image.addEventListener('error', () => image.closest('.photo-frame')?.classList.remove('has-image'), { once: true });
    if (image.complete && image.naturalWidth > 0) showImage();
  });

  const celebrateLink = document.getElementById('celebrate-button');
  const birthdayWish = document.getElementById('birthday-wish');
  const confettiLayer = document.getElementById('confetti-layer');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const colors = ['#ff796d', '#ff8fbd', '#f9df78', '#fff4e9', '#c77da9'];

  function celebrate() {
    if (birthdayWish) birthdayWish.open = true;
    if (reduceMotion.matches || !confettiLayer) return;

    confettiLayer.replaceChildren();
    const count = window.innerWidth < 560 ? 32 : 54;
    for (let index = 0; index < count; index += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.setProperty('--piece-color', colors[index % colors.length]);
      piece.style.setProperty('--piece-w', `${5 + Math.random() * 7}px`);
      piece.style.setProperty('--piece-h', `${8 + Math.random() * 9}px`);
      piece.style.setProperty('--duration', `${1.8 + Math.random() * 1.5}s`);
      piece.style.setProperty('--rotation', `${Math.random() * 180}deg`);
      piece.style.setProperty('--drift', `${Math.round(Math.random() * 150 - 75)}px`);
      piece.style.animationDelay = `${Math.random() * 0.45}s`;
      confettiLayer.append(piece);
    }
    window.setTimeout(() => confettiLayer.replaceChildren(), 4200);
  }

  celebrateLink?.addEventListener('click', celebrate);
})();
