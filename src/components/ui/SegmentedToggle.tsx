"use client";

import { cn } from "@/lib/utils";

interface SegmentedToggleOption<T extends string> {
  value: T;
  label: string;
  shortLabel?: string;
}

interface SegmentedToggleProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: [SegmentedToggleOption<T>, SegmentedToggleOption<T>];
  ariaLabel: string;
  className?: string;
}

export function SegmentedToggle<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
  className,
}: SegmentedToggleProps<T>) {
  const activeIndex = options.findIndex((o) => o.value === value);

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "relative inline-flex shrink-0 rounded-md border border-border bg-muted/60 p-px",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-px rounded-[5px] bg-card shadow-sm transition-transform duration-200 ease-out"
        style={{
          width: "calc(50% - 1px)",
          transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex}px))`,
          left: 1,
        }}
      />
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "relative z-10 min-w-[2.5rem] rounded-[5px] px-1.5 py-0.5 text-[10px] font-medium leading-tight transition-colors sm:min-w-[3.25rem] sm:px-2 sm:py-1 sm:text-[11px]",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="sm:hidden">{option.shortLabel ?? option.label}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
