# Professional Portfolio - Athishta

A modern, high-performance, and visually stunning developer portfolio built with a premium 3D aesthetic. This project showcases a blend of technical skills, personal journey, and a curated selection of projects using a sophisticated Bento grid layout.

## 🚀 Live Demo
The project is configured to run locally using Vite.
- **Local Dev**: `http://localhost:5173` (or the port assigned by Vite)

## ✨ Key Features

### 1. Modern Hero Section
- **Dynamic Roles Carousel**: An infinite vertical slider highlighting roles like "Data Scientist", "Flutter Developer", and "Designer".
- **Social Integration**: Direct, styled links to GitHub, LinkedIn, Instagram, and Medium.
- **Premium Imagery**: A unique dual-profile image container with specific positioning.

### 2. Deep-Dive "About" Section
- **My Journey Timeline**: A vertically-aligned, alternating timeline documenting educational milestones and professional experience.
- **Infinite Skills Carousel**: 
  - **Refined 5-item Visibility**: Displays one focused skill and two neighbors on each side.
  - **"Falling Scaling" Effect**: Center items are largest (`scale(1.2)`), decreasing in size toward the edges (`scale(0.75)`).
  - **Premium Transitions**: Custom `cubic-bezier` timing for smooth, organic motion.
- **Detailed Subsections**: Categorized information for Workshops, Certifications, Areas of Interest, Languages, and Hobbies in a responsive grid.

### 3. Bento Projects Grid
- **Custom Wireframe Layout**: Implements a 3-top, 2-bottom grid configuration as requested.
- **Glassmorphism Design**: Semi-transparent backgrounds with blur effects and glowing borders.
- **GitHub Sync**: Projects (Vestr, Zora, ScriptClean, etc.) are fetched directly with tech tags and repository links.

### 4. Direct Contact Panel
- Clean, grid-based layout for Phone, Email, LinkedIn, and Location.
- Custom SVG icons with cyan accents and interactive hover states.

## 🛠️ Tech Stack
- **Framework**: [React 18+](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom tokens, Grid, Flexbox, Keyframes)
- **Icons**: SVG / Devicons

## 📦 Implementation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AsherWood39/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build
Generate a production-ready build in the `dist/` folder:
```bash
npm run build
```

## 📂 Project Structure
- `src/App.tsx`: Contains the core logic, state management for carousels, and section content.
- `src/App.css`: Defines the global design system, Bento grid layouts, and advanced animations.
- `src/assets/`: Stores static SVG icons and profile assets.

---