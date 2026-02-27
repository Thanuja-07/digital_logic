import { gateDescriptions, type GateType } from "@/lib/gateLogic";

const gateDetails: Record<GateType, { symbol: string; expression: string; explanation: string }> = {
  AND:  { symbol: "A · B", expression: "Y = A AND B", explanation: "The AND gate outputs 1 only when both inputs A and B are 1. It uses the logical conjunction operator. In digital electronics, it's one of the fundamental building blocks." },
  OR:   { symbol: "A + B", expression: "Y = A OR B", explanation: "The OR gate outputs 1 when at least one input is 1. It implements logical disjunction. If both inputs are 0, the output is 0." },
  NOT:  { symbol: "A̅",    expression: "Y = NOT A", explanation: "The NOT gate (inverter) has a single input and produces the complement. If input is 1, output is 0, and vice versa." },
  NAND: { symbol: "⌐(A · B)", expression: "Y = NOT(A AND B)", explanation: "The NAND gate is the complement of AND. It outputs 0 only when both inputs are 1. NAND is a universal gate — any circuit can be built using only NAND gates." },
  NOR:  { symbol: "⌐(A + B)", expression: "Y = NOT(A OR B)", explanation: "The NOR gate is the complement of OR. It outputs 1 only when both inputs are 0. Like NAND, NOR is also a universal gate." },
  XOR:  { symbol: "A ⊕ B", expression: "Y = A XOR B", explanation: "The XOR (exclusive OR) gate outputs 1 when the inputs are different. It's widely used in arithmetic circuits like adders and parity checkers." },
};

const Theory = () => (
  <div className="min-h-screen bg-background circuit-grid">
    <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">Gate Theory</h1>
        <p className="text-sm text-muted-foreground">Learn how each logic gate works, its boolean expression, and real-world significance.</p>
      </header>

      <div className="grid gap-6">
        {(Object.keys(gateDetails) as GateType[]).map((gate) => {
          const d = gateDetails[gate];
          return (
            <section key={gate} className="bg-card border border-border rounded-xl p-6 glow-border fade-in">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-primary">{gate}</span>
                <span className="text-accent font-mono text-sm">{d.symbol}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">{d.expression}</p>
              <p className="text-sm text-foreground leading-relaxed mb-2">{d.explanation}</p>
              <p className="text-xs text-muted-foreground italic">{gateDescriptions[gate]}</p>
            </section>
          );
        })}
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-10 pb-4">
        <p>Boolean algebra forms the mathematical foundation of digital logic circuits.</p>
      </footer>
    </div>
  </div>
);

export default Theory;
