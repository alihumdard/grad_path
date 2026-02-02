(function () {
  const menuBtn = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      if (menuIcon) {
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");
      }
    });
    document.addEventListener("click", function (e) {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        if (menuIcon) {
          menuIcon.classList.add("fa-bars");
          menuIcon.classList.remove("fa-xmark");
        }
      }
    });
  }

  // Login / Signup modals
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  function openLogin() {
    if (signupModal) signupModal.classList.add("hidden");
    if (loginModal) loginModal.classList.remove("hidden");
  }
  function openSignup() {
    if (loginModal) loginModal.classList.add("hidden");
    if (signupModal) signupModal.classList.remove("hidden");
  }
  function closeLogin() {
    if (loginModal) loginModal.classList.add("hidden");
  }
  function closeSignup() {
    if (signupModal) signupModal.classList.add("hidden");
  }

  ["btn-login", "btn-login-mob"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", openLogin);
  });
  ["btn-signup", "btn-signup-mob"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", openSignup);
  });

  var loginClose = document.getElementById("login-close");
  var signupClose = document.getElementById("signup-close");
  if (loginClose) loginClose.addEventListener("click", closeLogin);
  if (signupClose) signupClose.addEventListener("click", closeSignup);

  var loginToSignup = document.getElementById("login-to-signup");
  var signupToLogin = document.getElementById("signup-to-login");
  if (loginToSignup) loginToSignup.addEventListener("click", openSignup);
  if (signupToLogin) signupToLogin.addEventListener("click", openLogin);

  if (loginModal) {
    loginModal.addEventListener("click", function (e) {
      if (e.target === loginModal) closeLogin();
    });
  }
  if (signupModal) {
    signupModal.addEventListener("click", function (e) {
      if (e.target === signupModal) closeSignup();
    });
  }

  // Password toggle (eyeball): show/hide password in Login and Signup
  document.querySelectorAll(".password-toggle").forEach(function (btn) {
    var targetId = btn.getAttribute("data-target");
    if (!targetId) return;
    var input = document.getElementById(targetId);
    var icon = btn.querySelector(".toggle-icon");
    if (!input || !icon) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      icon.classList.toggle("fa-eye-slash", isPassword);
      icon.classList.toggle("fa-eye", !isPassword);
    });
  });

  // Signup Program level / Role button selection; remember choice for next time
  document.querySelectorAll(".signup-level").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".signup-level").forEach(function (b) {
        b.classList.remove(
          "border-[var(--primary)]",
          "text-[var(--primary)]",
          "bg-violet-50",
          "dark:bg-violet-900/20",
        );
        b.classList.add(
          "border-slate-300",
          "dark:border-slate-600",
          "text-slate-600",
          "dark:text-slate-400",
        );
      });
      btn.classList.add(
        "border-[var(--primary)]",
        "text-[var(--primary)]",
        "bg-violet-50",
        "dark:bg-violet-900/20",
      );
      btn.classList.remove(
        "border-slate-300",
        "dark:border-slate-600",
        "text-slate-600",
        "dark:text-slate-400",
      );
      var val = btn.getAttribute("data-value");
      if (val)
        try {
          localStorage.setItem("gradspaths_signup_level", val);
        } catch (e) {}
    });
  });
  document.querySelectorAll(".signup-role").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".signup-role").forEach(function (b) {
        b.classList.remove(
          "border-[var(--primary)]",
          "text-[var(--primary)]",
          "bg-violet-50",
          "dark:bg-violet-900/20",
        );
        b.classList.add(
          "border-slate-300",
          "dark:border-slate-600",
          "text-slate-600",
          "dark:text-slate-400",
        );
      });
      btn.classList.add(
        "border-[var(--primary)]",
        "text-[var(--primary)]",
        "bg-violet-50",
        "dark:bg-violet-900/20",
      );
      btn.classList.remove(
        "border-slate-300",
        "dark:border-slate-600",
        "text-slate-600",
        "dark:text-slate-400",
      );
      var val = btn.getAttribute("data-value");
      if (val)
        try {
          localStorage.setItem("gradspaths_signup_role", val);
        } catch (e) {}
    });
  });

  // Contact Us: show form only when signed in, else show sign-in prompt
  function updateContactSection() {
    var signedIn = localStorage.getItem("gradpaths_signed_in") === "1";
    var signinRequired = document.getElementById("contact-signin-required");
    var formWrapper = document.getElementById("contact-form-wrapper");
    if (signinRequired && formWrapper) {
      if (signedIn) {
        signinRequired.classList.add("hidden");
        formWrapper.classList.remove("hidden");
      } else {
        signinRequired.classList.remove("hidden");
        formWrapper.classList.add("hidden");
      }
    }
  }
  window.gradpathsUpdateContactSection = updateContactSection;
  updateContactSection();

  var contactOpenLogin = document.getElementById("contact-open-login");
  var contactOpenSignup = document.getElementById("contact-open-signup");
  if (contactOpenLogin) contactOpenLogin.addEventListener("click", openLogin);
  if (contactOpenSignup)
    contactOpenSignup.addEventListener("click", openSignup);
})();
