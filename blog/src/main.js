import { Home, initializeEvents } from './routes/home';
// import Blog from './routes/blog';

const routes = {
  '/': Home,
  // '/blog': Blog,
};

const navigateTo = (path) => {
  history.pushState(null, null, path);
  router();
};

const router = () => {
  const path = window.location.pathname;
  const page = routes[path] || (() => '<h1>404 Not Found</h1>');
  
  // Render the page content
  document.querySelector('#app').innerHTML = page();
  
  // Initialize event listeners for the rendered content
  initializeEvents();
};

// Handle browser navigation (back/forward buttons)
window.addEventListener('popstate', router);

// Handle initial page load and link navigation
window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const path = e.target.href;
      navigateTo(path);
    }
  });

  // Call the router to render the initial page
  router();
});
