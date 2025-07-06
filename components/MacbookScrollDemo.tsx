import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Experience Seamless Looping Videos <br /> On This Macbook Display
          </span>
        }
        // Changed from image to video source
        src={`/videos/video.mp4`} //Update this to your video path
        showGradient={false}
      />
    </div>
  );
}