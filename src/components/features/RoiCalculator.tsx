"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, UserMinus } from "lucide-react";

export function RoiCalculator() {
    const [staffCount, setStaffCount] = useState(1);
    const monthlyWage = 3500; // Average monthly cost per staff
    const aiCost = 1200; // Estimated monthly cost for AI
    const annualSavings = (staffCount * monthlyWage - aiCost) * 12;

    return (
        <section id="roi" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-center">
                    Calculate Your Savings
                </h2>
                <p className="text-muted-foreground text-center mb-12 font-light tracking-wide">
                    See how much Eamom can add to your bottom line instantly.
                </p>
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6"> Stop Paying for "Hello" </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            A dedicated phone staff costs you $42k+/year. Eamom handles unlimited calls for a fraction of the cost, 24/7.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                    <UserMinus className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Eliminate Hiring Headaches</div>
                                    <div className="text-sm text-muted-foreground">No more training, scheduling, or turnover.</div>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Instant Profit Increase</div>
                                    <div className="text-sm text-muted-foreground">Add ~$30k directly to your bottom line per location.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Calculator Card */}
                    <div className="bg-secondary/30 border border-border rounded-3xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-8 text-center">Your Savings Calculator</h3>

                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-4">
                                <label className="font-medium text-muted-foreground">Number of Phone Staff</label>
                                <span className="text-2xl font-bold text-foreground">{staffCount}</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={staffCount}
                                onChange={(e) => setStaffCount(parseInt(e.target.value))}
                                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                <span>1 Staff</span>
                                <span>5 Staff</span>
                            </div>
                        </div>

                        <div className="bg-background rounded-xl p-6 border border-border space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-border">
                                <span className="text-muted-foreground">Current Labor Cost</span>
                                <span className="font-mono text-red-500">-${(staffCount * monthlyWage * 12).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-border">
                                <span className="text-muted-foreground">Eamom AI Cost</span>
                                <span className="font-mono text-foreground">-${(aiCost * 12).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="font-bold text-lg">Annual Savings</span>
                                <motion.span
                                    key={annualSavings}
                                    initial={{ scale: 1.2, color: "#22c55e" }}
                                    animate={{ scale: 1, color: "#22c55e" }}
                                    className="font-bold text-3xl font-mono text-green-500"
                                >
                                    +${annualSavings.toLocaleString()}
                                </motion.span>
                            </div>
                        </div>

                        <p className="text-xs text-center text-muted-foreground mt-6 opacity-60">
                            *Based on standard $18/hr wage + hiring costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
