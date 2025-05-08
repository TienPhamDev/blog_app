import { Home, initializeEventsHomePage } from './routes/home';
import { Blog, initializeEventsBlogPage } from './routes/blog';
import { About , initializeEventsAboutPage } from './routes/about';
import { Newsletter,initializeEventsNewsPage } from './routes/newsletter';
import { Post, initializeEventsPostPage } from './routes/post';
const routes = {
  '/': Home,
  '/blog': Blog,
  "/about": About,
  '/newsletter': Newsletter,
};

const navigateTo = (path) => {
  history.pushState(null, null, path);
  router();
};

const router = () => {
  const path = window.location.pathname;
  
  //check for dynamic routes
  if (path.includes('/post/')) {
    const slug = path.split('/').pop();

    const post = Post(slug);
    document.querySelector('#app').innerHTML = post;
    initializeEventsPostPage(slug);
    return;
  }
  //handle static routes
  const page = routes[path] || (() => '<h1>404 Not Found</h1>');
  
  // Render the page content
  document.querySelector('#app').innerHTML = page();
  
  // Initialize event listeners for the rendered content
  if (path === '/') initializeEventsHomePage(path);
  if (path === '/blog') initializeEventsBlogPage(path);
  if (path === '/about') initializeEventsAboutPage(path);
  if (path === '/newsletter') initializeEventsNewsPage(path);
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
