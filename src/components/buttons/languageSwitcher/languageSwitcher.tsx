import { useTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import React from "react";
import { Trans } from "react-i18next";

const LanguageSwitcherBase = async ({ t, lng }: { t: Awaited<ReturnType<typeof useTranslation>>["t"] , lng: string }) => {
  return (
    <button>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </button>
  );
};

export default LanguageSwitcherBase;
