  const menuBtn = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-xmark");
    }
  });
