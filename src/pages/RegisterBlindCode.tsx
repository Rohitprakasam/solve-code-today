import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Code, User, Mail, Phone, Hash, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RegisterBlindCode = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [participant, setParticipant] = useState({
    name: "",
    email: "",
    phone: "",
    ieeeNumber: "",
  });

  const validateForm = () => {
    if (!participant.name || !participant.email || !participant.phone || !participant.ieeeNumber) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
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

    try {
      const response = await fetch("https://ieeebts.online/register2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participant),
      });

      if (response.ok) {
        toast({
          title: "Registration Successful! 🎉",
          description: "You'll receive a confirmation email with event details.",
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

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary shadow-glow mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Blind Code Challenge
              </h1>
              <p className="text-lg text-muted-foreground">
                Register for the solo coding challenge
              </p>
            </div>

            <Card className="p-8 shadow-elegant animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Participant Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">Participant Details</h3>
                    <span className="text-sm text-destructive">*All fields required</span>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={participant.name}
                        onChange={(e) => setParticipant({ ...participant, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={participant.email}
                        onChange={(e) => setParticipant({ ...participant, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={participant.phone}
                        onChange={(e) => setParticipant({ ...participant, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ieee" className="flex items-center gap-2">
                        <Hash className="w-4 h-4 text-muted-foreground" />
                        IEEE Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="ieee"
                        placeholder="IEEE Member Number"
                        value={participant.ieeeNumber}
                        onChange={(e) => setParticipant({ ...participant, ieeeNumber: e.target.value })}
                        required
                      />
                    </div>
                  </div>
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

export default RegisterBlindCode;
