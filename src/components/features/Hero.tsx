"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Bot, Server, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-background">
            {/* Background Gradients (Light Theme) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(30,108,126,0.15)_0%,transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,192,0,0.10)_0%,transparent_50%)] pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E6C7E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                        Live in 25,000+ Restaurants
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-foreground">
                        The AI Staff That <br />
                        <span className="text-primary">
                            Never Misses a Call
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                        Stop losing orders to busy lines. Eamom answers every call, takes orders in English & Chinese, and sends them directly to your POS.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-[#16515E] transition-all shadow-lg shadow-teal-900/10 hover:shadow-xl w-full sm:w-auto">
                            Calculate Your Savings
                        </button>
                        <button className="px-8 py-4 bg-white text-foreground border border-slate-200 text-lg font-medium rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm">
                            <Play className="w-5 h-5 fill-current opacity-80" />
                            Listen to Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-600 pt-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Saves $40k/year</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Bilingual (CN/EN)</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual (Interactive Flow) */}
                <div className="relative z-10 w-full lg:h-[500px] flex flex-col justify-center perspective-1000">

                    {/* 3-Layer Flow Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative">

                        {/* Connecting Lines Layer (Behind) */}
                        <div className="absolute inset-0 pointer-events-none hidden md:block">
                            {/* Line 1: Phone -> AI */}
                            <div className="absolute top-1/2 left-[25%] right-[55%] h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-primary/20 border-t border-dashed border-slate-300" />
                            {/* Line 2: AI -> POS */}
                            <div className="absolute top-1/2 left-[55%] right-[25%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/20 to-transparent border-t border-dashed border-slate-300" />
                        </div>

                        {/* Layer 1: Customer Phone */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center relative z-10"
                        >
                            <div className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest text-center">1. Customer Calls</div>
                            <div className="w-[180px] bg-slate-100 border-[4px] border-slate-200 rounded-[2.5rem] p-3 shadow-xl relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-300 rounded-b-lg z-20" />
                                <div className="h-[280px] bg-white rounded-[2rem] flex flex-col items-center pt-8 relative overflow-hidden border border-slate-100">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-2 border border-primary/20">TW</div>
                                    <div className="text-slate-900 text-sm font-medium">Tasty Wok</div>
                                    <div className="text-primary/70 text-xs mt-1 animate-pulse">00:14</div>

                                    {/* Outgoing Audio Waves */}
                                    <div className="mt-8 flex gap-1 justify-center h-8 items-end">
                                        {[1, 3, 2, 4, 3].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [4, h * 6, 4] }}
                                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-1 bg-primary/60 rounded-full"
                                            />
                                        ))}
                                    </div>

                                    {/* Moving Particle to AI (Visual only) */}
                                    <motion.div
                                        animate={{ y: [0, -20], opacity: [1, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute bottom-10 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5"
                                    >
                                        <div className="w-2 h-2 bg-primary rounded-full" />
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
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl animate-pulse" />
                                <div className="absolute inset-2 bg-white border border-primary/20 rounded-full shadow-[0_8px_30px_rgba(30,108,126,0.15)] flex flex-col items-center justify-center text-primary z-10">
                                    <Bot className="w-10 h-10 mb-1 text-primary" />
                                    <span className="text-[10px] font-bold tracking-tighter text-primary">EAMOM CORE</span>
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
                            <div className="mt-4 bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <span className="text-[10px] text-slate-500 font-medium">Transcribing...</span>
                            </div>
                        </motion.div>

                        {/* Layer 3: Restaurant POS */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center relative z-10"
                        >
                            <div className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest text-center">3. Kitchen Gets Order</div>
                            <div className="w-[220px] bg-white border border-slate-200 rounded-xl shadow-xl p-2 relative group">
                                {/* POS Header */}
                                <div className="h-6 bg-slate-100 rounded-t-md mb-2 flex items-center px-2 border-b border-slate-100">
                                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                                </div>

                                {/* Ticket */}
                                <div className="bg-white p-4 rounded border border-slate-100 min-h-[200px] flex flex-col">
                                    <div className="flex justify-between border-b border-dashed border-slate-200 pb-2 mb-2">
                                        <span className="text-[10px] font-bold text-slate-400">TICKET #1402</span>
                                        <Server className="w-3 h-3 text-green-500" />
                                    </div>

                                    {/* Animated Item Entry */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                                        className="mb-2"
                                    >
                                        <div className="text-sm font-bold text-slate-800">General Tso Chkn</div>
                                        <div className="text-[10px] text-slate-500 flex justify-between">
                                            <span>Regular • Spicy</span>
                                            <span>$14.95</span>
                                        </div>
                                    </motion.div>

                                    <div className="mt-auto pt-2 border-t border-slate-100 flex justify-between items-end">
                                        <span className="text-[10px] font-bold text-slate-500">TOTAL</span>
                                        <span className="text-lg font-bold text-primary">$14.95</span>
                                    </div>
                                </div>

                                {/* Printing Animation */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                                    className="absolute -bottom-4 left-4 right-4 h-8 bg-white/90 border border-slate-200 -z-10 origin-top shadow-sm"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}