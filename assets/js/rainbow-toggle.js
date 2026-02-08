(() => {
  const STORAGE_KEY = 'academic_rainbow_outline';
  const ENABLED_CLASS = 'rainbow-outline';

  const readStoredValue = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch (_) {
      return false;
    }
  };

  const writeStoredValue = (enabled) => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
    } catch (_) {
      // No-op when storage is unavailable.
    }
  };

  const setState = (button, enabled) => {
    document.documentElement.classList.toggle(ENABLED_CLASS, enabled);
    button.classList.toggle('active', enabled);
    button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    button.setAttribute('title', enabled ? 'Rainbow outlines enabled' : 'Rainbow outlines disabled');
  };

  const createToggleButton = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'rainbow-outline-toggle';
    button.className = 'btn btn-link nav-link';
    button.setAttribute('aria-label', 'Toggle rainbow outlines');
    button.innerHTML = '<i class="fas fa-palette"></i><span class="visually-hidden">Toggle rainbow outlines</span>';
    return button;
  };

  document.addEventListener('DOMContentLoaded', () => {
    const sidebarBottom = document.querySelector('#sidebar .sidebar-bottom');
    if (!sidebarBottom || document.getElementById('rainbow-outline-toggle')) {
      return;
    }

    const button = createToggleButton();
    const initialState = readStoredValue();
    setState(button, initialState);

    button.addEventListener('click', () => {
      const nextState = !document.documentElement.classList.contains(ENABLED_CLASS);
      setState(button, nextState);
      writeStoredValue(nextState);
    });

    sidebarBottom.prepend(button);
  });
})();
