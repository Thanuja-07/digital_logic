import { type GateType } from "@/lib/gateLogic";

interface GateDiagramProps {
  gate: GateType;
  inputA: number;
  inputB: number;
  output: number;
}

/**
 * GateDiagram Component
 * A simple CSS-based visualization of the logic gate circuit.
 * Shows input wires, the gate body, and output wire with active states.
 */
const GateDiagram = ({ gate, inputA, inputB, output }: GateDiagramProps) => {
  const isNotGate = gate === "NOT";
  const isOutputHigh = output === 1;

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
        Circuit Diagram
      </span>

      <div className="relative flex items-center gap-0 py-6">
        {/* Input wires */}
        <div className="flex flex-col gap-6">
          {/* Input A wire */}
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${inputA ? "text-primary glow-text" : "text-muted-foreground"}`}>
              A={inputA}
            </span>
            <div className={`w-12 h-0.5 transition-colors duration-300 ${inputA ? "bg-primary" : "bg-muted-foreground/40"}`} />
          </div>

          {/* Input B wire (hidden for NOT gate) */}
          {!isNotGate && (
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${inputB ? "text-primary glow-text" : "text-muted-foreground"}`}>
                B={inputB}
              </span>
              <div className={`w-12 h-0.5 transition-colors duration-300 ${inputB ? "bg-primary" : "bg-muted-foreground/40"}`} />
            </div>
          )}
        </div>

        {/* Gate body */}
        <div
          className={`
            relative flex items-center justify-center
            w-24 border-2 rounded-r-xl transition-all duration-300
            ${isNotGate ? "h-14 rounded-l-md" : "h-20 rounded-l-md"}
            ${isOutputHigh
              ? "border-primary bg-primary/10 glow-border"
              : "border-muted-foreground/40 bg-secondary"
            }
          `}
        >
          <span className={`text-sm font-bold ${isOutputHigh ? "text-primary" : "text-muted-foreground"}`}>
            {gate}
          </span>

          {/* NOT gate bubble */}
          {isNotGate && (
            <div
              className={`absolute -right-2 w-4 h-4 rounded-full border-2 transition-colors duration-300
                ${isOutputHigh ? "border-primary bg-primary/30" : "border-muted-foreground/40 bg-secondary"}`}
            />
          )}
        </div>

        {/* Output wire */}
        <div className="flex items-center gap-2">
          <div className={`w-12 h-0.5 transition-colors duration-300 ${isOutputHigh ? "bg-output-high" : "bg-muted-foreground/40"}`} />
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center
              text-sm font-bold border-2 transition-all duration-300
              ${isOutputHigh
                ? "border-output-high bg-output-high/20 text-output-high glow-box"
                : "border-output-low/50 bg-output-low/10 text-output-low"
              }
            `}
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateDiagram;
