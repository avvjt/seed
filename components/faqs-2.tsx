'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const about = [
        {
            id: 'about-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
    ]

    const work = [
        {
            id: 'work-1',
            question: 'How does the automation process work?',
            answer: 'The automation process works by...',
        },
        {
            id: 'work-2',
            question: 'What platforms does Leadseeder integrate with?',
            answer: 'Leadseeder integrates with multiple platforms including...',
        },
        {
            id: 'work-3',
            question: 'Can I customize the automation workflows?',
            answer: 'Yes, you can fully customize the automation workflows...',
        },
        {
            id: 'work-4',
            question: 'How long does setup typically take?',
            answer: 'Setup typically takes 1-2 business days...',
        },
        {
            id: 'work-5',
            question: 'Do you provide training for new users?',
            answer: 'Yes, we provide comprehensive training...',
        },
    ]

    const billing = [
        {
            id: 'billing-1',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards...',
        },
        {
            id: 'billing-2',
            question: 'Can I change my subscription plan?',
            answer: 'Yes, you can upgrade or downgrade...',
        },
        {
            id: 'billing-3',
            question: 'Is there a contract or minimum term?',
            answer: 'No, there are no long-term contracts...',
        },
        {
            id: 'billing-4',
            question: 'How do I cancel my subscription?',
            answer: 'You can cancel anytime from your dashboard...',
        },
        {
            id: 'billing-5',
            question: 'Do you offer discounts for annual payments?',
            answer: 'Yes, we offer 20% discount for annual payments...',
        },
    ]


const features = [
        {
            id: 'features-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'features-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'features-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'features-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'features-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
    ]


    const pricing = [
        {
            id: 'pricing-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'pricing-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'pricing-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'pricing-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'pricing-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
    ]


    const privacy = [
        {
            id: 'privacy-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'privacy-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'privacy-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'privacy-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'privacy-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
    ]

    const faqSections = [
        { title: 'About Leadseeder', items: about },
        { title: 'How It Works', items: work },
        { title: 'Billing', items: billing },
        { title: 'Product & Features', items: features },
        { title: 'Pricing and Plans', items: pricing },
        { title: 'Privacy and Security', items: privacy }
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">

                <div className="mt-12 space-y-16">
                    {faqSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-left text-3xl font-bold lg:text-4xl">
                                {section.title}
                            </h3>
                            
                            <Accordion
                                type="single"
                                collapsible
                                className="mt-4 w-full"
                            >
                                {section.items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-b border-dashed py-4"
                                    >
                                        <AccordionTrigger className="cursor-pointer justify-start text-left text-2xl text-bold hover:no-underline px-0 [&[data-state=open]>svg]:rotate-180">
                                            <span className="mr-2 flex-1 text-left">{item.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-0">
                                            <p className="text-lg">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}

                    <div className="mt-16">
                        <p className="text-muted-foreground">
                            Can&apos;t find what you&apos;re looking for? Contact our{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline"
                            >
                                customer support team
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}