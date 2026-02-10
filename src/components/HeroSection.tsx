import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { useEnroll } from "@/hooks/use-enroll";

const HeroSection = () => {
  const { setOpen } = useEnroll();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90 mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Admissions Open for 2026 Batch
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-6">
            GUVI <span className="text-secondary/80">×</span> Kongu Engineering College
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-primary-foreground/90 mb-4">
            DevOps Training & Industry Readiness Program
          </p>

          <p className="text-lg text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
            Master the tools and practices powering modern software delivery. An industry-oriented program designed to make you job-ready from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-xl font-semibold shadow-lg shadow-black/20"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-xl font-semibold backdrop-blur-sm">
              <BookOpen className="mr-2 h-5 w-5" />
              View Curriculum
            </Button>
          </div>

          <div className="mt-14 flex gap-10 text-primary-foreground/80">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">500+</p>
              <p className="text-sm">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">95%</p>
              <p className="text-sm">Placement Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
