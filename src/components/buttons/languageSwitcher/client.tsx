'use client'

import { useTranslation } from "@/app/i18n/client"
import LanguageSwitcherBase from "./languageSwitcher"

export const LanguageSwitcher = ({ lng } : {lng : string}) => {
  const { t } = useTranslation(lng, 'commons')
  return <LanguageSwitcherBase t={t} lng={lng} />
}