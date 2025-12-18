import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 group mb-4">
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                <img
                                    src="/logo.png"
                                    alt="iOrderAI Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-primary transition-colors">
                                    iOrderAI
                                </span>
                                <span className="text-[10px] font-medium tracking-widest uppercase text-slate-500 leading-none">
                                    Voice AI
                                </span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Reinventing restaurant communication with AI. Boundless service for the modern dining experience.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#product" className="hover:text-primary">Features</Link></li>
                            <li><Link href="#roi" className="hover:text-primary">Pricing & ROI</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-primary">Integration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:hello@iorderai.com" className="hover:text-primary">hello@iorderai.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-slate-500">San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© 2025 iOrderAI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
