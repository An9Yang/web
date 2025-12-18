"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Upload, Bot, PhoneForwarded, Store } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Upload Your Menu",
        description: "Send us your menu photo or link. We support all formats including handwritten notes.",
        icon: <Upload className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "AI Training (24 Hrs)",
        description: "We build a custom model for your restaurant that knows your dishes, modifiers, and prices.",
        icon: <Bot className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "Set Up Forwarding",
        description: "Simply forward your restaurant line to the dedicated AI number we provide.",
        icon: <PhoneForwarded className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Go Live",
        description: "iOrderAI starts answering calls immediately. You focus on cooking.",
        icon: <Store className="w-6 h-6" />,
    },
];

export function Installation() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-center">
                        Setup in Minutes, Not Months
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 font-light tracking-wide">
                        No complex hardware. No technician visits. just intelligent automation.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Icon */}
                            <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-300 relative z-10 mb-6">
                                {step.icon}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm border-2 border-background">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
