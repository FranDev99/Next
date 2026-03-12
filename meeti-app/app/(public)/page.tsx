import Hero from "@/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata = {
  title: generatePageTitle("Inicio"),
  description: "Aplicación para encontrar eventos y comunidades de interés",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
