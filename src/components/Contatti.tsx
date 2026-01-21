import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contatti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    azienda: "",
    messaggio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile.",
    });
    
    setFormData({ nome: "", email: "", azienda: "", messaggio: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contatti" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Contatti</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Parliamo del Futuro
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Sei interessato a esplorare le possibilità del sistema CAFAR? 
            Contattaci per discutere opportunità di collaborazione e licensing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-8">
              Informazioni di Contatto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:CAFAR@gmail.com" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    CAFAR@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-1">Sede</h4>
                  <p className="text-primary-foreground/80">Palermo, Italia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <p className="text-primary-foreground/80">
                <span className="font-semibold text-primary-foreground">Brevetto</span>
                <br />
                N. 102021000023279
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-primary-foreground/5 border-primary-foreground/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-primary-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="Il tuo nome"
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
                    placeholder="La tua email"
                  />
                </div>
                
                <div>
                  <label htmlFor="azienda" className="block text-sm font-medium text-primary-foreground mb-2">
                    Azienda / Organizzazione
                  </label>
                  <Input
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="La tua azienda (opzionale)"
                  />
                </div>
                
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-primary-foreground mb-2">
                    Messaggio *
                  </label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                    placeholder="Come possiamo aiutarti?"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
