var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

 var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
        
        
    const circleElement =
        document.querySelector('.circle');

        const mouse = {x: 0, y: 0}
        const circle = {x: 0, y: 0};

        window.addEventListener('mousemove', e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        const speed = 0.15;

        const tick = () => {
            circle.x += (mouse.x - circle.x) * speed;
            circle.y += (mouse.y - circle.y) * speed;

            circleElement.style.transform =
            `translate(${circle.x}px, ${circle.y}px)`;


            window.requestAnimationFrame(tick);
        }
        tick();

          const toggleBtn = document.getElementById('toggleBtn');
  const hiddenWorks = document.querySelectorAll('.work.hidden');

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();

    hiddenWorks.forEach(work => {
      work.classList.toggle('hidden');
    });

    // Ändra knappens text beroende på tillstånd
    if (toggleBtn.textContent === "Se mer") {
      toggleBtn.textContent = "Se mindre";
    } else {
      toggleBtn.textContent = "Se mer";
    }
  });

(function(){
      const modal   = document.getElementById('videoModal');
      const video   = document.getElementById('modalVideo');
      const closeBtn= modal.querySelector('.close');

      function openModal(src){
        video.src = src;                     // sätt källa först när man öppnar
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
        document.body.classList.add('noscroll');
        // Ingen autoplay: användaren trycker play (bäst för mobilregler)
        // video.play().catch(()=>{});
      }

      function closeModal(){
        video.pause();
        video.removeAttribute('src');        // rensa källan
        video.load();                        // töm bufferten helt
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden','true');
        document.body.classList.remove('noscroll');
      }

      // Öppna via alla länkar med .video-link
      document.addEventListener('click', (e) => {
        const a = e.target.closest('.video-link');
        if (a) {
          e.preventDefault();
          const src = a.dataset.video;
          if (src) openModal(src);
        }
        // Klick på mörka ytan stänger
        if (e.target === modal) closeModal();
      });

      // Stäng via knappen och via Escape
      closeBtn.addEventListener('click', closeModal);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
      });
    })();