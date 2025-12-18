"use client";

import React from "react";
import { MessageSquare, Server, Globe2, Clock } from "lucide-react";

const features = [
    {
        title: "Bilingual Genius",
        description: "Fluent in English and Mandarin (plus Cantonese accents). Handles mixed-language orders naturally.",
        icon: <Globe2 className="w-8 h-8 text-blue-500" />,
        bg: "bg-blue-500/10",
    },
    {
        title: "Smart Upselling",
        description: "Automatically asks 'Want a drink with that?' or 'Spicy or mild?', boosting average order value.",
        icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
        bg: "bg-purple-500/10",
    },
    {
        title: "Direct POS Integration",
        description: "Orders go straight to your kitchen printer. Compatible with Tiger, RestPOS, and more.",
        icon: <Server className="w-8 h-8 text-orange-500" />,
        bg: "bg-orange-500/10",
    },
    {
        title: "Never Busy",
        description: "Can handle multiple calls at once during Friday night rush. Zero missed customers.",
        icon: <Clock className="w-8 h-8 text-green-500" />,
        bg: "bg-green-500/10",
    },
];

export function Features() {
    return (
        <section id="product" className="py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
                        Designed for high-volume restaurants that refuse to compromise on service quality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
