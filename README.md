# Abhinav Cheepa — Portfolio

**AI/ML Engineer · NLP Researcher · IIT Bombay**

## Tech Stack
- React 18 + Vite
- Three.js + React Three Fiber + Drei (3D hero)
- Framer Motion (animations)
- Tailwind CSS (styling)
- Custom neural network canvas background

## Setup

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

## Customization

Edit `src/constants/index.js` to update:
- Projects
- Skills
- Experience
- Research interests

Replace email in `src/sections/Contact.jsx` with EmailJS credentials.

## Structure

```
src/
  components/   # Navbar, LoadingScreen, CursorGlow, NeuralCanvas
  sections/     # Hero, About, Skills, Projects, Research, Experience, Contact, Footer
  constants/    # Data (projects, skills, etc.)
  hooks/        # useTypingEffect, useTilt
```
