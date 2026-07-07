<p align="center">
  <img src="profileee.png" alt="Neurome Profile" width="100%" />
</p>

<br />

<p align="center">
  <a href="https://github.com/samay-hash/NEUROME/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  </a>
  <a href="https://github.com/samay-hash/NEUROME/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs Welcome">
  </a>
</p>

<p align="center">
  <img src="neurome-title.svg" alt="NEUROME: A Gen Z Emotional Comfort + Identity Platform" width="800" />
</p>

> *“A place to land when your mind is too loud.”*  
> *“Your mood has a room here.”*  
> *“Comfort that actually gets your vibe — not generic wellness content.”*

---

## 📖 About Neurome

Neurome is an open-source, mood-and-identity-based comfort platform designed specifically for Gen Z. Instead of offering generic wellness content or sterile clinical tools, Neurome provides curated micro-experiences, calming tools, and aesthetic environments matched directly to your current emotional state and personality ("vibe").

## ✨ Features

- **Dynamic Mood Rooms:** Tailored environments based on your current feelings (e.g., Anxious, Lonely, Heartbroken, Overthinking).
- **Identity Universes:** Culturally-coded spaces matching your aesthetic (e.g., Girlhood, Dark Academia, Gym Discipline).
- **Calm Orb:** Interactive breathing exercises to quickly reduce anxiety.
- **Brain Dump:** A completely private, encrypted space to write out your thoughts and clear your mind.
- **Curated Comfort Content:** Aesthetic wallpapers, ambient audio loops, and highly relatable micro-content.

## 🛠 Tech Stack

Neurome is built with modern, scalable, and lean technologies:

**Frontend:**
- [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (for fluid UI animations)
- [Zustand](https://github.com/pmndrs/zustand) (State Management)
- [Lucide React](https://lucide.dev/) (Icons)

**Backend:**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) (Authentication)
- [Zod](https://zod.dev/) (Validation)

---

## 🚀 Getting Started (Local Development)

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have the following installed on your machine:
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (Running locally or a MongoDB Atlas URI)

### 1. Clone the repository

```bash
git clone https://github.com/samay-hash/NEUROME.git
cd NEUROME
```

### 2. Setup the Backend

```bash
# Navigate to the backend directory
cd lumina-backend

# Install dependencies
npm install

# Create a .env file based on the example
cp .env.example .env

# Start the backend server (runs on http://localhost:5001)
npm run dev
```

*(Note: Ensure your `MONGO_URI` is correctly set in the `.env` file before starting the server).*

### 3. Setup the Frontend

Open a new terminal window/tab:

```bash
# Navigate to the frontend directory
cd lumina-app

# Install dependencies
npm install

# Start the Vite development server (runs on http://localhost:5173)
npm run dev
```

Visit `http://localhost:5173` in your browser to view the application!

---

## 🤝 Contributing

We love contributions! Neurome is built by the community, for the community. Whether it's reporting a bug, suggesting a new feature, or writing code, your help is appreciated.

1. Read our [Contributing Guidelines](CONTRIBUTING.md).
2. Check out our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community safe and welcoming.
3. Browse the [Issues](https://github.com/samay-hash/NEUROME/issues) and see where you can help out.

If you are opening a Pull Request, please ensure you fill out the provided PR template and follow our TypeScript & Tailwind guidelines.

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<p align="center">
  Built with ❤️ for Gen Z.
</p>
