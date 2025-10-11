import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().max(20, "Phone number must be less than 20 characters").optional(),
  description: z.string().max(600, "Description must be less than 600 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ReachOut = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values
      });

      if (error) throw error;

      toast.success("Thank you! I'll be in touch soon.");
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-3xl pt-24 md:pt-32 pb-16 md:pb-24 px-6">
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Reach Out
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              The most powerful projects begin with an invitation. Share a brief overview of your challenge below, and I will be in touch to see if my advertising expertise is the perfect fit to drive your growth.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="border-border bg-background focus:border-foreground transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Email *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="your@email.com" 
                        className="border-border bg-background focus:border-foreground transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel"
                        placeholder="+1 (555) 000-0000" 
                        className="border-border bg-background focus:border-foreground transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold">Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your challenge..." 
                        className="border-border bg-background focus:border-foreground transition-colors min-h-[120px] resize-none"
                        maxLength={600}
                        {...field} 
                      />
                    </FormControl>
                    <div className="flex justify-between items-center">
                      <FormMessage className="text-xs" />
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0}/600
                      </span>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 transition-colors font-bold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ReachOut;
