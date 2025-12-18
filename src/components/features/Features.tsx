"use client";

import React from "react";
import { MessageSquare, Server, Globe2, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Bilingual Genius",
        description: "Fluent in English and Mandarin (plus Cantonese accents). Handles mixed-language orders naturally.",
        icon: <Globe2 className="w-8 h-8 text-primary" />,
        bg: "bg-primary/10",
    },
    {
        title: "Smart Upselling",
        description: "Automatically asks 'Want a drink with that?' or 'Spicy or mild?', boosting average order value.",
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        bg: "bg-primary/10",
    },
    {
        title: "Direct POS Integration",
        description: "Orders go straight to your kitchen printer. Compatible with Tiger, RestPOS, and more.",
        icon: <Server className="w-8 h-8 text-primary" />,
        bg: "bg-primary/10",
    },
    {
        title: "Never Busy",
        description: "Can handle multiple calls at once during Friday night rush. Zero missed customers.",
        icon: <Clock className="w-8 h-8 text-primary" />,
        bg: "bg-primary/10",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function Features() {
    return (
        <section id="product" className="py-32 bg-background relative overflow-hidden">
            {/* Subtle background blob for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-foreground"
                    >
                        Everything You Need to Scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto font-light tracking-wide text-lg"
                    >
                        Designed for high-volume restaurants that refuse to compromise on service quality.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
