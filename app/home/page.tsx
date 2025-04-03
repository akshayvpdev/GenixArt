"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  ImagePlus,
  Wand2,
  Zap,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "ai1.png",
    "ai2.png",
    "ai3.png",
    "ai4.png",
    "ai5.png",
    "ai1.png",
  ];
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_50%)]" />
        </div>
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute top-0 -left-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-0 -right-10 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>
      <div className="relative">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text" />
                <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  AI-POWERED IMAGE GENERATION
                </span>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                Transform Your Imagination
                <br />
                Into Stunning Reality
              </h1>
              <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                Create breathtaking visuals instantly with our advanced AI. Turn
                your ideas into masterpieces with just a few clicks.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="px-8 py-6 btn-gradient-lg rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-500">
                  <span className="flex items-center gap-2">
                    Start Creating <ChevronRight className="h-4 w-4" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 rounded-xl backdrop-blur-sm transition-all duration-500">
                  View Gallery
                </Button>
              </div>
            </motion.div>

            <div>
      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mt-20"
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="group aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 p-2 cursor-pointer hover:scale-[1.02] hover:border-white/20 transition-all duration-500 hover:shadow-xl"
            onClick={() => setSelectedImage(url)}
          >
            <div className="w-full h-full rounded-xl flex items-center justify-center">
              <Image
                className="w-full h-full text-white/30"
                src={url}
                alt={`Image ${i + 1}`}
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative p-2 rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-gray-900/98 border border-white/10"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Zoomed Image"
                width={800}
                height={800}
                className="rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ImagePlus className="h-6 w-6" />,
                  title: "Advanced Generation",
                  description:
                    "Create stunning images with our state-of-the-art AI models",
                },
                {
                  icon: <Wand2 className="h-6 w-6" />,
                  title: "Style Control",
                  description:
                    "Fine-tune your creations with precise style controls",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Instant Results",
                  description:
                    "Get your images in seconds with our optimized pipeline",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-white/5 hover:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 w-fit mb-4 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                    {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-12 backdrop-blur-sm hover:scale-[1.01] transition-all duration-500 hover:shadow-xl">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Create?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of creators using our AI to bring their ideas to
              life.
            </p>
            <Button className="px-8 py-6 btn-gradient-lg rounded-xl">
              Get Started Now
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
