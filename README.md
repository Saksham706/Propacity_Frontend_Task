# Murec — Premium Real Estate Experience

A modern, responsive frontend redesign of the **Murec website**, created as part of the **Frontend Developer assignment for Propacity**.

The project combines the content and visual identity of Murec with a fresh, premium interface inspired by the design language, typography, spacing, motion, and immersive experience of the Timeless website — while maintaining an original implementation rather than directly reproducing its design.

---

## ✨ Project Overview

This project focuses on transforming the existing Murec web experience into a modern, visually engaging and responsive website.

The primary goals were:

* Create a premium and modern visual experience.
* Preserve the core content and messaging from Murec.
* Take inspiration from the immersive design language of Timeless.
* Introduce smooth animations and interactions.
* Maintain excellent usability across desktop, tablet and mobile.
* Build the interface using reusable React components.
* Keep the project structure clean and maintainable.
* Optimize visual assets and animations for a smooth browsing experience.

---

## 🎯 Assignment Objective

The assignment required the following:

> Redesign a webpage using content from the Murec website while taking design inspiration from the Timeless website.

### Content Source

Murec
https://www.murec.com/

### Design Inspiration

Timeless
https://timeless.club/en

The implementation does **not** attempt to clone the Timeless website. Instead, it uses its premium visual characteristics as inspiration while creating an independent layout, animation system, component structure and user experience.

---

## 🚀 Key Features

### Premium Hero Section

* Full-screen visual introduction.
* High-impact typography.
* Immersive video/visual background.
* Smooth entrance animations.
* Responsive layout across screen sizes.

### Smooth Scroll Experience

* Scroll-based animations.
* Section transitions.
* Element reveal effects.
* Motion synchronized with the user's scrolling.
* Smooth visual progression between sections.

### Interactive Navigation

* Clean and minimal navigation.
* Responsive navigation behavior.
* Smooth interaction states.
* Navigation designed to remain consistent with the premium visual direction.

### Responsive Design

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior has been implemented using flexible layouts, responsive typography, spacing adjustments and mobile-specific UI handling.

### Video Integration

The project uses locally hosted video assets for immersive visual sections.

Example assets include:

```text
public/
└── videos/
    ├── 01-home-hero.mp4
    └── 02-logo-reveal.mp4
```

Local video assets help provide a consistent visual experience without relying entirely on external media sources.

### Reusable React Components

The interface is divided into reusable components and pages rather than placing the entire application inside a single component.

This makes the project easier to:

* Maintain
* Extend
* Debug
* Reuse
* Scale

### Animation System

GSAP and ScrollTrigger are used for advanced interactions and scroll-based animations.

Animations are designed to enhance the interface without distracting from the content.

---

## 🛠️ Tech Stack

| Technology         | Purpose                              |
| ------------------ | ------------------------------------ |
| React.js           | Frontend UI development              |
| Vite               | Development server and build tooling |
| JavaScript         | Application logic                    |
| CSS3               | Styling and responsive layouts       |
| GSAP               | Advanced animations                  |
| GSAP ScrollTrigger | Scroll-based animations              |
| HTML5              | Semantic page structure              |
| Vercel             | Deployment                           |

---

## 📁 Project Structure

```text
frontend/
│
├── public/
│   ├── videos/
│   │   ├── 01-home-hero.mp4
│   │   └── 02-logo-reveal.mp4
│   │
│   └── ...
│
├── src/
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── data/
│   │   └── ...
│   │
│   ├── pages/
│   │   └── ...
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

---

## 🧩 Architecture

The application follows a component-based React architecture.

### `src/components`

Contains reusable UI sections and interface components.

Examples can include:

* Navbar
* Hero
* Content sections
* Animation sections
* Footer
* Other reusable UI elements

### `src/pages`

Contains page-level sections and compositions.

This separation helps keep the application modular and makes individual sections easier to maintain.

### `src/data`

Contains structured content/data used by the UI.

Keeping content separate from presentation makes it easier to update website information without modifying the component logic.

### `public/videos`

Contains locally hosted video assets used by the website.

---

## 🎨 Design Approach

The design direction was based on three primary principles:

### 1. Minimalism

The interface avoids unnecessary UI elements and focuses attention on the primary content.

### 2. Visual Storytelling

Large typography, imagery, video and motion are used to guide users through the page.

### 3. Motion With Purpose

Animations are used to:

* Establish hierarchy.
* Reveal content.
* Create visual continuity.
* Improve perceived interaction quality.
* Make scrolling feel more immersive.

The goal was not simply to add animations, but to make motion part of the overall storytelling experience.

---

## ⚡ Performance Considerations

Several considerations were taken into account while developing the website:

* Reusable React components.
* Local asset organization.
* Avoidance of unnecessary component duplication.
* Efficient animation handling with GSAP.
* Scroll-triggered animations instead of continuously running animations where possible.
* Responsive media handling.
* Production build optimization through Vite.

Large visual assets such as videos should be compressed and optimized appropriately for production environments.

---

## 📱 Responsive Strategy

The layout was designed with a responsive-first mindset.

### Desktop

The desktop experience focuses on:

* Large visual compositions.
* Full-width sections.
* Large typography.
* Immersive animations.
* Horizontal spacing and visual depth.

### Tablet

The tablet layout adjusts:

* Typography scale.
* Section spacing.
* Navigation behavior.
* Media sizing.
* Content positioning.

### Mobile

The mobile experience prioritizes:

* Readability.
* Touch-friendly interactions.
* Simplified layouts.
* Proper video scaling.
* Reduced spacing where necessary.
* Preventing horizontal overflow.

The objective is to maintain the same visual identity without simply shrinking the desktop layout.

---

## 🎬 Animation Philosophy

GSAP was selected because the project requires precise control over animations and scroll-based interactions.

Animations are primarily used for:

```text
Page Load
    ↓
