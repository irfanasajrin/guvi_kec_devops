import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Github, Container, Cog, Ship, Cloud } from "lucide-react";

const tools = [
  { name: "Git", icon: GitBranch, description: "Version control and collaboration workflows for team-based development." },
  { name: "GitHub", icon: Github, description: "Code hosting, pull requests, CI/CD pipelines, and open-source collaboration." },
  { name: "Docker", icon: Container, description: "Containerization for consistent environments from development to production." },
  { name: "Jenkins", icon: Cog, description: "Automation server for building, testing, and deploying software continuously." },
  { name: "Kubernetes", icon: Ship, description: "Container orchestration for scaling and managing production workloads." },
  { name: "AWS", icon: Cloud, description: "Cloud infrastructure services for deploying and managing applications at scale." },
];

const ToolsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">DevOps Tools You'll Master</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get hands-on experience with the industry's most in-demand DevOps technologies and platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <Card
              key={tool.name}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/30 rounded-2xl cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <tool.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{tool.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
