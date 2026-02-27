import { Link } from "react-router-dom";

const sections = [
  {
    to: "/simulator",
    title: "⚡ Simulator",
    description: "Toggle inputs, select gates, and see real-time output with truth tables and circuit diagrams.",
  },
  {
    to: "/theory",
    title: "📖 Theory",
    description: "Learn how each logic gate works — boolean expressions, symbols, and real-world significance.",
  },
  {
    to: "/practice",
    title: "🧠 Practice",
    description: "Test your knowledge with randomly generated quiz questions on all 6 gate types.",
  },
];

const Home = () => (
  <div className="min-h-screen bg-background circuit-grid">
    <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-primary glow-text mb-3">
          Digital Logic Circuit Simulator
        </h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          An interactive educational tool to explore, learn, and practice digital logic gates.
        </p>
      </header>

      <div className="grid gap-5">
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="bg-card border border-border rounded-xl p-6 glow-border hover:glow-box transition-shadow group fade-in"
          >
            <h2 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {s.title}
            </h2>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </Link>
        ))}
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-14 pb-4">
        <p>Built for academic learning and viva preparation.</p>
      </footer>
    </div>
  </div>
);

export default Home;
