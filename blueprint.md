# Project Blueprint

## Overview

This project is a single-page web application built with vanilla JavaScript, HTML, and CSS. It uses Material Design for styling and Firebase for hosting and database services. The application is designed to be mobile-first and does not use any build tools.

## Implemented Features

*   **Project Scaffolding:** Basic project structure with `css`, `js`, `assets`, `statemachines`, and `pages` directories.
*   **XState Integration:** The XState library is included via a CDN for state management.
*   **Material Design:** The application will use Material Design for styling.
*   **Firebase Integration:** The application will be set up to use Firebase Hosting and Realtime Database.
*   **Single-Page App (SPA) architecture:** A simple client-side router will be implemented to handle page navigation without full page reloads.
*   **Layout:** The UI will have a persistent navbar at the top and a dynamic content area.

## Current Plan

### Phase 1: Project Setup & Layout

1.  **Create `blueprint.md`:** Document the project's architecture and features.
2.  **Update `index.html`:**
    *   Add Material Design dependencies (CSS and icons).
    *   Add Firebase SDKs.
    *   Define the main layout with a `<header>` for the navbar and a `<main>` for the content.
3.  **Create `css/style.css`:**
    *   Implement mobile-first styles for the layout, navbar, and content area.
    *   Use CSS variables for theming.
4.  **Create `js/main.js`:**
    *   Implement a simple client-side router to load content from the `pages` directory into the `<main>` element.
    *   Initialize Firebase.
5.  **Create initial pages:**
    *   Create `pages/home.html` and `pages/about.html`.
6.  **Configure Firebase:**
    *   Create `js/firebase-config.js` for the Firebase configuration (with placeholders).
    *   Create `firebase.json` and `.firebaserc` to configure Firebase hosting.
    *   Update `.idx/mcp.json` for Firebase server configuration.
7.  **Move files:** Move `style.css` and `main.js` to their respective directories.
