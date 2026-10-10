/**
 * Leben am Tollensetal - Original-Redaktionslayout
 * JavaScript für Tab-Navigation und Brandkatastrophe-Mahnmal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Tab-Navigation
  const navButtons = document.querySelectorAll('[data-page]');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  const switchTab = (targetPage) => {
    // Buttons aktualisieren
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-page') === targetPage) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Panels umschalten
    tabPanels.forEach(panel => {
      if (panel.id === `tab-${targetPage}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-page');
      if (target) {
        switchTab(target);
        window.location.hash = target;
      }
    });
  });

  // URL Hash Unterstützung
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const validTabs = ['home', 'aktuell', 'links', 'kontakt', 'dokumente'];
    if (validTabs.includes(hash)) {
      switchTab(hash);
    }
  }

  // Brandkatastrophe Modal
  const modal = document.querySelector('.modal-backdrop');
  const openModalBtns = document.querySelectorAll('.open-memorial-modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
