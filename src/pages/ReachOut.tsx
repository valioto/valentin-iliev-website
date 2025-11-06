import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
import FloatingCTA from "@/components/FloatingCTA";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().max(20, "Phone number must be less than 20 characters").optional(),
  description: z.string().max(600, "Description must be less than 600 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ReachOut = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

      setShowSuccess(true);
      form.reset();
      
      // Hide success animation after 4 seconds
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow container max-w-3xl pt-40 sm:pt-44 md:pt-44 pb-16 md:pb-24 px-6">
        {/* Success Animation */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-4 text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Thank you!</h3>
              <p className="text-muted-foreground">I'll be in touch soon.</p>
            </div>
          </div>
        )}
        
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              The most powerful projects begin with a conversation. Share a brief overview of your advertising challenge below, and I'll get in touch for a free consultation to see if my expertise is the right fit to drive your growth. I typically respond within 24 hours.
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

          <p className="text-xs text-muted-foreground mt-8">
            By submitting this form, you acknowledge that your information will be used to respond to your inquiry in accordance with the{" "}
            <Link to="/privacy-policy" className="underline hover:text-foreground transition-colors">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </main>
      
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default ReachOut;
