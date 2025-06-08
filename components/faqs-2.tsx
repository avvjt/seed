'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'item-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'item-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'item-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'item-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },

    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">About Leadseeder</h2>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
