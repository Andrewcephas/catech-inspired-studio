import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  rating: number | null;
}

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
      if (error) throw error;
      return data as Testimonial[];
    },
  });

  return (
    <section id="testimonials" className="py-16 bg-[hsl(0,0%,97%)]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-accent/10 rounded border border-accent/30">
            <p className="text-accent font-medium text-xs uppercase tracking-wide">Testimonials</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted"></div>
                    <div>
                      <div className="h-3 bg-muted rounded w-20 mb-1"></div>
                      <div className="h-2 bg-muted rounded w-16"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : testimonials && testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(255,153,0,0.2)] transition-all duration-500 h-full hover:-translate-y-1">
                  {/* Decorative quote background */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 text-accent/10 transform rotate-12">
                    <Quote className="w-full h-full" />
                  </div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Rating stars at top */}
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-accent drop-shadow-sm" />
                        ))}
                      </div>
                    )}
                    
                    <p className="text-card-foreground text-base leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author section with left border accent */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                      {testimonial.avatar_url ? (
                        <img
                          src={testimonial.avatar_url}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20 ring-offset-2"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center ring-2 ring-primary/20 ring-offset-2 shadow-lg">
                          <span className="text-primary-foreground font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-foreground text-base">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}{testimonial.company && ` • ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12 bg-background rounded-lg"
          >
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No testimonials yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
