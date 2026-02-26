import { useState, useCallback } from "react";
import { type GateType, evaluateGate } from "@/lib/gateLogic";
import ToggleSwitch from "@/components/ToggleSwitch";
import GateSelector from "@/components/GateSelector";
import OutputDisplay from "@/components/OutputDisplay";
import TruthTable from "@/components/TruthTable";
import GateDiagram from "@/components/GateDiagram";

/**
 * Index Page — Digital Logic Circuit Simulator
 * Main page that wires together all components.
 * State: inputA, inputB (binary), selectedGate
 * Output recalculates instantly on any change.
 */
const Index = () => {
  const [inputA, setInputA] = useState<number>(0);
  const [inputB, setInputB] = useState<number>(0);
  const [selectedGate, setSelectedGate] = useState<GateType>("AND");

  // Compute output in real-time using the gate logic module
  const output = evaluateGate(selectedGate, inputA, inputB);

  return (
    <div className="min-h-screen bg-background circuit-grid">
      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
            Digital Logic Circuit Simulator
          </h1>
          <p className="text-sm text-muted-foreground">
            Interactive logic gate simulator — toggle inputs, select a gate, see results instantly
          </p>
        </header>

        {/* Main simulator area */}
        <div className="grid gap-8">
          {/* Controls row: Inputs + Gate Selector */}
          <section className="bg-card border border-border rounded-xl p-6 glow-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Input toggles */}
              <div className="flex gap-10">
                <ToggleSwitch label="Input A" value={inputA} onChange={setInputA} />
                {selectedGate !== "NOT" && (
                  <ToggleSwitch label="Input B" value={inputB} onChange={setInputB} />
                )}
              </div>

              {/* Gate selector */}
              <GateSelector selected={selectedGate} onChange={setSelectedGate} />
            </div>
          </section>

          {/* Output + Diagram row */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-card border border-border rounded-xl p-6 flex items-center justify-center glow-border">
              <OutputDisplay
                gate={selectedGate}
                inputA={inputA}
                inputB={inputB}
                output={output}
              />
            </section>

            <section className="bg-card border border-border rounded-xl p-6 flex items-center justify-center glow-border">
              <GateDiagram
                gate={selectedGate}
                inputA={inputA}
                inputB={inputB}
                output={output}
              />
            </section>
          </div>

          {/* Truth Table */}
          <section className="bg-card border border-border rounded-xl p-6 flex justify-center glow-border">
            <TruthTable gate={selectedGate} currentA={inputA} currentB={inputB} />
          </section>

          {/* Educational footer */}
          <footer className="text-center text-xs text-muted-foreground space-y-1 pb-4">
            <p>Each gate is a separate pure function • Event-driven UI updates • Truth table generated dynamically</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
