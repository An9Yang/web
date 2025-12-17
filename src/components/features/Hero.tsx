"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Bot, Server } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-xs uppercase tracking-wider text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live in 25,000+ Restaurants
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                        The AI Staff That <br />
                        <span className="text-primary bg-clip-text">Never Misses a Call</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
                        Stop losing orders to busy lines. Eamom answers every call, takes orders in English & Chinese, and sends them directly to your POS.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/25 w-full sm:w-auto">
                            Calculate Your Savings
                        </button>
                        <button className="px-8 py-4 bg-secondary text-secondary-foreground border border-border text-lg font-medium rounded-lg hover:bg-secondary/80 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Listen to Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground pt-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>Saves $40k/year</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>Bilingual (CN/EN)</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual (Interactive Flow) */}
                <div className="relative z-10 w-full lg:h-[500px] flex flex-col justify-center">

                    {/* 3-Layer Flow Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative">

                        {/* Connecting Lines Layer (Behind) */}
                        <div className="absolute inset-0 pointer-events-none hidden md:block">
                            {/* Line 1: Phone -> AI */}
                            <div className="absolute top-1/2 left-[25%] right-[55%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-primary/50 border-t border-dashed border-white/20" />
                            {/* Line 2: AI -> POS */}
                            <div className="absolute top-1/2 left-[55%] right-[25%] h-0.5 bg-gradient-to-r from-primary/50 via-primary/50 to-transparent border-t border-dashed border-white/20" />
                        </div>

                        {/* Layer 1: Customer Phone */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center relative z-10"
                        >
                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest text-center">1. Customer Calls</div>
                            <div className="w-[180px] bg-black border-[4px] border-zinc-700/50 rounded-[2.5rem] p-3 shadow-2xl relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-lg z-20" />
                                <div className="h-[280px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2rem] flex flex-col items-center pt-8 relative overflow-hidden">
                                    <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold mb-2">TW</div>
                                    <div className="text-white text-sm font-medium">Tasty Wok</div>
                                    <div className="text-green-400 text-xs mt-1 animate-pulse">00:14</div>

                                    {/* Outgoing Audio Waves */}
                                    <div className="mt-8 flex gap-1 justify-center h-8 items-end">
                                        {[1, 3, 2, 4, 3].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [4, h * 6, 4] }}
                                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-1 bg-white rounded-full"
                                            />
                                        ))}
                                    </div>

                                    {/* Moving Particle to AI (Visual only) */}
                                    <motion.div
                                        animate={{ y: [0, -20], opacity: [1, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute bottom-10 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5"
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Layer 2: Eamom AI Core */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center relative z-20"
                        >
                            <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest text-center">2. AI Processes</div>

                            {/* The Brain Node */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                                <div className="absolute inset-2 bg-background border border-primary/50 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)] flex flex-col items-center justify-center text-primary z-10">
                                    <Bot className="w-10 h-10 mb-1" />
                                    <span className="text-[10px] font-bold tracking-tighter">EAMOM CORE</span>
                                </div>

                                {/* Orbiting Data Particles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-primary/20 rounded-full border-dashed"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-10px] border border-primary/10 rounded-full border-dotted"
                                />
                            </div>

                            {/* Processing Badge */}
                            <div className="mt-4 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] text-zinc-400">Transcribing...</span>
                            </div>
                        </motion.div>

                        {/* Layer 3: Restaurant POS */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center relative z-10"
                        >
                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest text-center">3. Kitchen Gets Order</div>
                            <div className="w-[220px] bg-zinc-100 dark:bg-zinc-900 border border-border rounded-xl shadow-xl p-2 relative group">
                                {/* POS Header */}
                                <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-t-md mb-2 flex items-center px-2">
                                    <div className="w-2 h-2 bg-zinc-400 rounded-full" />
                                </div>

                                {/* Ticket */}
                                <div className="bg-white dark:bg-black p-4 rounded border border-border/50 min-h-[200px] flex flex-col">
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2 mb-2">
                                        <span className="text-[10px] font-bold text-gray-400">TICKET #1402</span>
                                        <Server className="w-3 h-3 text-green-500" />
                                    </div>

                                    {/* Animated Item Entry */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                                        className="mb-2"
                                    >
                                        <div className="text-sm font-bold">General Tso Chkn</div>
                                        <div className="text-[10px] text-gray-500 flex justify-between">
                                            <span>Regular • Spicy</span>
                                            <span>$14.95</span>
                                        </div>
                                    </motion.div>

                                    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-end">
                                        <span className="text-[10px] font-bold">TOTAL</span>
                                        <span className="text-lg font-bold text-primary">$14.95</span>
                                    </div>
                                </div>

                                {/* Printing Animation */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                                    className="absolute -bottom-4 left-4 right-4 h-8 bg-white/80 border border-gray-200 -z-10 origin-top"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
