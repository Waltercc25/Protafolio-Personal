"use client";

import type { Locale } from "@/i18n";
import { useLocale } from "@/providers/LocaleProvider";
import { SegmentedToggle } from "./ui/SegmentedToggle";

export function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <SegmentedToggle<Locale>
      value={locale}
      onChange={setLocale}
      ariaLabel={t.toggles.language}
      options={[
        { value: "es", label: t.toggles.spanish, shortLabel: "ES" },
        { value: "en", label: t.toggles.english, shortLabel: "EN" },
      ]}
    />
  );
}
