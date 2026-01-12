import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Folder } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  image_url: string | null;
  tags: string[] | null;
}

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);
      if (error) throw error;
      return data as Project[];
    },
  });

  return (
    <section id="projects" className="py-16 bg-[hsl(0,0%,100%)]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded border border-primary/20">
              <p className="text-primary font-medium text-xs uppercase tracking-wide">My Portfolio</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              My Latest <span className="text-accent">Projects</span>
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-64 bg-muted rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,112,32,0.2)] transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden bg-muted">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                        <Folder className="w-20 h-20 text-muted-foreground/50" />
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {project.tags && project.tags.length > 0 && (
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            className={`backdrop-blur-sm shadow-lg ${tagIndex % 2 === 0 ? "bg-primary/90 text-primary-foreground" : "bg-accent/90 text-foreground"}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 relative">
                    {/* Category badge */}
                    {project.category && (
                      <span className="absolute -top-3 right-6 px-3 py-1 bg-accent text-xs font-semibold text-foreground rounded-full shadow-lg">
                        {project.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 mt-2">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    
                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
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
            className="text-center py-12 bg-secondary/30 rounded-lg"
          >
            <Folder className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No projects yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
