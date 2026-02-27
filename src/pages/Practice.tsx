import { useState, useMemo } from "react";
import { type GateType, evaluateGate } from "@/lib/gateLogic";

const allGates: GateType[] = ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"];

function randomQuestion() {
  const gate = allGates[Math.floor(Math.random() * allGates.length)];
  const a = Math.round(Math.random()) as 0 | 1;
  const b = Math.round(Math.random()) as 0 | 1;
  return { gate, a, b, answer: evaluateGate(gate, a, b) };
}

const Practice = () => {
  const [question, setQuestion] = useState(randomQuestion);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const isCorrect = selected === question.answer;
  const answered = selected !== null;

  const next = () => {
    setQuestion(randomQuestion());
    setSelected(null);
  };

  const handleSelect = (val: number) => {
    if (answered) return;
    setSelected(val);
    setScore((s) => ({
      correct: s.correct + (val === question.answer ? 1 : 0),
      total: s.total + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-background circuit-grid">
      <div className="container max-w-2xl mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">Practice Quiz</h1>
          <p className="text-sm text-muted-foreground">Test your understanding of logic gates with random questions.</p>
        </header>

        {/* Score */}
        <div className="text-center mb-6 text-sm text-muted-foreground">
          Score: <span className="text-primary font-bold">{score.correct}</span> / {score.total}
        </div>

        {/* Question card */}
        <section className="bg-card border border-border rounded-xl p-8 glow-border fade-in text-center">
          <p className="text-muted-foreground text-sm mb-4">What is the output?</p>
          <p className="text-2xl font-bold text-foreground mb-1">
            {question.gate}
            <span className="text-primary">({question.a}, {question.gate === "NOT" ? "" : question.b})</span>
          </p>
          <p className="text-xs text-muted-foreground mb-8 font-mono">
            A = {question.a}{question.gate !== "NOT" && `, B = ${question.b}`}
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {[0, 1].map((val) => (
              <button
                key={val}
                onClick={() => handleSelect(val)}
                disabled={answered}
                className={`w-20 h-20 rounded-xl text-2xl font-bold border-2 transition-all ${
                  !answered
                    ? "border-border text-foreground hover:border-primary hover:glow-border cursor-pointer"
                    : val === question.answer
                    ? "border-primary bg-primary/20 text-primary"
                    : val === selected
                    ? "border-destructive bg-destructive/20 text-destructive"
                    : "border-border text-muted-foreground opacity-50"
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          {answered && (
            <div className="fade-in">
              <p className={`text-lg font-bold mb-4 ${isCorrect ? "text-primary" : "text-destructive"}`}>
                {isCorrect ? "✓ Correct!" : `✗ Wrong — Answer is ${question.answer}`}
              </p>
              <button
                onClick={next}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Next Question →
              </button>
            </div>
          )}
        </section>

        <footer className="text-center text-xs text-muted-foreground mt-10 pb-4">
          <p>Questions are generated randomly from all 7 gate types.</p>
        </footer>
      </div>
    </div>
  );
};

export default Practice;
