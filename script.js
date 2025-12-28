// SPARKLES GLOBAIS PREMIUM

const container = document.querySelector('.global-sparkles');
const sparkleTotal = window.innerWidth < 600 ? 18 : 28;

const sparkleSVG = `
<svg viewBox="0 0 18 18" width="18" height="18">
<path d="M9 1L10.5 7.2L17 9L10.5 10.7L9 17L7.5 10.7L1 9L7.5 7.2Z" fill="#FFD700"/>
</svg>
`;

function spawnSparkle(){
  if(!container) return;

  const s = document.createElement('span');
  s.className = 'sparkle';
  s.innerHTML = sparkleSVG;

  s.style.left = Math.random()*100+'%';
  s.style.top = Math.random()*100+'%';
  s.style.opacity = (Math.random()*0.3+0.1).toFixed(2);
  s.style.animationDuration = (Math.random()*3+5)+'s';

  container.appendChild(s);

  s.addEventListener('animationend',()=>{
    s.remove();
    if(container.childElementCount < sparkleTotal){
      setTimeout(spawnSparkle,Math.random()*1200+300);
    }
  });
}

for(let i=0;i<sparkleTotal;i++){
  setTimeout(spawnSparkle,i*200);
}
