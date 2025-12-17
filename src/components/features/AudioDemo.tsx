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
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Playlist */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">
                                Native Understanding
                            </h2>
                            <p className="text-zinc-400 font-light tracking-wide">
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
                                            ? "bg-zinc-800 border-primary/50 ring-1 ring-primary/20"
                                            : "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                            activeDemo === idx ? "bg-primary text-white" : "bg-zinc-800 text-zinc-500 group-hover:text-white"
                                        )}>
                                            {activeDemo === idx && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{demo.title}</div>
                                            <div className="text-xs text-zinc-500">{demo.desc}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-zinc-600">{demo.duration}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualizer & Transcript */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />

                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 min-h-[400px] flex flex-col">
                            {/* Visualizer Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
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
                                            "max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed",
                                            line.role === "ai"
                                                ? "ml-auto bg-primary/10 text-primary border border-primary/20 rounded-tr-sm"
                                                : "bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-tl-sm"
                                        )}
                                    >
                                        <div className="text-[10px] font-bold opacity-50 mb-1 uppercase mb-2">
                                            {line.role === "ai" ? "Eamom AI" : "Customer"}
                                        </div>
                                        {line.text}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Playback Controls (Visual) */}
                            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center gap-4 text-xs text-zinc-500 font-mono">
                                <span>00:00</span>
                                <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
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
