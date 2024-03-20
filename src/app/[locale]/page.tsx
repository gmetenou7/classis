import { useTranslations } from "next-intl";
import homeComponents from "@/components/home";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main>
      <homeComponents.Hero />
      <homeComponents.Clients />
      <homeComponents.Section1 />
    </main>
  );
}
