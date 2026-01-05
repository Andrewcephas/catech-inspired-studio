import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Pencil, Trash2, Folder, MessageSquare, Mail, Loader2, Upload, Image } from "lucide-react";
import { Label } from "@/components/ui/label";
import catechLogo from "@/assets/catech-logo.png";
import type { Session, User } from "@supabase/supabase-js";

interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  image_url: string | null;
  tags: string[] | null;
}

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  rating: number | null;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
  read: boolean;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Project dialog state
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "",
    image_url: "",
    tags: "",
  });
  const [imageUploading, setImageUploading] = useState(false);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName);

      setProjectForm({ ...projectForm, image_url: publicUrl });
      toast({ title: "Image uploaded successfully" });
    } catch (error) {
      toast({ title: "Failed to upload image", variant: "destructive" });
    } finally {
      setImageUploading(false);
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `avatar-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName);

      setTestimonialForm({ ...testimonialForm, avatar_url: publicUrl });
      toast({ title: "Avatar uploaded successfully" });
    } catch (error) {
      toast({ title: "Failed to upload avatar", variant: "destructive" });
    } finally {
      setAvatarUploading(false);
    }
  };

  // Testimonial dialog state
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    avatar_url: "",
    rating: "5",
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setLoading(false);
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);

    const hasAdminRole = roles && roles.some((r) => r.role === "admin");
    setIsAdmin(hasAdminRole || false);
    setLoading(false);

    if (!hasAdminRole) {
      toast({
        title: "Access denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/auth");
    }
  };

  // Fetch projects
  const { data: projects } = useQuery({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Project[];
    },
    enabled: isAdmin,
  });

  // Fetch testimonials
  const { data: testimonials } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Testimonial[];
    },
    enabled: isAdmin,
  });

  // Fetch contact submissions
  const { data: contacts } = useQuery({
    queryKey: ["admin-contacts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as ContactSubmission[];
    },
    enabled: isAdmin,
  });

  // Project mutations
  const createProject = useMutation({
    mutationFn: async (data: typeof projectForm) => {
      const { error } = await supabase.from("projects").insert({
        title: data.title,
        description: data.description || null,
        category: data.category || null,
        image_url: data.image_url || null,
        tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setProjectDialogOpen(false);
      resetProjectForm();
      toast({ title: "Project created" });
    },
    onError: () => {
      toast({ title: "Failed to create project", variant: "destructive" });
    },
  });

  const updateProject = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof projectForm }) => {
      const { error } = await supabase
        .from("projects")
        .update({
          title: data.title,
          description: data.description || null,
          category: data.category || null,
          image_url: data.image_url || null,
          tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : null,
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setProjectDialogOpen(false);
      setEditingProject(null);
      resetProjectForm();
      toast({ title: "Project updated" });
    },
    onError: () => {
      toast({ title: "Failed to update project", variant: "destructive" });
    },
  });

  const deleteProject = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast({ title: "Project deleted" });
    },
    onError: () => {
      toast({ title: "Failed to delete project", variant: "destructive" });
    },
  });

  // Testimonial mutations
  const createTestimonial = useMutation({
    mutationFn: async (data: typeof testimonialForm) => {
      const { error } = await supabase.from("testimonials").insert({
        name: data.name,
        role: data.role || null,
        company: data.company || null,
        content: data.content,
        avatar_url: data.avatar_url || null,
        rating: parseInt(data.rating),
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      setTestimonialDialogOpen(false);
      resetTestimonialForm();
      toast({ title: "Testimonial created" });
    },
    onError: () => {
      toast({ title: "Failed to create testimonial", variant: "destructive" });
    },
  });

  const updateTestimonial = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof testimonialForm }) => {
      const { error } = await supabase
        .from("testimonials")
        .update({
          name: data.name,
          role: data.role || null,
          company: data.company || null,
          content: data.content,
          avatar_url: data.avatar_url || null,
          rating: parseInt(data.rating),
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      setTestimonialDialogOpen(false);
      setEditingTestimonial(null);
      resetTestimonialForm();
      toast({ title: "Testimonial updated" });
    },
    onError: () => {
      toast({ title: "Failed to update testimonial", variant: "destructive" });
    },
  });

  const deleteTestimonial = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      toast({ title: "Testimonial deleted" });
    },
    onError: () => {
      toast({ title: "Failed to delete testimonial", variant: "destructive" });
    },
  });

  const resetProjectForm = () => {
    setProjectForm({ title: "", description: "", category: "", image_url: "", tags: "" });
  };

  const resetTestimonialForm = () => {
    setTestimonialForm({ name: "", role: "", company: "", content: "", avatar_url: "", rating: "5" });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description || "",
      category: project.category || "",
      image_url: project.image_url || "",
      tags: project.tags?.join(", ") || "",
    });
    setProjectDialogOpen(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setTestimonialForm({
      name: testimonial.name,
      role: testimonial.role || "",
      company: testimonial.company || "",
      content: testimonial.content,
      avatar_url: testimonial.avatar_url || "",
      rating: String(testimonial.rating || 5),
    });
    setTestimonialDialogOpen(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={catechLogo} alt="Catech Logo" className="h-10" />
            <span className="font-bold text-lg">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:block">{user?.email}</span>
            <Button variant="secondary" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="projects">
          <TabsList className="mb-8">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Folder className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Testimonials
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Messages
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Projects</h2>
              <Dialog open={projectDialogOpen} onOpenChange={(open) => {
                setProjectDialogOpen(open);
                if (!open) {
                  setEditingProject(null);
                  resetProjectForm();
                }
              }}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingProject ? "Edit Project" : "Add Project"}</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (editingProject) {
                        updateProject.mutate({ id: editingProject.id, data: projectForm });
                      } else {
                        createProject.mutate(projectForm);
                      }
                    }}
                    className="space-y-4"
                  >
                    <Input
                      placeholder="Project Title"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Description"
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    />
                    <Input
                      placeholder="Category"
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    />
                    <div className="space-y-2">
                      <Label>Project Image</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Image URL"
                          value={projectForm.image_url}
                          onChange={(e) => setProjectForm({ ...projectForm, image_url: e.target.value })}
                          className="flex-1"
                        />
                        <Label 
                          htmlFor="image-upload" 
                          className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                        >
                          {imageUploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                        </Label>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                          disabled={imageUploading}
                        />
                      </div>
                      {projectForm.image_url && (
                        <div className="mt-2 relative w-full h-32 rounded-lg overflow-hidden border border-border">
                          <img 
                            src={projectForm.image_url} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <Input
                      placeholder="Tags (comma-separated)"
                      value={projectForm.tags}
                      onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                    />
                    <Button type="submit" className="w-full" disabled={createProject.isPending || updateProject.isPending}>
                      {createProject.isPending || updateProject.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : editingProject ? (
                        "Update Project"
                      ) : (
                        "Create Project"
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects?.map((project) => (
                <Card key={project.id}>
                  {project.image_url && (
                    <div className="h-40 overflow-hidden rounded-t-lg">
                      <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                    {project.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                    )}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditProject(project)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteProject.mutate(project.id)}
                        disabled={deleteProject.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Testimonials</h2>
              <Dialog open={testimonialDialogOpen} onOpenChange={(open) => {
                setTestimonialDialogOpen(open);
                if (!open) {
                  setEditingTestimonial(null);
                  resetTestimonialForm();
                }
              }}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Testimonial
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (editingTestimonial) {
                        updateTestimonial.mutate({ id: editingTestimonial.id, data: testimonialForm });
                      } else {
                        createTestimonial.mutate(testimonialForm);
                      }
                    }}
                    className="space-y-4"
                  >
                    <Input
                      placeholder="Client Name"
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Role"
                      value={testimonialForm.role}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                    />
                    <Input
                      placeholder="Company"
                      value={testimonialForm.company}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                    />
                    <Textarea
                      placeholder="Testimonial content"
                      value={testimonialForm.content}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                      required
                    />
                    <div className="space-y-2">
                      <Label>Client Avatar</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Avatar URL"
                          value={testimonialForm.avatar_url}
                          onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar_url: e.target.value })}
                          className="flex-1"
                        />
                        <Label 
                          htmlFor="avatar-upload" 
                          className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                        >
                          {avatarUploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                        </Label>
                        <input
                          id="avatar-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleAvatarUpload}
                          disabled={avatarUploading}
                        />
                      </div>
                      {testimonialForm.avatar_url && (
                        <div className="mt-2 flex items-center gap-2">
                          <img 
                            src={testimonialForm.avatar_url} 
                            alt="Avatar Preview" 
                            className="w-12 h-12 rounded-full object-cover border border-border"
                          />
                          <span className="text-xs text-muted-foreground">Preview</span>
                        </div>
                      )}
                    </div>
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      placeholder="Rating (1-5)"
                      value={testimonialForm.rating}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: e.target.value })}
                    />
                    <Button type="submit" className="w-full" disabled={createTestimonial.isPending || updateTestimonial.isPending}>
                      {createTestimonial.isPending || updateTestimonial.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : editingTestimonial ? (
                        "Update Testimonial"
                      ) : (
                        "Create Testimonial"
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials?.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      {testimonial.avatar_url ? (
                        <img src={testimonial.avatar_url} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">"{testimonial.content}"</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditTestimonial(testimonial)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteTestimonial.mutate(testimonial.id)}
                        disabled={deleteTestimonial.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Messages Tab */}
          <TabsContent value="contacts">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Messages</h2>
            <div className="space-y-4">
              {contacts?.map((contact) => (
                <Card key={contact.id} className={contact.read ? "opacity-60" : ""}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-foreground">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                        {contact.phone && <p className="text-sm text-muted-foreground">{contact.phone}</p>}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mt-3">{contact.message}</p>
                  </CardContent>
                </Card>
              ))}
              {(!contacts || contacts.length === 0) && (
                <p className="text-center text-muted-foreground py-8">No messages yet.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
