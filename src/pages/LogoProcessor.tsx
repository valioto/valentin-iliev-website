import { useState } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const LogoProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const processLogo = async () => {
    try {
      setProcessing(true);
      toast({
        title: "Processing logo...",
        description: "Removing background, this may take a moment.",
      });

      // Fetch the logo
      const response = await fetch(logo);
      const blob = await response.blob();
      
      // Load as image element
      const imageElement = await loadImage(blob);
      
      // Remove background
      const transparentBlob = await removeBackground(imageElement);
      
      // Create URL for preview and download
      const url = URL.createObjectURL(transparentBlob);
      setProcessedImage(url);
      
      toast({
        title: "Success!",
        description: "Background removed successfully. Click download to save.",
      });
    } catch (error) {
      console.error("Error processing logo:", error);
      toast({
        title: "Error",
        description: "Failed to process logo. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-transparent.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Downloaded!",
      description: "Replace src/assets/logo.png with the downloaded file.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Logo Background Remover</h1>
          <p className="text-muted-foreground">
            This utility will remove the white background from your logo.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-8 bg-card">
            <h2 className="text-xl font-bold mb-4">Original Logo</h2>
            <div className="bg-muted p-4 rounded inline-block">
              <img src={logo} alt="Original Logo" className="h-16" />
            </div>
          </div>

          {processedImage && (
            <div className="border rounded-lg p-8 bg-card">
              <h2 className="text-xl font-bold mb-4">Processed Logo (Transparent Background)</h2>
              <div className="bg-muted p-4 rounded inline-block">
                <img src={processedImage} alt="Processed Logo" className="h-16" />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={processLogo} disabled={processing}>
              {processing ? "Processing..." : "Remove Background"}
            </Button>
            {processedImage && (
              <Button onClick={downloadImage} variant="secondary">
                Download Transparent Logo
              </Button>
            )}
          </div>

          {processedImage && (
            <div className="border rounded-lg p-4 bg-muted">
              <p className="text-sm font-mono">
                <strong>Next steps:</strong>
                <br />
                1. Download the transparent logo
                <br />
                2. Replace src/assets/logo.png with the downloaded file
                <br />
                3. Refresh the website to see the changes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoProcessor;
