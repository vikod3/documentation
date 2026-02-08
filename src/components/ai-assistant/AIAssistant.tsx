import { useEffect, useRef } from "react";
import Hls from "hls.js";
import ChatBox from "./ChatBox";
import WaveText from "@/components/ui/wave-text";

const VIDEO_URL = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/manifest/video.m3u8";

const AIAssistant = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_URL);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_URL;
    }
  }, []);

  return (
    <section className="py-10 md:py-14">
      {/* Background Video - Full Width */}
      <div className="w-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto mix-blend-screen"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            <WaveText text="Find answers faster with AI assistant." />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            <WaveText text="A chatbot trained on our docs and articles to help you find answers faster." staggerDelay={0.015} />
          </p>
        </div>

        {/* Chat Box */}
        <ChatBox />
      </div>
    </section>
  );
};

export default AIAssistant;
