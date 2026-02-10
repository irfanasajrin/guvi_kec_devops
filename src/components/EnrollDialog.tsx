import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Send, User, Mail, Phone, BookOpen, Calendar } from "lucide-react";

interface EnrollDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollDialog = ({ open, onOpenChange }: EnrollDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      toast({
        title: "🎉 Application Submitted!",
        description: "We'll get back to you within 24 hours. Check your email for confirmation.",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border-border/50 p-0">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-t-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <DialogTitle className="text-xl font-bold text-primary-foreground">
                Enroll Now
              </DialogTitle>
            </div>
            <DialogDescription className="text-primary-foreground/70">
              Join the GUVI × Kongu EC DevOps Training Program. Fill out the form below and we'll reach out shortly.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-muted-foreground" /> Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              required
              maxLength={100}
              className="rounded-xl h-11"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" /> Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              maxLength={255}
              className="rounded-xl h-11"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-muted-foreground" /> Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              maxLength={15}
              className="rounded-xl h-11"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Year */}
            <div className="space-y-2">
              <Label htmlFor="year" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Year
              </Label>
              <Select required>
                <SelectTrigger className="rounded-xl h-11">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="dept" className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-muted-foreground" /> Department
              </Label>
              <Select required>
                <SelectTrigger className="rounded-xl h-11">
                  <SelectValue placeholder="Select dept" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="ece">ECE</SelectItem>
                  <SelectItem value="eee">EEE</SelectItem>
                  <SelectItem value="mech">MECH</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Why do you want to join? <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your interest in DevOps..."
              maxLength={500}
              rows={3}
              className="rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl text-base font-semibold"
            size="lg"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Submit Application
              </span>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollDialog;
