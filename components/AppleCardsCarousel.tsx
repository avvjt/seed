"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Unique content components for each card
const AIContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Apple Intelligence understands context like never before.
      </span>{" "}
      With on-device processing, your conversations remain private while Siri
      anticipates your needs. From summarizing meetings to generating custom
      emojis, your device becomes an extension of your mind.
    </p>
    <img
      src="https://images.unsplash.com/photo-1677442135722-5f5d4a1a4c4a?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="AI neural network"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const ProductivityContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Focus modes now adapt to your environment automatically.
      </span>{" "}
      Your devices work in concert to minimize distractions. Start a task on your
      MacBook, continue on iPad, and finish on iPhone - all without losing your
      flow state. Time-sensitive notifications surface only when truly needed.
    </p>
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Productivity dashboard"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const VisionProContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Spatial computing redefines human-machine interaction.
      </span>{" "}
      With 23 million pixels across dual displays, Vision Pro creates digital
      objects that feel physically present. Eye tracking and hand gestures enable
      control more intuitive than any input device before.
    </p>
    <img
      src="https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Apple Vision Pro"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const MapsContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Offline maps with real-time building interiors.
      </span>{" "}
      Navigate complex airports and malls without cellular connection. Augmented
      Reality walking directions project arrows onto the real world through your
      camera. Share ETA with friends that updates automatically if you're delayed.
    </p>
    <img
      src="https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="iPhone maps navigation"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const PhotographyContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Computational photography captures impossible shots.
      </span>{" "}
      Night mode now works with moving subjects. Portrait video creates cinematic
      depth effects in 4K. Photonic Engine processes images at the pixel level
      before compression artifacts occur.
    </p>
    <img
      src="https://images.unsplash.com/photo-1587911254191-8cbd5a6d8f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="iPhone camera interface"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const HiringContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Build the future with us.
      </span>{" "}
      We're seeking engineers passionate about privacy-first machine learning and
      energy-efficient silicon design. You'll work on technologies that will
      impact billions while upholding our core values of accessibility and
      environmental responsibility.
    </p>
    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Apple Park campus"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AIContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ProductivityContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <VisionProContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <MapsContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PhotographyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HiringContent />,
  },
];