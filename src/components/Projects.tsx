import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Folder } from "lucide-react";

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
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
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
        </div>

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
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                <div className="relative overflow-hidden bg-muted">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-secondary">
                      <Folder className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  {project.tags && project.tags.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <Badge 
                          key={index} 
                          className={index % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-accent text-foreground"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <Folder className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No projects yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
