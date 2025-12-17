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
        <section className="container max-w-4xl pt-40 sm:pt-44 md:pt-44 pb-16 md:pb-24 px-6">
          <h1 className="text-sm font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground">Last updated: November 2025</p>
            
            <p>
              This website is operated by 27x Ltd ("I", "me", or "my").<br />
              I respect your privacy and am committed to protecting your personal information.<br />
              This notice explains how I collect, use, and safeguard any data you share when using this site.
            </p>
            <div>
              <h2 className="font-bold text-foreground mb-2">1. Information I Collect</h2>
              <p className="mb-2">
                When you complete a contact form or request information, I may collect your name, email address, company name, and any other details you voluntarily provide.<br />
                I only collect personal information that you voluntarily submit through the contact form or email correspondence.
              </p>
              <p>
                This website may also use basic analytics tools (such as Google Analytics or similar) to understand site performance and visitor behavior.<br />
                These tools collect non-identifiable information such as page views, time on site, and browser type.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-2">2. Lawful Basis for Processing</h2>
              <p>
                The lawful basis for processing your personal data is legitimate interest — specifically, to respond to your inquiry, provide information you requested, or discuss potential collaboration or services.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-2">3. How I Use Your Information</h2>
              <p className="mb-2">Your information is used solely to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries or project requests</li>
                <li>Communicate about potential collaboration or services</li>
                <li>Improve my website and user experience</li>
              </ul>
              <p className="mt-2">I will never sell or rent your data to any third parties.</p>
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-2">4. Data Storage & Security</h2>
              <p className="mb-2">
                I store personal information securely and only for as long as necessary to fulfill the purpose for which it was collected.<br />
                If no ongoing business relationship is established, your data will typically be deleted within 12 months of your last interaction.<br />
                Reasonable technical and organisational measures are in place to prevent unauthorised access, loss, or misuse.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-2">5. Cookies</h2>
              <p>
                This website may use cookies for functionality and performance analytics.<br />
                You can adjust your browser settings at any time to decline or delete cookies.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-foreground mb-2">6. Your Rights</h2>
              <p className="mb-2">
                Under applicable data protection laws, including the UK and EU GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Restrict or object to the processing of your personal data</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-2">
                If you believe your data protection rights have been violated, you may lodge a complaint with your local data protection authority.
              </p>
              <p className="mt-2">
                To exercise these rights, please contact me at valentin@27x.co.uk.
              </p>
            </div>

            

            <div>
              <h2 className="font-bold text-foreground mb-2">7. Contact</h2>
              <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>
              <p className="mt-2">
                Valentin Iliev<br />
                📧 valentin@27x.co.uk
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
