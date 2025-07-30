import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import ImpactSection from '@/components/sections/impact-section';
import TeamSection from '@/components/sections/team-section';
import DocumentsSection from '@/components/sections/documents-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ImpactSection />
        <TeamSection />
        <DocumentsSection />
      </main>
      <Footer />
    </div>
  );
}
