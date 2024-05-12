import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import AboutMeSection from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skills";
import EducationSection from "@/components/sections/education";
import TestimonialsSection from "@/components/sections/githubContributions";
import WorkSection from "@/components/sections/work";

export default function Home() {
     return (
          <>
               <HeroSection />
               <AboutMeSection />
               <SkillsSection />
               <EducationSection />
               <WorkSection />
               <TestimonialsSection />
               <ContactSection />
          </>
     );
}
