import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Contatti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        message: formData.message.trim(),
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert(trimmedData);

      if (error) throw error;

      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: trimmedData,
      });

      if (emailError) {
        console.error("Email sending failed:", emailError);
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's talk about the future
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Interested in exploring the possibilities of the CAFAR system? 
              Contact us to discuss collaboration and licensing opportunities.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <p className="text-primary-foreground/80">
                  Fill out the form and we'll get back to you at the email you provide.
                </p>
              </div>
              <div className="mt-12 p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                <p className="text-primary-foreground/80">
                  <span className="font-semibold text-primary-foreground">Patent</span>
                  <br />
                  No. 102021000023279
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <Card className="bg-primary-foreground/5 border-primary-foreground/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-foreground mb-2">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
