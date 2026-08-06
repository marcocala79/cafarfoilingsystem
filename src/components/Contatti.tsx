import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Contatti = () => {
  const { t } = useI18n();
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
        title: t.contact.form.successTitle,
        description: t.contact.form.successMsg,
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: t.contact.form.errTitle,
        description: t.contact.form.errMsg,
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
    <section id="contact" className="py-20 bg-primary/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.contact.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t.contact.heading}
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              {t.contact.intro}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-8">
                {t.contact.infoTitle}
              </h3>
              <div className="space-y-6">
                <p className="text-primary-foreground/80">
                  {t.contact.infoText}
                </p>
              </div>
              <div className="mt-12 p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                <p className="text-primary-foreground/80">
                  <span className="font-semibold text-primary-foreground">{t.contact.patentLabel}</span>
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
                      {t.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder={t.contact.form.namePh}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder={t.contact.form.emailPh}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-foreground mb-2">
                      {t.contact.form.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder={t.contact.form.companyPh}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                      {t.contact.form.message} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                      placeholder={t.contact.form.messagePh}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? (
                      t.contact.form.sending
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.contact.form.submit}
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
