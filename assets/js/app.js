      function unlockCard(cardId) {
        const card = document.getElementById(cardId);
        if (!card) return;

        // 1. Hide Overlay
        const overlay = card.querySelector(".lock-overlay");
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";

        // 2. Reveal Content
        const content = card.querySelector(".content-layer");
        content.style.opacity = "1";
        content.style.filter = "none"; // remove blur and grayscale
        content.classList.remove("grayscale");

        // 3. Turn on Border Glow
        const glow = card.querySelector(".unlock-glow");
        glow.style.opacity = "1";
      }

      function switchTab(tabName) {
        const tabs = document.querySelectorAll(".tab-btn");
        const inactiveClass =
          "bg-transparent text-[#475569] dark:text-slate-300 hover:text-slate-900 dark:hover:text-white";
        const activeClass =
          "bg-[radial-gradient(circle_at_0%_0%,#ff9cf0,#a259ff)] text-white shadow-[0_12px_30px_rgba(148,163,184,0.6)] dark:shadow-none";

        tabs.forEach((tab) => {
          tab.className = `tab-btn px-3.5 sm:px-4 py-3
           rounded-full
           text-[11px] sm:text-[12px]
           leading-none whitespace-nowrap
           font-semibold tracking-widest uppercase
           transition-all duration-200
           bg-emerald-100 dark:bg-emerald-900/40
           text-emerald-700 dark:text-emerald-300
           hover:bg-emerald-200 dark:hover:bg-emerald-800
           focus:outline-none${inactiveClass}`;
          tab.setAttribute("aria-selected", "false");
        });

        const activeTab = document.getElementById(`tab-${tabName}`);
        activeTab.className = `tab-btn px-3.5 sm:px-4 py-3
           rounded-full
           text-[11px] sm:text-[12px]
           leading-none whitespace-nowrap
           font-semibold tracking-widest uppercase
           transition-all duration-200
           bg-emerald-100 dark:bg-emerald-900/40
           text-emerald-700 dark:text-emerald-300
           hover:bg-emerald-200 dark:hover:bg-emerald-800
           focus:outline-none${activeClass}`;
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
      });