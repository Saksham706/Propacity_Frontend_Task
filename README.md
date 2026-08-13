# MUREC — Premium Real Estate Experience

A modern, responsive frontend redesign of the **MUREC (Madhusudan Urban Real Estate Collection)** website, developed as part of the **Frontend Developer hiring assignment for Propacity**.

The project combines authentic MUREC content with a fresh, premium digital experience inspired by the visual language of the Timeless website. The implementation is original and focuses on immersive visuals, smooth animations, responsive design, reusable React components, and attention to detail.

---

## 🌐 Live Demo

**Live Website:**
**`https://propacity-frontend-task.vercel.app/`**

---

## 📌 Project Overview

This project was created for the **Propacity Frontend Developer Assignment**.

The assignment required redesigning a relevant page or section from the MUREC website while taking design inspiration from the Timeless website.

The main objective was to create a completely fresh and modern interface that maintains the original MUREC content while delivering a more immersive, premium, and engaging user experience.

### Primary Goals

* Create a premium and modern visual experience.
* Preserve the relevant MUREC content.
* Develop an original design inspired by Timeless.
* Introduce smooth animations and interactions.
* Build a fully responsive experience.
* Maintain clean and reusable React architecture.
* Optimize the experience for desktop, tablet, and mobile.
* Demonstrate attention to typography, spacing, motion, and visual hierarchy.

---

## 🎯 Assignment Reference

### Content Source

**MUREC — Madhusudan Urban Real Estate Collection**

https://www.murec.com/

The MUREC website was used as the primary content source for the redesign. The source website contains sections including the MUREC legacy, values, collection, sustainability philosophy, associations, partners, and contact information.

### Design Inspiration

**Timeless**

https://timeless.club/en

The Timeless website was used as visual inspiration for:

* Premium typography
* Minimal layouts
* Large visual compositions
* Spacing
* Motion
* Transitions
* Immersive storytelling
* Overall visual sophistication

The Timeless website was **not copied or cloned**. The final interface is an independent implementation created specifically for this assignment.

---

# ✨ Key Features

## 1. Premium Hero Experience

The hero section is designed to immediately establish the visual identity of the website.

It includes:

* Full-screen visual composition
* Large typography
* Video integration
* Smooth entrance animations
* Strong visual hierarchy
* Responsive behavior
* Immersive presentation

---

## 2. Video-Based Visual Storytelling

The project uses locally hosted video assets to create a more immersive experience.

Current video assets include:

```text
public/
└── videos/
    ├── 01-home-hero.mp4
    └── 02-logo-reveal.mp4
```

Local video assets provide more predictable rendering during evaluation and allow the visual experience to remain independent of external video hosting.

---

## 3. GSAP Animations

The website uses **GSAP** for advanced animations and interactions.

The implementation includes scroll-based animation behavior using:

* GSAP
* ScrollTrigger
* Timeline-based animations
* Element reveals
* Section transitions
* Scroll-linked motion

Animations are used intentionally to improve the storytelling experience rather than simply adding motion for visual effects.

---

## 4. Smooth Scroll Experience

The page is designed as a continuous visual journey.

The experience follows a flow similar to:

```text
Hero
  ↓
Brand Introduction
  ↓
Legacy
  ↓
Values
  ↓
Collection
  ↓
Sustainability
  ↓
Associations
  ↓
Partners
  ↓
Contact
```

Each section has its own visual hierarchy while maintaining consistency with the overall design system.

---

## 5. Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior includes:

* Flexible layouts
* Responsive typography
* Adaptive spacing
* Mobile-friendly navigation
* Responsive videos
* Flexible content positioning
* Prevention of horizontal overflow

The mobile experience is not simply a scaled-down desktop layout. Components and spacing are adjusted to maintain usability on smaller screens.

---

## 6. Reusable React Components

The application follows a component-based React architecture.

Major interface sections are separated into reusable components to improve:

* Maintainability
* Readability
* Reusability
* Scalability
* Debugging

This approach also makes it easier to modify individual sections without affecting the rest of the application.

---

# 🛠️ Tech Stack

| Technology         | Purpose                            |
| ------------------ | ---------------------------------- |
| React.js           | Frontend application               |
| Vite               | Development and production tooling |
| JavaScript         | Application logic                  |
| HTML5              | Semantic structure                 |
| CSS3               | Styling and responsive layouts     |
| GSAP               | Animation engine                   |
| GSAP ScrollTrigger | Scroll-based animations            |
| Git                | Version control                    |
| Vercel             | Deployment                         |

---

# 📁 Project Structure

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

# 🧩 Project Architecture

The project is structured around reusable React components and page-level compositions.

## `src/components`

Contains reusable UI sections and components.

Examples include:

* Navigation
* Hero
* Legacy section
* Content sections
* Animation sections
* Footer
* Other reusable interface elements

---

## `src/pages`

Contains page-level compositions and larger website sections.

Separating pages from reusable components keeps the application easier to understand and maintain.

---

## `src/data`

Contains structured content used by the application.

Separating content from presentation makes it easier to modify website content without changing the underlying component logic.

---

## `public/videos`

Contains the video assets used by the immersive visual sections.

---

# 🎨 Design Philosophy

The design was developed around three core principles.

## Minimalism

The interface avoids unnecessary visual elements and allows the main content, typography, imagery, and motion to remain the focus.

## Visual Storytelling

Large typography, video, spacing, and transitions are used to guide the user through the MUREC story.

## Purposeful Motion

Animations are not added simply for decoration.

Motion is used to:

* Establish hierarchy
* Reveal information
* Guide attention
* Connect sections
* Improve transitions
* Create a premium browsing experience

---

# 🎬 Animation Approach

