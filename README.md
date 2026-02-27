# ⚡ Digital Logic Circuit Simulator

An interactive educational web app to explore, learn, and practice digital logic gates — built for academic learning and viva preparation.

## 🔗 Live Demo

[digitallogic.lovable.app](https://digitallogic.lovable.app)

## ✨ Features

- **Simulator** — Toggle inputs, select from 7 gate types (AND, OR, NOT, NAND, NOR, XOR, XNOR), and see real-time output with truth tables and circuit diagrams.
- **Theory** — Learn how each logic gate works: boolean expressions, symbols, and real-world significance.
- **Practice Quiz** — Test your knowledge with randomly generated questions and track your score.

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** (dev server & bundler)
- **Tailwind CSS** + **shadcn/ui**
- **React Router** (multi-page navigation)

## 🚀 Getting Started

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (GateDiagram, GateSelector, ToggleSwitch, etc.)
├── lib/
│   └── gateLogic.ts  # Pure functions for all 7 logic gates + truth table generation
├── pages/
│   ├── Home.tsx       # Landing page with navigation cards
│   ├── Index.tsx      # Main simulator page
│   ├── Theory.tsx     # Gate theory & reference
│   └── Practice.tsx   # Interactive quiz
└── App.tsx            # Routing & layout
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
