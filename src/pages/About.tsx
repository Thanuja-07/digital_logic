const About = () => (
  <div className="min-h-screen bg-background circuit-grid">
    <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">About This Project</h1>
        <p className="text-sm text-muted-foreground">Digital Logic Circuit Simulator — Academic Project</p>
      </header>

      <div className="grid gap-6">
        <section className="bg-card border border-border rounded-xl p-6 glow-border">
          <h2 className="text-lg font-bold text-primary mb-3">📋 Project Overview</h2>
          <p className="text-sm text-foreground leading-relaxed">
            This web-based simulator allows users to interact with the six fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR).
            It provides real-time output calculation, dynamic truth table generation, and a visual circuit diagram — all built for educational purposes.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 glow-border">
          <h2 className="text-lg font-bold text-primary mb-3">🛠 Tech Stack</h2>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li><strong>React</strong> — Component-based UI</li>
            <li><strong>TypeScript</strong> — Type-safe logic</li>
            <li><strong>Tailwind CSS</strong> — Utility-first styling</li>
            <li><strong>Vite</strong> — Fast build tooling</li>
          </ul>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 glow-border">
          <h2 className="text-lg font-bold text-primary mb-3">🏗 Architecture</h2>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Each gate is a <strong>separate pure function</strong> using bitwise operators</li>
            <li>UI re-renders instantly on input/gate changes (event-driven)</li>
            <li>Truth table generated dynamically via loops</li>
            <li>Modular component structure for maintainability</li>
          </ul>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 glow-border">
          <h2 className="text-lg font-bold text-primary mb-3">🎤 Viva Talking Points</h2>
          <ul className="text-sm text-foreground space-y-2 list-disc list-inside">
            <li>"Each gate is implemented as a separate function using logical/bitwise operators."</li>
            <li>"Whenever input changes, React re-renders and recalculates the output."</li>
            <li>"The truth table is generated dynamically using a mapping function."</li>
            <li>"The project uses a modular architecture — logic is separated from UI."</li>
          </ul>
        </section>
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-10 pb-4">
        <p>Built for academic learning and viva preparation.</p>
      </footer>
    </div>
  </div>
);

export default About;
