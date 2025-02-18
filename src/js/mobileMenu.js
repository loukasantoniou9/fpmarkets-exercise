export function initMobileMenu() {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  // Mobile menu accordion
  function initMobileAccordion() {
    if (window.innerWidth <= 600) {
      const toggleButtons = document.querySelectorAll('.mobile-toggle');
      
      toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Close all other open menus
          const allMenus = document.querySelectorAll('.menu-list.active');
          const allToggles = document.querySelectorAll('.mobile-toggle.active');
          
          allMenus.forEach(menu => {
            if (menu !== this.nextElementSibling) {
              menu.classList.remove('active');
            }
          });
          
          allToggles.forEach(toggle => {
            if (toggle !== this) {
              toggle.classList.remove('active');
            }
          });
          
          // Toggle current menu
          this.classList.toggle('active');
          const menuList = this.nextElementSibling;
          menuList.classList.toggle('active');
          
          // Smooth scroll to show the expanded menu if it's below the viewport
          if (menuList.classList.contains('active')) {
            const rect = menuList.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
              window.scrollBy({
                top: rect.bottom - window.innerHeight + 20,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    }
  }

  // Initialize on load
  initMobileAccordion();
  
  // Reinitialize when window is resized
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMobileAccordion, 250);
  });
} 