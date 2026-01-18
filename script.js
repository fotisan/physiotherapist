(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open){
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  burger?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    setMenu(!isOpen);
  });

  mobileMenu?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    const inside = mobileMenu?.contains(t) || burger?.contains(t);
    if (!inside) setMenu(false);
  });

  // Contact toast demo
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  const toastX = toast?.querySelector(".toast-x");

  function showToast(){
    toast?.classList.add("show");
  }
  function hideToast(){
    toast?.classList.remove("show");
  }

  toastX?.addEventListener("click", hideToast);

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) return;

    form.reset();
    showToast();
  });
})();