GSAP was selected because it provides precise control over complex animations and scroll interactions.

The general animation flow is:

```text
Page Load
    ↓
Initial Hero Animation
    ↓
Scroll Interaction
    ↓
Content Reveal
    ↓
Section Animation
    ↓
Visual Transition
```

GSAP ScrollTrigger is used to synchronize selected animations with the user's scroll position.

The animation system is designed to maintain a balance between visual impact and usability.

---

# 📱 Responsive Strategy

## Desktop

The desktop experience focuses on:

* Large typography
* Full-width visual sections
* Immersive video
* Generous spacing
* Scroll-based animation
* Strong visual compositions

## Tablet

The tablet experience adapts:

* Typography scale
* Section spacing
* Media dimensions
* Navigation
* Content positioning

## Mobile

The mobile experience prioritizes:

* Readability
* Touch-friendly interaction
* Proper content hierarchy
* Responsive videos
* Simplified layouts
* Reduced unnecessary spacing
* Prevention of horizontal scrolling

---

# ⚡ Performance Considerations

Performance was considered throughout the implementation.

Key considerations include:

* Component reuse
* Vite production builds
* Controlled GSAP animations
* Scroll-triggered animations
* Local media organization
* Avoiding unnecessary duplication
* Responsive media handling
* Production asset optimization

Large video assets can be further compressed or served in adaptive formats for a production-scale deployment.

---

# 💻 Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

Verify your installation:

```bash
node -v
npm -v
git --version
```

---

# 📦 Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Development

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🏗️ Production Build

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🌐 Deployment

The project is configured for deployment through **Vercel**.

## Build Command

```bash
npm run build
```

## Output Directory

```text
dist
```

## Deployment Configuration

The repository contains:

```text
vercel.json
```

which is used as part of the Vercel deployment configuration.

### Live Deployment

Replace this with the final deployment URL:

```text
https://YOUR-PROJECT-NAME.vercel.app
```

---

# 🔍 Code Quality

The project follows a modular component-based structure.

Development practices include:

* Functional React components
* Reusable components
* Separation of content and UI
* Meaningful naming
* Modular CSS
* Isolated animation logic
* ESLint configuration
* Minimal unnecessary duplication
* Clear component responsibilities

---

# 📊 Assignment Evaluation Coverage

| Evaluation Criteria | Implementation                                      |
| ------------------- | --------------------------------------------------- |
| UI/UX               | Premium visual hierarchy and immersive interactions |
| Visual Design       | Original MUREC redesign inspired by Timeless        |
| Responsive Design   | Desktop, tablet and mobile support                  |
| Code Quality        | Modular React component architecture                |
| Performance         | Vite build optimization and controlled animations   |
| Attention to Detail | Typography, spacing, transitions and motion         |
| Creativity          | Original visual interpretation                      |
| Usability           | Responsive and intuitive interface                  |

---

# 🧠 Technical Decisions

## Why React?

React provides a component-based architecture that makes the website modular, reusable, and easier to maintain.

## Why Vite?

Vite provides fast development startup and an efficient production build process for modern React applications.

## Why GSAP?

GSAP provides precise control over animation timelines and complex interactions.

## Why ScrollTrigger?

ScrollTrigger allows animations to respond directly to the user's scroll position, making it suitable for the immersive storytelling approach used in this project.

## Why Local Video Assets?

Local video assets provide consistent media availability during evaluation and reduce dependency on external media hosting.

## Why Component-Based Architecture?

Breaking the interface into smaller components makes the code easier to:

* Maintain
* Debug
* Reuse
* Extend
* Scale

---

# 🔮 Future Improvements

If this project were developed beyond the assignment, possible improvements would include:

* Advanced page transitions
* More complex interactive animations
* Adaptive video loading
* Further image optimization
* Lazy loading for visual assets
* Lighthouse-based performance optimization
* Accessibility audit
* WCAG improvements
* CMS-driven content
* Additional micro-interactions
* Analytics integration
* SEO improvements
* Progressive image loading

---

# 📌 Content Attribution

This project was developed specifically for the **Propacity Frontend Developer hiring assignment**.

The MUREC website was used as the primary content reference as requested in the assignment. The original MUREC site describes its legacy, values, collection, sustainability philosophy, associations, partners, and contact information.

The Timeless website was used only as a design inspiration/reference.

The final implementation is an original frontend design and is not intended to be a pixel-perfect recreation of the Timeless website.

---

# 👨‍💻 Developer

## Saksham Agarwal

**Frontend / Full-Stack Developer**

### Technologies

```text
React.js
JavaScript
HTML5
CSS3
GSAP
Node.js
Express.js
MongoDB
Vite
Git
```

---

# 📬 Assignment Submission

### Submitted For

**Propacity — Frontend Developer Hiring Assignment**

### Assignment

**MUREC Website Redesign**

### Deliverables

* React source code
* Responsive frontend implementation
* GSAP animations
* Scroll-based interactions
* Video assets
* Vercel deployment configuration
* Project documentation

### Live Website

```text
PASTE-YOUR-VERCEL-URL-HERE
```

### GitHub Repository

```text
PASTE-YOUR-GITHUB-REPOSITORY-URL-HERE
```

---

# ⭐ Final Note

This project was built to demonstrate the ability to transform an existing brand/content direction into a polished and modern digital experience.

The implementation focuses on:

```text
Visual Design
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
      +
Attention to Detail
```

The primary objective was to create a website that feels **premium, immersive, responsive, and maintainable**, while preserving the core MUREC content and developing an original visual interpretation inspired by the Timeless design language.

---

## License

This project was created for the **Propacity Frontend Developer hiring assignment** and is intended for evaluation purposes.
