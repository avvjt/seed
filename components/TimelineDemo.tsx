import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function TimelineDemo() {
  const data = [
    {
      title: "Step 1: Import Prospects",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Multi-Source Prospect Acquisition
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
            Expand your reach with seamless prospect gathering from multiple channels
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>One-click import from LinkedIn Groups, Events & Connections</li>
            <li>Chrome extension for instant prospect capture</li>
            <li>CSV upload for existing contact lists</li>
            <li>API integration with CRMs and marketing tools</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Prospect import dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Create Campaign",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Intelligent Campaign Setup
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
            Transform prospects into actionable lead generation campaigns
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Drag-and-drop campaign builder</li>
            <li>Pre-built templates for different objectives</li>
            <li>Real-time audience analytics dashboard</li>
            <li>AI-powered prospect scoring system</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Campaign dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Personalize Actions",
     content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Hyper-Targeted Engagement Sequences
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
            Craft personalized journeys that convert prospects to customers
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>Multi-channel action sequencing (visits, connects, messages)</li>
            <li>AI-generated personalized message templates</li>
            <li>Smart delay scheduling between actions</li>
            <li>Behavior-triggered automation workflows</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Personalization interface"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Launch & Automate",
      content: (
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Hands-Free Lead Generation
          </h3>
          <p className="mb-4 text-lg font-normal text-neutral-700 md:text-xl dark:text-neutral-300">
            Launch campaigns and watch leads flow in automatically
          </p>
          <ul className="mb-6 ml-5 list-disc text-base text-neutral-600 md:text-lg dark:text-neutral-300">
            <li>One-click campaign activation</li>
            <li>24/7 automated prospect engagement</li>
            <li>Real-time performance analytics</li>
            <li>Smart throttling to mimic human behavior</li>
          </ul>
          <div className="grid grid-cols-1">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Automation dashboard"
              className="w-full rounded-xl border object-cover shadow-lg md:h-96"
            />
          </div>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-black to-black p-6 text-white shadow-xl">
            <h4 className="mb-3 text-xl font-bold md:text-2xl">
              Results You Can Expect
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div>
                <p className="text-3xl font-bold md:text-4xl">15x</p>
                <p className="text-sm">Efficiency Gain</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">62%</p>
                <p className="text-sm">Response Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">35%</p>
                <p className="text-sm">Conversion Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold md:text-4xl">18hr</p>
                <p className="text-sm">Weekly Saved</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
             
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                   Convert Prospects to Customers <br /> in <Cover>4 Simple Steps</Cover>
                </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Our automated workflow turns LinkedIn engagement into revenue growth
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}