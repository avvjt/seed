import React from "react";
import { TextEffect } from "@/components/ui/text-effect";

export default function HeroFAQ() {
  return (
    <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
      <section>
        <div className="relative mx-auto max-w-6xl px-6 pb-4 pt-8 lg:pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
            Simple, transparent pricing
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-5xl font-bold md:text-6xl"
            >
              Choose the perfect plan for your needs
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
            >
               Start free and scale as you grow. No hidden fees, no surprises. 
            Cancel anytime with our 30-day money-back guarantee.
            </TextEffect>
          </div>
        </div>
      </section>
    </main>
  );
}
