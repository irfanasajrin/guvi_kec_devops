import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Monitor } from "lucide-react";

const CollaborationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">A Powerful Collaboration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combining GUVI's industry expertise with Kongu Engineering College's academic excellence to create future-ready engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Monitor className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">GUVI</h3>
              <p className="text-muted-foreground leading-relaxed">
                An IIT-M & IIM-A incubated ed-tech platform offering vernacular-first, industry-relevant tech courses. GUVI has trained over 3 million learners with hands-on, project-based programs aligned with current market demands.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Kongu Engineering College</h3>
              <p className="text-muted-foreground leading-relaxed">
                An autonomous institution in Erode, Tamil Nadu, affiliated to Anna University. Known for its strong placement record and emphasis on holistic development, Kongu has been shaping engineers for over 40 years.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <Card className="bg-accent/50 border-primary/10 rounded-2xl">
            <CardContent className="p-8">
              <p className="text-foreground text-lg leading-relaxed">
                This collaboration bridges the gap between <strong>academic learning</strong> and <strong>industry expectations</strong>, equipping students with real-world DevOps skills demanded by top employers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
