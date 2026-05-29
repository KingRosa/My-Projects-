# Treact Template — FES Advanced Project

A pixel-perfect, fully responsive multi-section landing page built from scratch as part of the Front End Simplified (FES) curriculum. This project demonstrates mastery of modern semantic HTML5, component-driven CSS architecture, layout methodologies, and dynamic DOM manipulation with vanilla JavaScript.


---

## ✨ Features Implemented

* **Responsive Desktop/Mobile Navigation:** Features a clean desktop navigation layout that dynamically adapts to a hamburger menu overlay on smaller tablet and mobile viewport screens.
* **Dynamic Testimonial Carousel Slider:** Implemented a pure vanilla JavaScript data-driven slider array that allows users to loop seamlessly back and forth through multiple client reviews (including customized mock profiles like Carl Murrow, Snoopy, and Timmy Tom) without resetting or breaking page layout flows.
* **Component-Driven Architecture:** Followed scalable class-naming patterns (`.feature__row`, `.testimonial__profile`) to keep structural components modular, reusable, and cleanly separated.
* **Fluid Responsive Layout Breakpoints:** Utilized defensive structural CSS constraints (`max-width`, `flex-wrap`, and isolated viewport media-query boundaries) to optimize readability down to `480px` devices.

---

## 🛠️ Built With

* **HTML5:** Semantic architecture (`<header>`, `<main>`, `<section>`, `<figure>`, `<footer>`) for optimized SEO markup layouts.
* **CSS3:** Custom `@font-face` integration, flexible CSS layouts (Flexbox grids), transitions (`ease 300ms`), and mobile-responsive intersection media breakpoints.
* **FontAwesome v6.5.1:** External CDN integration for vector iconography across feature boxes and mobile navigation targets.
* **JavaScript (ES6):** Dynamic UI state controls, array iteration logic, state tracking (`currentIndex`), and direct DOM manipulation hooks.

---

## 📂 Project Structure

```text
├── index.html          # Main application semantic markup shell
├── styles.css          # Core visual theme layout mechanics
├── index.js            # Carousel state logic & navigation overlay toggle
└── assests/            # Project vectors, brand assets, and custom typography
