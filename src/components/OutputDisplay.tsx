import { type GateType, gateDescriptions } from "@/lib/gateLogic";

interface OutputDisplayProps {
  gate: GateType;
  inputA: number;
  inputB: number;
  output: number;
}

/**
 * OutputDisplay Component
 * Shows the current gate output with a glowing visual indicator.
 */
const OutputDisplay = ({ gate, inputA, inputB, output }: OutputDisplayProps) => {
  const isHigh = output === 1;

  return (
    <div className="flex flex-col items-center gap-4 fade-in">
      {/* Expression */}
      <div className="text-sm text-muted-foreground font-mono">
        {gate === "NOT" ? (
          <span>NOT({inputA}) = {output}</span>
        ) : (
          <span>{inputA} {gate} {inputB} = {output}</span>
        )}
      </div>

      {/* Large output indicator */}
      <div
        className={`
          w-28 h-28 rounded-full flex items-center justify-center
          text-5xl font-bold transition-all duration-500
          border-4
          ${isHigh
            ? "bg-output-high/20 border-output-high text-output-high glow-box"
            : "bg-output-low/10 border-output-low/50 text-output-low"
          }
        `}
      >
        {output}
      </div>

      {/* Status label */}
      <span
        className={`
          text-xs font-bold uppercase tracking-widest
          ${isHigh ? "text-output-high" : "text-output-low"}
        `}
      >
        {isHigh ? "HIGH" : "LOW"}
      </span>

      {/* Gate description */}
      <p className="text-xs text-muted-foreground text-center max-w-xs mt-1">
        {gateDescriptions[gate]}
      </p>
    </div>
  );
};

export default OutputDisplay;
