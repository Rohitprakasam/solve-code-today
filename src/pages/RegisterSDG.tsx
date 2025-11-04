import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, User, Mail, Phone, Hash, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  ieeeNumber: string;
}

const RegisterSDG = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [teamLead, setTeamLead] = useState({
    name: "",
    email: "",
    phone: "",
    ieeeNumber: "",
  });

  const [members, setMembers] = useState<TeamMember[]>([
    { name: "", email: "", phone: "", ieeeNumber: "" },
    { name: "", email: "", phone: "", ieeeNumber: "" },
    { name: "", email: "", phone: "", ieeeNumber: "" },
  ]);

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const validateForm = () => {
    if (!teamLead.name || !teamLead.email || !teamLead.phone || !teamLead.ieeeNumber) {
      toast({
        title: "Validation Error",
        description: "Please fill all team lead details",
        variant: "destructive",
      });
      return false;
    }

    if (!agreed) {
      toast({
        title: "Declaration Required",
        description: "Please confirm the declaration checkbox",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    const registrationData = {
      teamLead,
      members: members.filter(m => m.name || m.email || m.phone || m.ieeeNumber),
    };

    try {
      const response = await fetch("https://ieeebts.online/register1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        toast({
          title: "Registration Successful! 🎉",
          description: "You'll receive a confirmation email with your goal assignment.",
        });
        navigate("/");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary shadow-glow mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                SDG Idea Presentation
              </h1>
              <p className="text-lg text-muted-foreground">
                Register your team for the challenge
              </p>
            </div>

            <Card className="p-8 shadow-elegant animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Team Lead Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">Team Lead Details</h3>
                    <span className="text-sm text-destructive">*Required</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lead-name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lead-name"
                        placeholder="Enter full name"
                        value={teamLead.name}
                        onChange={(e) => setTeamLead({ ...teamLead, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lead-email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lead-email"
                        type="email"
                        placeholder="email@example.com"
                        value={teamLead.email}
                        onChange={(e) => setTeamLead({ ...teamLead, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lead-phone">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lead-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={teamLead.phone}
                        onChange={(e) => setTeamLead({ ...teamLead, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lead-ieee">
                        IEEE Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lead-ieee"
                        placeholder="IEEE Member Number"
                        value={teamLead.ieeeNumber}
                        onChange={(e) => setTeamLead({ ...teamLead, ieeeNumber: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Team Members Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">Team Members</h3>
                    <span className="text-sm text-muted-foreground">Optional</span>
                  </div>

                  {members.map((member, index) => (
                    <div key={index} className="space-y-4 p-6 rounded-lg bg-muted/30 border border-border">
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        Team Member {index + 1}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={member.name}
                          onChange={(e) => updateMember(index, "name", e.target.value)}
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          value={member.email}
                          onChange={(e) => updateMember(index, "email", e.target.value)}
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={member.phone}
                          onChange={(e) => updateMember(index, "phone", e.target.value)}
                        />
                        <Input
                          placeholder="IEEE Number (if member)"
                          value={member.ieeeNumber}
                          onChange={(e) => updateMember(index, "ieeeNumber", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Declaration */}
                <div className="flex items-start gap-3 p-6 rounded-lg bg-primary/5 border-2 border-primary/20">
                  <Checkbox
                    id="declaration"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label
                    htmlFor="declaration"
                    className="text-sm font-medium leading-relaxed cursor-pointer"
                  >
                    I confirm that the above information is accurate and I agree to the event terms and conditions.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:shadow-glow transition-smooth text-lg py-6"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Complete Registration
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterSDG;
