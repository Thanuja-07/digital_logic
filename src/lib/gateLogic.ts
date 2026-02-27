/**
 * Gate Logic Module
 * Each gate is implemented as a separate pure function
 * using JavaScript logical operators.
 * Input: two binary values (0 or 1)
 * Output: binary result (0 or 1)
 */

export type GateType = "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" | "XNOR";

/** AND gate: output is 1 only when both inputs are 1 */
export function andGate(a: number, b: number): number {
  return a & b;
}

/** OR gate: output is 1 when at least one input is 1 */
export function orGate(a: number, b: number): number {
  return a | b;
}

/** NOT gate: inverts input A (input B is ignored) */
export function notGate(a: number): number {
  return a === 0 ? 1 : 0;
}

/** NAND gate: inverted AND — output is 0 only when both inputs are 1 */
export function nandGate(a: number, b: number): number {
  return (a & b) === 1 ? 0 : 1;
}

/** NOR gate: inverted OR — output is 1 only when both inputs are 0 */
export function norGate(a: number, b: number): number {
  return (a | b) === 1 ? 0 : 1;
}

/** XOR gate: output is 1 when inputs differ */
export function xorGate(a: number, b: number): number {
  return a ^ b;
}

/** XNOR gate: output is 1 when inputs are the same */
export function xnorGate(a: number, b: number): number {
  return (a ^ b) === 1 ? 0 : 1;
}

/** Evaluates the selected gate with given inputs */
export function evaluateGate(gate: GateType, a: number, b: number): number {
  switch (gate) {
    case "AND":  return andGate(a, b);
    case "OR":   return orGate(a, b);
    case "NOT":  return notGate(a);
    case "NAND": return nandGate(a, b);
    case "NOR":  return norGate(a, b);
    case "XOR":  return xorGate(a, b);
    case "XNOR": return xnorGate(a, b);
  }
}

/** Generates the complete truth table for a given gate */
export function generateTruthTable(gate: GateType): { a: number; b: number; output: number }[] {
  const inputs = [
    { a: 0, b: 0 },
    { a: 0, b: 1 },
    { a: 1, b: 0 },
    { a: 1, b: 1 },
  ];

  return inputs.map(({ a, b }) => ({
    a,
    b,
    output: evaluateGate(gate, a, b),
  }));
}

/** Gate descriptions for educational display */
export const gateDescriptions: Record<GateType, string> = {
  AND:  "Output is 1 only when BOTH inputs are 1",
  OR:   "Output is 1 when AT LEAST ONE input is 1",
  NOT:  "Inverts input A (input B is ignored)",
  NAND: "Inverted AND — output is 0 only when both are 1",
  NOR:  "Inverted OR — output is 1 only when both are 0",
  XOR:  "Output is 1 when inputs are DIFFERENT",
  XNOR: "Output is 1 when inputs are the SAME",
};
