"use client";

import React from "react";
import { Check, X, Clock, Wallet, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Comparison() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">
                        Upgrade Your Front Desk
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
                        Why hire another temp when you can install a permanent expert?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Human Card */}
                    <div className="rounded-3xl p-8 border border-border bg-secondary/20 relative opacity-80 backdrop-blur-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <UsersIcon className="w-24 h-24" />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-muted-foreground">Human Staff</h3>
                        <div className="text-3xl font-bold mb-8 opacity-50">$3,625 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>

                        <ul className="space-y-4">
                            <ListItem type="negative" text="Availability: 8-10 Hours/Day" icon={<Clock className="w-4 h-4" />} />
                            <ListItem type="negative" text="Training: 2 Weeks Required" icon={<ShieldCheck className="w-4 h-4" />} />
                            <ListItem type="negative" text="Memory: Forgets Upselling" icon={<Zap className="w-4 h-4" />} />
                            <ListItem type="negative" text="Cost: Rising Annually" icon={<Wallet className="w-4 h-4" />} />
                        </ul>
                    </div>

                    {/* AI Card */}
                    <div className="rounded-3xl p-8 border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative shadow-2xl shadow-primary/10 ring-1 ring-primary/20">
                        <div className="absolute -top-4 right-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                            Recommended
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-foreground">Eamom Voice AI</h3>
                        <div className="text-3xl font-bold mb-8 text-primary">$1,200 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>

                        <ul className="space-y-4">
                            <ListItem type="positive" text="Availability: 24/7/365" icon={<Clock className="w-4 h-4" />} />
                            <ListItem type="positive" text="Training: Instant Download" icon={<ShieldCheck className="w-4 h-4" />} />
                            <ListItem type="positive" text="Memory: Perfect Upselling" icon={<Zap className="w-4 h-4" />} />
                            <ListItem type="positive" text="Cost: Fixed & Lower" icon={<Wallet className="w-4 h-4" />} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ListItem({ type, text, icon }: { type: "positive" | "negative", text: string, icon: React.ReactNode }) {
    const isPos = type === "positive";
    return (
        <li className="flex items-center gap-3">
            <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                isPos ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}>
                {isPos ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            </div>
            <span className={cn(
                "text-sm font-medium",
                isPos ? "text-foreground" : "text-muted-foreground"
            )}>{text}</span>
        </li>
    )
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
