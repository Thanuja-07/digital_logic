import { type GateType, generateTruthTable } from "@/lib/gateLogic";

interface TruthTableProps {
  gate: GateType;
  currentA: number;
  currentB: number;
}

/**
 * TruthTable Component
 * Dynamically generates and displays the truth table for the selected gate.
 * Highlights the row matching the current input values.
 */
const TruthTable = ({ gate, currentA, currentB }: TruthTableProps) => {
  // Generate truth table using the gate logic module
  const rows = generateTruthTable(gate);
  const isNotGate = gate === "NOT";

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
        Truth Table — {gate}
      </span>

      <div className="border border-border rounded-lg overflow-hidden glow-border">
        <table className="text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="px-6 py-3 text-primary font-bold">A</th>
              {!isNotGate && (
                <th className="px-6 py-3 text-primary font-bold">B</th>
              )}
              <th className="px-6 py-3 text-accent font-bold">OUT</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              // For NOT gate, only show unique rows (A=0, A=1)
              if (isNotGate && row.b === 1) return null;

              const isActive = row.a === currentA && (isNotGate || row.b === currentB);

              return (
                <tr
                  key={i}
                  className={`
                    transition-all duration-300 border-t border-border
                    ${isActive
                      ? "bg-primary/15 border-l-2 border-l-primary"
                      : "hover:bg-muted/50"
                    }
                  `}
                >
                  <td className={`px-6 py-3 text-center font-mono ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {row.a}
                  </td>
                  {!isNotGate && (
                    <td className={`px-6 py-3 text-center font-mono ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {row.b}
                    </td>
                  )}
                  <td className={`px-6 py-3 text-center font-bold ${
                    isActive
                      ? row.output === 1 ? "text-output-high glow-text" : "text-output-low"
                      : "text-muted-foreground"
                  }`}>
                    {row.output}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TruthTable;
