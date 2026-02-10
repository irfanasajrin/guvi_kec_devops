import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Rocket, Award } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Hands-on Learning",
    description: "Work on real-world projects, labs, and simulations. Build CI/CD pipelines, deploy containers, and manage cloud infrastructure — not just theory.",
  },
  {
    icon: Rocket,
    title: "Industry-Ready Skills",
    description: "Curriculum designed with input from hiring managers and tech leads. Every module is aligned with current job market demands and best practices.",
  },
  {
    icon: Award,
    title: "Certification & Placement Support",
    description: "Earn an industry-recognized certificate upon completion. Get dedicated career guidance, mock interviews, and access to our hiring partner network.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose This Program?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to launch a successful career in DevOps engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
