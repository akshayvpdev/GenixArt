"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ImageIcon, RefreshCw, Download } from "lucide-react";

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Failed to generate image");

      const data = await response.json();
      setImageUrl(data.imageUrl);
      toast({
        title: "Success",
        description: "Image generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };


  const handleDownload = async () => {
    if (!imageUrl) return;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-generated-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download image",
        variant: "destructive",
      });
    }
  };





  return (
<div className="grid gap-8 xl:grid-cols-2 bg-gradient-to-br from-black to-gray-950 border border-gray-900/40 rounded-2xl shadow-2xl overflow-hidden p-1">
  <Card className="bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-900/40 shadow-xl backdrop-blur-md hover:border-gray-800/60 transition-all duration-500">
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white/90">
        Create Your Image
      </h2>
      <div className="space-y-2">
        <Textarea
          placeholder="Describe the image you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] bg-black/60 border-gray-800/40 text-gray-100 placeholder-gray-600 focus:ring-gray-800 focus:border-gray-800 rounded-xl backdrop-blur-md transition-all duration-300 focus:bg-gray-900/60 resize-none"
        />
        <div className="flex gap-4">
          <Button
            onClick={generateImage}
            disabled={loading}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-gray-800/40 hover:border-gray-700 active:scale-[0.98]">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <ImageIcon className="mr-2 h-4 w-4" />
                Generate Image
              </>
            )}
          </Button>
          {imageUrl && (
            <Button
              variant="outline"
              onClick={() => setPrompt("")}
              disabled={loading}
              className="bg-gray-900/60 border-gray-800/40 text-gray-400 hover:bg-gray-800/60 backdrop-blur-sm transition-all duration-300">
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  </Card>

  <Card className="bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-900/40 shadow-xl backdrop-blur-md hover:border-gray-800/60 transition-all duration-500">
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white/90">Generated Image</h2>
      <div className="relative aspect-square rounded-xl bg-black/60 overflow-hidden backdrop-blur-md border border-gray-900/40 shadow-lg group hover:border-gray-800/60 transition-all duration-500">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="Generated image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-3 right-3 bg-black/60 hover:bg-gray-900/80 text-white backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 border border-gray-800/40 hover:border-gray-700"
              onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
          </>
        ) : loading ? (
          <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 animate-ping rounded-full bg-gray-800/20"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-gray-800/40">
                <ImageIcon className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <p className="text-sm text-gray-400 animate-pulse">
              Creating your masterpiece...
            </p>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center backdrop-blur-md">
            <ImageIcon className="h-12 w-12 text-gray-700 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  </Card>
</div>
  );
}

export default ImageGenerator;
