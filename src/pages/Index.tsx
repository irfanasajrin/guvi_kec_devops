import { EnrollProvider, useEnroll } from "@/hooks/use-enroll";
import EnrollDialog from "@/components/EnrollDialog";
import HeroSection from "@/components/HeroSection";
import CollaborationSection from "@/components/CollaborationSection";
import ToolsSection from "@/components/ToolsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const PageContent = () => {
  const { open, setOpen } = useEnroll();
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CollaborationSection />
      <ToolsSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
      <EnrollDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

const Index = () => (
  <EnrollProvider>
    <PageContent />
  </EnrollProvider>
);

export default Index;
