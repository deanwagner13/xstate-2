import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const routes = {
  '#home': 'pages/home.html',
  '#about': 'pages/about.html',
};

const content = document.getElementById('content');

async function loadContent() {
  const path = routes[window.location.hash] || routes['#home'];
  const response = await fetch(path);
  content.innerHTML = await response.text();
}

window.addEventListener('hashchange', loadContent);

// Initial load
loadContent();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);