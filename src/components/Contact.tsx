import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1.5 bg-accent/10 rounded border border-accent/30">
            <p className="text-accent font-medium text-xs uppercase tracking-wide">Get In Touch</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Have an idea or project? Let's turn it into reality together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <Card className="border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Phone / WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+254 792 614 592</p>
                  <p className="text-xs text-muted-foreground">Available Mon-Fri, 8AM-6PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@catech.co.ke</p>
                  <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-xs text-muted-foreground">Serving clients globally</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border shadow-medium">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="w-full min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
