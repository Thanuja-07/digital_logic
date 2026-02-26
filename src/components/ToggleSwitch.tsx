import { useState, useCallback } from "react";

interface ToggleSwitchProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
}

/**
 * ToggleSwitch Component
 * A binary toggle (0/1) that visually represents a circuit input.
 * Clicking toggles between 0 and 1.
 */
const ToggleSwitch = ({ label, value, onChange }: ToggleSwitchProps) => {
  const isOn = value === 1;

  const handleToggle = useCallback(() => {
    onChange(isOn ? 0 : 1);
  }, [isOn, onChange]);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
        {label}
      </span>

      {/* Toggle switch body */}
      <button
        onClick={handleToggle}
        className={`
          relative w-20 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer
          ${isOn
            ? "bg-toggle-on border-primary glow-border"
            : "bg-toggle-off border-muted-foreground/30"
          }
        `}
        aria-label={`Toggle ${label}`}
      >
        {/* Sliding knob */}
        <div
          className={`
            absolute top-1 w-7 h-7 rounded-full transition-all duration-300
            ${isOn
              ? "left-[calc(100%-32px)] bg-primary-foreground shadow-lg"
              : "left-1 bg-muted-foreground"
            }
          `}
        />
      </button>

      {/* Binary value display */}
      <span
        className={`
          text-2xl font-bold transition-all duration-300
          ${isOn ? "text-primary glow-text" : "text-muted-foreground"}
        `}
      >
        {value}
      </span>
    </div>
  );
};

export default ToggleSwitch;
