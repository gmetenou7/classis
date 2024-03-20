import { useTranslations } from "next-intl";
import homeComponents from "@/components/home";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col justify-between gap-12">
      <homeComponents.Hero />
      <homeComponents.Clients />
      <homeComponents.Section1 />
      <homeComponents.Section2 />
    </main>
  );
}
