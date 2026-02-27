import { type GateType } from "@/lib/gateLogic";

const GATES: GateType[] = ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"];

interface GateSelectorProps {
  selected: GateType;
  onChange: (gate: GateType) => void;
}

/**
 * GateSelector Component
 * Allows user to pick a logic gate type via styled buttons.
 */
const GateSelector = ({ selected, onChange }: GateSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
        Select Gate
      </span>
      <div className="flex flex-wrap justify-center gap-2">
        {GATES.map((gate) => (
          <button
            key={gate}
            onClick={() => onChange(gate)}
            className={`
              px-4 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-200
              border
              ${selected === gate
                ? "bg-primary text-primary-foreground border-primary glow-border"
                : "bg-secondary text-secondary-foreground border-border hover:border-primary/50 hover:bg-muted"
              }
            `}
          >
            {gate}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GateSelector;
