// Efeito animado de sparkles dourados no fundo do HERO
const sparklesContainer = document.querySelector('.sparkles-bg');
const heroSection = document.querySelector('.hero');
const sparkleAmount = window.innerWidth < 600 ? 16 : 24;
const sparkleSVG =
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><g filter="url(#glow)"><path d="M9 1L10.55 7.25L17 9L10.55 10.75L9 17L7.5 10.75L1 9L7.5 7.25L9 1Z" fill="#FFD700"/></g><defs><filter id="glow" x="-4" y="-4" width="26" height="26" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>';

function genSparkle() {
  const sparkle = document.createElement('span');
  sparkle.classList.add('sparkle');
  sparkle.innerHTML = sparkleSVG;
  // Posição aleatória na largura
  const heroRect = heroSection.getBoundingClientRect();
  const left = Math.random() * 97 + 1;
  const top = Math.random() * 92 + 4;
  sparkle.style.left = left + "%";
  sparkle.style.top = top + "%";
  sparkle.style.animationDuration = (Math.random() * 2 + 4.2) + "s";
  sparkle.style.opacity = (Math.random() * 0.3 + 0.10).toFixed(2);
  sparklesContainer.appendChild(sparkle);

  // Remove e recria o sparkle após a animação
  sparkle.addEventListener('animationend', () => {
    sparkle.remove();
    if (sparklesContainer.childElementCount <= sparkleAmount)
      setTimeout(genSparkle, Math.random()*1200+100);
  });
}

// Start
if (sparklesContainer && heroSection) {
  for (let i = 0; i < sparkleAmount; i++) {
    setTimeout(genSparkle, i * 180);
  }
}

// Simples lazy load para as imagens não-hero
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll("img[loading='lazy']");
  imgs.forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = "none";
    });
  });
});
