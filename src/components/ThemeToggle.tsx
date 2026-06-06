"use client";

import type { Theme } from "@/providers/ThemeProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { useTranslations } from "@/providers/LocaleProvider";
import { SegmentedToggle } from "./ui/SegmentedToggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <SegmentedToggle<Theme>
      value={theme}
      onChange={setTheme}
      ariaLabel={t.toggles.theme}
      options={[
        { value: "light", label: t.toggles.light, shortLabel: "☀" },
        { value: "dark", label: t.toggles.dark, shortLabel: "☾" },
      ]}
    />
  );
}
