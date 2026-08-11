(function(){
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Menue mobil: klappt unter der Leiste auf, aus der es ausgeloest wurde. */
  var burger = document.getElementById("burger"), sheet = document.getElementById("sheet");
  function setMenu(open){
    sheet.dataset.open = String(open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }
  burger.addEventListener("click", function(){ setMenu(sheet.dataset.open !== "true"); });
  sheet.addEventListener("click", function(e){ if(e.target.closest("a")) setMenu(false); });
  addEventListener("keydown", function(e){
    if(e.key === "Escape" && sheet.dataset.open === "true"){ setMenu(false); burger.focus(); }
  });

  /* Scroll-Reveals: einmalig, danach abgemeldet. */
  var items = document.querySelectorAll("[data-reveal]");
  if(reduce || !("IntersectionObserver" in window)){
    items.forEach(function(el){ el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, {rootMargin:"0px 0px -12% 0px", threshold:0.08});
    items.forEach(function(el){ io.observe(el); });
  }
})();
