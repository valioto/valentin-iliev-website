import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="container max-w-4xl pt-24 md:pt-32 pb-16 md:pb-24 px-6">
          <h1 className="text-sm font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground">Last updated: November 2025</p>
            
            <p>
              This website is operated by Valentin Iliev ("I", "me", or "my"). I respect your privacy and am committed to protecting your personal information. This notice explains how I collect, use, and safeguard any data you share when using this site.
            </p>

            <div>
              <h2 className="font-bold text-foreground mb-2">1. Information I Collect</h2>
              <p className="mb-2">
                When you complete a contact form or request information, I may collect your name, email address, company name, and any other details you voluntarily provide.
              </p>
              <p>
                This website may also use basic analytics tools (such as Google Analytics or similar) to understand site performance and visitor behavior. These tools collect non-identifiable information such as page views, time on site, and browser type.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-foreground mb-2">2. How I Use Your Information</h2>
              <p className="mb-2">Your information is used solely to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries or project requests</li>
                <li>Communicate about potential collaboration or services</li>
                <li>Improve my website and user experience</li>
              </ul>
              <p className="mt-2">I will never sell or rent your data to any third parties.</p>
            </div>

            <div>
              <h2 className="font-bold text-foreground mb-2">3. Data Storage & Security</h2>
              <p>
                I store personal information securely and only for as long as necessary to fulfill the purpose for which it was collected. Reasonable technical and organizational measures are in place to prevent unauthorized access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-foreground mb-2">4. Cookies</h2>
              <p>
                This website may use cookies for functionality and performance analytics. You can adjust your browser settings at any time to decline or delete cookies.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-foreground mb-2">5. Your Rights</h2>
              <p className="mb-2">
                Under GDPR, you have the right to request access to, correction of, or deletion of your personal data.
              </p>
              <p>
                To exercise these rights, please contact me at [email address placeholder].
              </p>
            </div>

            <div>
              <h2 className="font-bold text-foreground mb-2">6. Contact</h2>
              <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>
              <p className="mt-2">
                Valentin Iliev<br />
                📧 [email address placeholder]
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