Hero Introduction
    ↓
Scroll Interaction
    ↓
Content Reveal
    ↓
Section Transition
    ↓
Visual Storytelling
```

`ScrollTrigger` allows animation timelines to respond naturally to the user's scroll position.

The animation approach prioritizes smoothness and visual consistency rather than excessive motion.

---

## 💻 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

You can verify your Node.js and npm installations with:

```bash
node -v
npm -v
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Development Server

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Code Quality

The project follows a modular structure intended to keep responsibilities separated.

Key practices include:

* Functional React components.
* Reusable UI components.
* Separate styling files where appropriate.
* Clear component responsibilities.
* Meaningful naming conventions.
* Minimal unnecessary duplication.
* Animation logic isolated within relevant components.
* ESLint configuration for maintaining code quality.

---

## 🌐 Deployment

The project is configured for deployment using Vercel.

### Build Command

```bash
npm run build
```

### Output Directory

```text
dist
```

### Vercel Configuration

The project includes:

```text
vercel.json
```

This configuration is used to support the deployment setup.

### Live Website

**Live Demo:**
`<YOUR_VERCEL_DEPLOYMENT_URL>`

### Repository

**GitHub Repository:**
`<YOUR_GITHUB_REPOSITORY_URL>`

> Replace the placeholders above with the final deployment and repository links before submitting the assignment.

---

## 🖼️ Project Highlights

The project focuses on delivering:

* Premium visual hierarchy
* Immersive hero experience
* Modern typography
* Smooth scrolling
* GSAP-powered animations
* Video-based visual storytelling
* Responsive layouts
* Modular React architecture
* Clean and maintainable code
* Mobile-friendly experience

---

## 🔐 Content & Design Attribution

The project was created specifically for the Propacity frontend evaluation assignment.

### Content Reference

Murec content was used as the primary content source as requested in the assignment.

### Design Inspiration

The visual direction was inspired by the Timeless website.

The implementation is an original frontend design and does not attempt to reproduce the Timeless website pixel-for-pixel.

---

## 🧠 Design Decisions

### Why React?

React provides a component-based architecture that makes the interface easier to organize, reuse and maintain.

### Why Vite?

Vite provides a fast development experience and an efficient production build pipeline for modern React applications.

### Why GSAP?

GSAP provides precise control over complex animations and allows animation timelines to be synchronized with scrolling through ScrollTrigger.

### Why Local Video Assets?

Using local video assets provides predictable rendering and avoids depending on third-party video hosting during the evaluation.

### Why Component-Based Sections?

Breaking the interface into individual sections makes it easier to:

* Modify individual parts.
* Reuse components.
* Maintain animation logic.
* Improve readability.
* Scale the application.

---

## 📊 Evaluation Criteria Coverage

| Evaluation Area     | Implementation                                            |
| ------------------- | --------------------------------------------------------- |
| UI/UX               | Premium visual hierarchy and modern layout                |
| Visual Design       | Original design inspired by Timeless                      |
| Responsiveness      | Desktop, tablet and mobile layouts                        |
| Code Quality        | Modular React architecture                                |
| Performance         | Optimized Vite production build and controlled animations |
| Attention to Detail | Typography, spacing, transitions and interactions         |
| Creativity          | Original interpretation of the reference design           |
| Usability           | Responsive and accessible interaction patterns            |

---

## 🔮 Future Improvements

If this project were extended beyond the assignment, the following improvements could be added:

* Advanced page transitions.
* More interactive 3D visual elements.
* Improved image lazy loading.
* Further video compression and adaptive video loading.
* Accessibility audit and WCAG improvements.
* Automated Lighthouse performance optimization.
* Additional responsive breakpoints.
* CMS-driven content management.
* More detailed micro-interactions.
* Analytics and user interaction tracking.

---

## 📌 Important Notes

This project was developed as a frontend-focused implementation.

The primary focus was on:

```text
Design
   +
React Architecture
   +
Responsive Development
   +
Animation
   +
Performance
   +
User Experience
```

The application does not require a separate backend for the core frontend experience.

---

## 👨‍💻 Developer

**Saksham Agarwal**

Frontend / Full-Stack Developer

### Core Technologies

```text
React.js
JavaScript
HTML5
CSS3
Node.js
Express.js
MongoDB
GSAP
Git
Vite
```

---

## 📬 Assignment Submission

Prepared for:

**Propacity — Frontend Developer Hiring Assignment**

Assignment focus:

> Murec content + Timeless-inspired premium frontend experience

Submission includes:

* React source code
* Responsive frontend implementation
* Animation and interaction system
* Video assets
* Vercel deployment configuration
* Project documentation

---

## ⭐ Final Note

This project was built with the goal of demonstrating not only frontend implementation skills, but also the ability to translate a design direction into a polished, responsive and maintainable user experience.

The emphasis was placed on **visual quality, interaction design, responsive behavior, reusable architecture and attention to detail** while keeping the implementation original.

---
