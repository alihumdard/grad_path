function switchTab(tabName) {
  const tabs = document.querySelectorAll(".tab-btn");
  const inactiveClass =
    " bg-transparent text-[var(--text-muted)] hover:text-[var(--text-main)]";
  const activeClass = " bg-[var(--primary)] text-white shadow-md";

  tabs.forEach((tab) => {
    tab.className =
      "tab-btn px-4 py-2.5 rounded-full text-[11px] sm:text-[12px] leading-none whitespace-nowrap font-bold tracking-widest uppercase transition-all duration-200 focus:outline-none" +
      inactiveClass;
    tab.setAttribute("aria-selected", "false");
  });

  const activeTab = document.getElementById(`tab-${tabName}`);
  activeTab.className =
    "tab-btn px-4 py-2.5 rounded-full text-[11px] sm:text-[12px] leading-none whitespace-nowrap font-bold tracking-widest uppercase transition-all duration-200 focus:outline-none" +
    activeClass;
  activeTab.setAttribute("aria-selected", "true");

  document.querySelectorAll(".program-panel").forEach((panel) => {
    panel.classList.add("hidden");
    panel.classList.remove("flex");
  });

  const activePanel = document.getElementById(`panel-${tabName}`);
  activePanel.classList.remove("hidden");
  activePanel.classList.add("flex");
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // Remember Me: restore saved login email and checkbox
  const loginEmail = document.getElementById("login-email");
  const loginRemember = document.getElementById("login-remember");
  if (loginEmail && localStorage.getItem("gradspaths_remember_email")) {
    loginEmail.value = localStorage.getItem("gradspaths_remember_email");
  }
  if (loginRemember && localStorage.getItem("gradspaths_remember") === "true") {
    loginRemember.checked = true;
  }

  // Login form: save email if Remember Me checked; set signed-in for contact/ticket
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (loginRemember && loginRemember.checked && loginEmail) {
        localStorage.setItem("gradspaths_remember", "true");
        localStorage.setItem("gradspaths_remember_email", loginEmail.value);
      } else {
        localStorage.removeItem("gradspaths_remember");
        localStorage.removeItem("gradspaths_remember_email");
      }
      localStorage.setItem("gradpaths_signed_in", "1");
      const loginModal = document.getElementById("login-modal");
      if (loginModal) loginModal.classList.add("hidden");
      if (typeof window.gradpathsUpdateContactSection === "function") {
        window.gradpathsUpdateContactSection();
      }
      // Backend would handle actual login here
    });
  }

  // Signup form: remember fullname, email, institution, program level, role (so users don't retype)
  const signupForm = document.getElementById("signup-form");
  const signupFullname = document.getElementById("signup-fullname");
  const signupEmail = document.getElementById("signup-email");
  const signupInstitution = document.getElementById("signup-institution");
  if (signupFullname && localStorage.getItem("gradspaths_signup_fullname")) {
    signupFullname.value = localStorage.getItem("gradspaths_signup_fullname");
  }
  if (signupEmail && localStorage.getItem("gradspaths_signup_email")) {
    signupEmail.value = localStorage.getItem("gradspaths_signup_email");
  }
  if (
    signupInstitution &&
    localStorage.getItem("gradspaths_signup_institution")
  ) {
    signupInstitution.value = localStorage.getItem(
      "gradspaths_signup_institution",
    );
  }
  const savedLevel = localStorage.getItem("gradspaths_signup_level");
  const savedRole = localStorage.getItem("gradspaths_signup_role");
  if (savedLevel) {
    const levelBtn = document.querySelector(
      '.signup-level[data-value="' + savedLevel + '"]',
    );
    if (levelBtn) levelBtn.click();
  }
  if (savedRole) {
    const roleBtn = document.querySelector(
      '.signup-role[data-value="' + savedRole + '"]',
    );
    if (roleBtn) roleBtn.click();
  }
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (signupFullname)
        localStorage.setItem(
          "gradspaths_signup_fullname",
          signupFullname.value,
        );
      if (signupEmail)
        localStorage.setItem("gradspaths_signup_email", signupEmail.value);
      if (signupInstitution)
        localStorage.setItem(
          "gradspaths_signup_institution",
          signupInstitution.value,
        );
      const signupModal = document.getElementById("signup-modal");
      if (signupModal) signupModal.classList.add("hidden");
      // Backend would handle actual signup here
    });
  }
});
