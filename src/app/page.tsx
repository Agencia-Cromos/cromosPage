import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/layouts/landingPage/sections/heroSection";
import { AboutSection } from "@/components/layouts/landingPage/sections/AboutSection";
import { SolutionsSection } from "@/components/layouts/landingPage/sections/SolutionsSection";
import { TestimonialsSection } from "@/components/layouts/landingPage/sections/TestimonialsSection";
import { ProjectSocialSection } from "@/components/layouts/landingPage/sections/ProjectSocialSection";
import { FooterSection } from "@/components/layouts/landingPage/sections/FooterSection";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <TestimonialsSection />
        <ProjectSocialSection />
      </main>
      <FooterSection />
    </>
  );
}
