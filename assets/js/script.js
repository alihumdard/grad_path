        // Select elements
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const icon = menuBtn.querySelector('i');

        // Toggle Function
        menuBtn.addEventListener('click', () => {
            // 1. Toggle hidden class
            mobileMenu.classList.toggle('hidden');

            // 2. Change Icon (Bars <-> Xmark)
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });

        // Theme Toggle (Optional, included for completeness)
        const themeBtn = document.getElementById('theme-toggle');
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });