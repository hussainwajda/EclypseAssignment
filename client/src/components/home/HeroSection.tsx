import React from "react";

export default function HeroSection() {
  const heroVideo = "https://eclypse-media-buck.s3.ap-south-1.amazonaws.com/assets/hero_bg.mp4";
  return (
    <section className="md:min-h-screen md:mx-8 bg-black text-white flex flex-col md:p-6 mb-12 font-helvetica">
      {/* Top row */}
      <div className="flex mx-1 justify-between items-end mb-1 md:mb-3">
        <h1 className="text-4xl md:text-8xl font-normal tracking-tight leading-none">Eclypse<span className="text-[30px] align-super">®</span></h1>
        <div className="text-[15px] font-medium tracking-tight leading-none flex align-sub gap-1 mt-10">
          <span className="mr-1">©</span>
          <span>2025</span>
        </div>
      </div>

      {/* Hero Video Container */}
      <div className="mt-6 relative md:mx-4 rounded-sm w-full overflow-hidden">
        <video
          className="w-full h-[320px] md:h-[560px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Caption */}
        <p className="absolute bottom-6 right-6 md:text-[32.57px] font-[Helvetica Neue] tracking-tightest">
          A silhouette worth remembering
        </p>
      </div>
    </section>
  );
}
