import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEnroll } from "@/hooks/use-enroll";

const CTASection = () => {
  const { setOpen } = useEnroll();

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary to-primary/80">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Ready to Launch Your DevOps Career?
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Join the next batch and gain the skills top companies are actively hiring for. Limited seats available.
        </p>

        <Button
          size="lg"
          onClick={() => setOpen(true)}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-7 rounded-xl font-bold shadow-lg shadow-black/20"
        >
          Enroll Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-primary-foreground/90">
          <div>
            <p className="text-4xl font-extrabold text-primary-foreground">6+</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Tools Covered</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-primary-foreground">100+</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Hours of Training</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-primary-foreground">20+</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Live Projects</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-primary-foreground">95%</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Placement Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
