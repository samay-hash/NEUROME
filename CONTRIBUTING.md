# Contributing to Neurome

First off, thank you for considering contributing to Neurome! It's people like you that make Neurome such a great platform for Gen Z emotional comfort and identity.

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (Local instance or MongoDB Atlas URL)

### 2. Local Setup
Fork the repository and clone it to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/NEUROME.git
cd NEUROME
```

#### Backend Setup
```bash
cd lumina-backend
npm install
# Create a .env file based on the provided .env.example (or ask maintainers)
# Set your MONGO_URI in the .env file
npm run dev
```
The backend will run on `http://localhost:5001`.

#### Frontend Setup
```bash
cd ../lumina-app
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

---

## 🛠 How to Contribute

### Reporting Bugs
If you find a bug, please create an issue using our **Bug Report Template**. Include as much detail as possible (steps to reproduce, OS, browser, screenshots).

### Suggesting Enhancements
Have an idea for a new feature? Great! Use our **Feature Request Template** to submit your idea. Explain *why* this feature would be useful for the community.

### Pull Requests
1. **Create a new branch** for your feature or bugfix:
   `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bug-fix`
2. **Make your changes** ensuring the code is clean, well-commented, and follows the existing style (TypeScript, Tailwind).
3. **Commit your changes** using conventional commit messages:
   - `feat: add new mood room`
   - `fix: resolve auth crash on login`
   - `ui: update button colors in dashboard`
4. **Push** to your fork and submit a Pull Request.
5. Ensure your PR follows the **Pull Request Template**.

## 🎨 Code Guidelines
- We use **TypeScript** strictly. Avoid `any` types wherever possible.
- For styling, we use **Tailwind CSS**. Avoid inline styles unless absolutely necessary for dynamic values (like absolute positioning).
- Keep components small and reusable.

## 🤝 Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to keep our community safe and welcoming.
