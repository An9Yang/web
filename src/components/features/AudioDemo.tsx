"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const DEMOS = [
    {
        id: "accent",
        title: "Heavy Accent Handling",
        desc: "Customer speaking 'General Tso' with strong accent.",
        duration: "0:14",
        transcript: [
            { role: "customer", text: "Yeah, gimme uh... Jen-Rel Tso Chkn." },
            { role: "ai", text: "One General Tso's Chicken. Setting that to mild spice?" }
        ]
    },
    {
        id: "bilingual",
        title: "Mid-Sentence Switching",
        desc: "Customer switches from English to Mandarin.",
        duration: "0:22",
        transcript: [
            { role: "customer", text: "Can I also get, uh... (switches to CN) 还要一个红烧肉." },
            { role: "ai", text: "(In CN) 好的，一份红烧肉。需要加米饭吗？" }
        ]
    },
    {
        id: "noisy",
        title: "Noisy Bar Background",
        desc: "Loud ambient noise filtering.",
        duration: "0:18",
        transcript: [
            { role: "customer", text: "(Loud Music) ...and two cokes!" },
            { role: "ai", text: "Got it, two Cokes added. Anything else?" }
        ]
    }
];

export function AudioDemo() {
    const [activeDemo, setActiveDemo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mock play function
    const togglePlay = (index: number) => {
        if (activeDemo === index) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveDemo(index);
            setIsPlaying(true);
        }
    };

    return (
        <section className="py-24 bg-background border-y border-slate-200">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Playlist */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-foreground">
                                Native Understanding
                            </h2>
                            <p className="text-muted-foreground font-light tracking-wide text-lg">
                                Most AI fails at accents and mixed languages. Ours thrives on them.
                                Listen to raw audio samples below.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {DEMOS.map((demo, idx) => (
                                <button
                                    key={demo.id}
                                    onClick={() => togglePlay(idx)}
                                    className={cn(
                                        "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group",
                                        activeDemo === idx
                                            ? "bg-white border-primary shadow-md ring-1 ring-primary/20"
                                            : "bg-white border-slate-200 hover:border-primary/50 hover:shadow-sm"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm",
                                            activeDemo === idx ? "bg-primary text-white" : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                                        )}>
                                            {activeDemo === idx && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                        </div>
                                        <div>
                                            <div className={cn("font-medium text-sm transition-colors", activeDemo === idx ? "text-primary" : "text-foreground")}>
                                                {demo.title}
                                            </div>
                                            <div className="text-xs text-muted-foreground">{demo.desc}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-slate-400">{demo.duration}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualizer & Transcript */}
                    <div className="relative">
                        {/* Soft Glow behind */}
                        <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />

                        <div className="relative bg-white border border-slate-200 rounded-3xl p-8 min-h-[400px] flex flex-col shadow-xl">
                            {/* Visualizer Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    Live Transcript
                                </div>
                                {isPlaying && (
                                    <div className="flex items-end gap-0.5 h-4">
                                        {[1, 2, 3, 2, 1].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [4, h * 6, 4] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-1 bg-primary rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Transcript Body */}
                            <div className="space-y-6 flex-1">
                                {DEMOS[activeDemo].transcript.map((line, i) => (
                                    <motion.div
                                        key={activeDemo + i}
                                        initial={{ opacity: 0, x: line.role === "ai" ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.5) }}
                                        className={cn(
                                            "max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm",
                                            line.role === "ai"
                                                ? "ml-auto bg-primary text-white rounded-tr-sm"
                                                : "bg-slate-100 text-slate-700 border border-slate-200 rounded-tl-sm"
                                        )}
                                    >
                                        <div className={cn("text-[10px] font-bold opacity-70 mb-1 uppercase mb-2", line.role === "ai" ? "text-primary-foreground" : "text-slate-500")}>
                                            {line.role === "ai" ? "Eamom AI" : "Customer"}
                                        </div>
                                        {line.text}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Playback Controls (Visual) */}
                            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-400 font-mono">
                                <span>00:00</span>
                                <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: isPlaying ? "100%" : "0%" }}
                                        transition={{ duration: 10, ease: "linear" }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                                <span>{DEMOS[activeDemo].duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
