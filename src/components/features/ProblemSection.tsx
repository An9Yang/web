"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, DollarSign, Clock, Users } from "lucide-react";

export function ProblemSection() {
    return (
        <section className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <AlertCircle className="w-3 h-3" />
                        The Hidden Crisis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        The Real Cost of <br />
                        <span className="text-red-500">"Just One More Employee"</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-light leading-relaxed">
                        It's not just the hourly wage. Hiring, training, and turnover bleed your profits silently every single year.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Breakdown */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full" />

                        <div className="relative space-y-4">
                            {/* Base Wage Card */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-zinc-800/50 backdrop-blur border border-zinc-700 p-6 rounded-2xl flex justify-between items-center"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                                        <DollarSign className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Base Salary</div>
                                        <div className="text-white font-bold">Full-Time Staff</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-mono font-bold text-white">$37,440</div>
                            </motion.div>

                            {/* Hidden Costs Group */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="pl-8 space-y-4 border-l-2 border-dashed border-red-500/30 ml-8"
                            >
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-red-400" />
                                        <div className="text-red-200 text-sm">Recruiting & Hiring</div>
                                    </div>
                                    <div className="font-mono font-bold text-red-300">+$1,450</div>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-red-400" />
                                        <div className="text-red-200 text-sm">Training Losses</div>
                                    </div>
                                    <div className="font-mono font-bold text-red-300">+$4,600</div>
                                </div>
                            </motion.div>

                            {/* Total Cost */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white text-black p-6 rounded-2xl shadow-2xl flex justify-between items-center"
                            >
                                <div>
                                    <div className="font-bold text-sm text-zinc-500 uppercase">True Annual Cost</div>
                                    <div className="text-xs text-red-500 font-bold">PER STATION</div>
                                </div>
                                <div className="text-4xl font-extrabold tracking-tighter">$43,500</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Narrative Text */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Stop Paying for "Dead Time"</h3>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Your phone staff spends 60% of their time waiting for calls, but you pay for 100% of their shift.
                                Plus, when they quit after 4 months (industry average), you pay to recruit and train all over again.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/50">
                                <div className="text-3xl font-bold text-white mb-1">3-5 mo</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest">Avg. Retention</div>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/50">
                                <div className="text-3xl font-bold text-white mb-1">3.5 wks</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest">Wasted Training</div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-800">
                            <p className="text-sm text-zinc-500 italic">
                                *Data based on US Restaurant Labor Statistics 2024 for Bilingual Staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
