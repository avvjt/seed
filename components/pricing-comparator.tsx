"use client"
import { useState } from "react";
import HeroPricing from "@/components/HeroPricing";

const CheckSVG = ({ className = "w-4 h-4 mr-3 fill-black dark:fill-white shrink-0" }) => (
  <svg className={className} viewBox="0 0 12 12">
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

const plans = [
  {
    name: "Essential",
    price: { yearly: 29, monthly: 35 },
    description: "Perfect for getting started.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
    ],
    popular: false,
  },
  {
    name: "Perform",
    price: { yearly: 49, monthly: 55 },
    description: "Best for growing teams.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { yearly: 79, monthly: 85 },
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
      "Free from repetition",
    ],
    popular: false,
  },
];

export default function PricingComparator() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <HeroPricing/>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-black dark:text-white">
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-gray-100 dark:bg-gray-900 rounded-full">
            <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
              <span
                className={`absolute inset-0 w-1/2 bg-black dark:bg-white rounded-full shadow transform transition-transform duration-150 ease-in-out ${
                  isAnnual ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-white dark:text-black" : "text-gray-700 dark:text-gray-400"
              }`}
              aria-pressed={isAnnual}
              onClick={() => setIsAnnual(true)}
            >
              Yearly <span className={isAnnual ? "text-gray-400 dark:text-gray-600" : "hidden"}>-20%</span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
                !isAnnual ? "text-white dark:text-black" : "text-gray-700 dark:text-gray-400"
              }`}
              aria-pressed={!isAnnual}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {plans.map((plan) => (
            <div key={plan.name} className="h-full">
              <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow ${
                  plan.popular ? "ring-2 ring-black dark:ring-white" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 mr-6 -mt-4">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <div className="text-black dark:text-white font-semibold mb-1">{plan.name}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-black dark:text-white font-bold text-3xl">$</span>
                    <span className="text-black dark:text-white font-bold text-4xl">
                      {isAnnual ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500 font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-5">{plan.description}</div>
                  <a
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black dark:bg-white px-3.5 py-2.5 text-sm font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-150"
                    href="#0"
                  >
                    Purchase Plan
                  </a>
                </div>
                <div className="text-black dark:text-white font-medium mb-3">Includes:</div>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3 grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckSVG />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}