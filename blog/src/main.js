import Home from './routes/home';

const routes = {
  '/': Home,
};

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  const path = window.location.pathname;
  console.log(`Navigating to ${path}`);
  const page = routes[path] || (() => `<h1>404 - Not Found</h1>`);
  document.getElementById('app').innerHTML = page();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router(); // Load the initial page
});
