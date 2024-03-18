import { useTranslation } from "@/app/i18n";
import LanguageSwitcherBase from "./languageSwitcher";

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return <LanguageSwitcherBase t={t} lng={lng} />;
};
