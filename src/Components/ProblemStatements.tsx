"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, Wallet, GraduationCap, Stethoscope, 
  ShieldCheck, Landmark, Leaf, Zap, 
  ArrowRight, Search, X, ChevronDown, ChevronUp,
  Target, Target as ScopeIcon, AlertCircle, Sparkles, FileText, Layout
} from "lucide-react";
import { domains, problemStatements, ProblemStatement, Domain } from "@/lib/problemData";
import { GlowingEffect } from "@/Components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5" />,
  Wallet: <Wallet className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

const ProblemStatements = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activePS, setActivePS] = useState<ProblemStatement | null>(null);

  const filteredPS = useMemo(() => {
    return problemStatements.filter((ps) => {
      const matchesDomain = selectedDomain ? ps.domain.toLowerCase() === selectedDomain.toLowerCase() : true;
      const matchesSearch = ps.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           ps.problemStatement.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <section id="problem-statements" className="!relative !min-h-screen !w-full !flex !flex-col !justify-center !items-center !py-24 !px-4 !overflow-hidden !font-azonix">
      {/* Background Decor */}
      <div className="!absolute !top-0 !left-0 !w-full !h-full !pointer-events-none !opacity-20">
        <div className="!absolute !top-1/4 !-left-20 !w-96 !h-96 !bg-red-600/30 !blur-[120px] !rounded-full"></div>
        <div className="!absolute !bottom-1/4 !-right-20 !w-96 !h-96 !bg-red-900/20 !blur-[120px] !rounded-full"></div>
      </div>

      <div className="!max-w-7xl !w-full !mx-auto !relative !z-10">
        {/* Header */}
        <div className="!text-center !mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="!text-4xl md:!text-6xl !font-black !text-white !tracking-[0.2em] !uppercase !mb-4"
            style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.5)" }}
          >
            Innovation <span className="!text-red-600">Domains</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="!text-gray-400 !text-sm !tracking-[0.3em] !uppercase"
          >
            Detailed Briefing & Problem Statements
          </motion.p>
        </div>

        {/* Problem Statements List */}
        <div className="!space-y-6 !mb-20">
          <div className="!flex !items-center !gap-3 !mb-8">
            <div className="!h-[1px] !flex-1 !bg-gradient-to-r !from-transparent !via-red-600/50 !to-transparent"></div>
            <h3 className="!text-xl !font-bold !text-white !tracking-[0.2em] !uppercase">PROBLEM STATEMENTS</h3>
            <div className="!h-[1px] !flex-1 !bg-gradient-to-r !from-transparent !via-red-600/50 !to-transparent"></div>
          </div>

          <div className="!flex !flex-wrap !justify-center !gap-6 !max-w-5xl !mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredPS.length > 0 ? (
                filteredPS.map((ps) => (
                  <motion.div
                    key={ps.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => setActivePS(ps)}
                    className="!group !relative !bg-transparent !border !border-white/5 !rounded-[2.5rem] !p-10 !cursor-pointer !transition-all hover:!border-red-600/30 hover:!bg-zinc-900/20 !w-full md:!w-[calc(50%-1.5rem)] !min-w-[340px] !flex !flex-col !items-center !justify-center !text-center"
                  >
                    <div className="!flex !flex-col !items-center !gap-2 !mb-4">
                      <div className="!text-[8px] !text-red-500 !opacity-50 !font-bold !tracking-[0.4em] !uppercase">
                        {ps.domain}
                      </div>
                      <div className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-full !bg-zinc-900/50 !border !border-white/10 !text-[8px] !font-bold !text-gray-300 !tracking-widest !uppercase">
                        <Landmark className="!w-3 !h-3 !text-red-500" />
                        <span>Backed by Govt. of Punjab</span>
                      </div>
                    </div>
                    
                    <h4 className="!text-lg md:!text-xl !font-black !text-white !mb-5 !transition-colors !tracking-widest !uppercase group-hover:!text-red-600">
                      {ps.title}
                    </h4>
                    
                    <p className="!text-xs !text-gray-400 !line-clamp-3 !mb-8 !normal-case !font-sans !max-w-md">
                      {ps.problemStatement}
                    </p>

                    <div className="!flex !items-center !gap-3 !text-red-600 !text-[10px] !font-black !tracking-[0.5em] !uppercase">
                      VIEW FULL BRIEF <ArrowRight className="!w-3 !h-3 group-hover:!translate-x-2 !transition-transform" />
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="!w-full !py-20 !text-center !text-gray-600 !tracking-widest !text-xs !uppercase">
                  No problem statements found for this criteria.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Filter Section (Search Removed) */}
        <div className="!flex !justify-center !gap-3 !mb-16">
          <button 
            onClick={() => { setSelectedDomain(null); setSearchQuery(""); }}
            className={cn(
              "!px-8 !py-2.5 !rounded-full !text-[11px] !border !transition-all !tracking-widest !uppercase !font-bold",
              !selectedDomain ? "!bg-red-600 !border-red-600 !text-white !shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "!border-white/10 !text-gray-500 hover:!border-red-500/50"
            )}
          >
            ALL INNOVATION DOMAINS
          </button>
        </div>

        {/* Domains Bento Grid */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-4 !mb-20">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedDomain(domain.name.split(' ')[0])} // Match by first word
              className={cn(
                "!group !relative !p-8 !rounded-2xl !border !transition-all !cursor-pointer !h-full !flex !flex-col !items-center !justify-center !text-center",
                selectedDomain === domain.name.split(' ')[0] 
                  ? "!bg-red-600/10 !border-red-600" 
                  : "!bg-transparent !border-white/5 hover:!border-red-600/40 hover:!bg-zinc-900/30"
              )}
            >
              <GlowingEffect spread={40} glow={selectedDomain === domain.name.split(' ')[0]} disabled={false} />
              
              <div className="!relative !z-10 !flex !flex-col !items-center !justify-center">
                <div className={cn(
                  "!w-14 !h-14 !rounded-2xl !flex !items-center !justify-center !mb-6 !transition-transform group-hover:!scale-110 shadow-lg",
                  selectedDomain === domain.name.split(' ')[0] ? "!bg-red-600 !text-white" : "!bg-zinc-900 !text-red-600"
                )}>
                  {iconMap[domain.icon]}
                </div>
                <h3 className="!text-sm md:!text-base !font-black !text-white !mb-3 !tracking-widest group-hover:!text-red-500 !transition-colors !uppercase">
                  {domain.name}
                </h3>
                <p className="!text-[10px] !text-gray-400 !leading-relaxed !font-sans !normal-case !max-w-[200px]">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Detail Modal */}
      <AnimatePresence>
        {activePS && (
          <div className="!fixed !inset-0 !z-[100] !flex !items-center !justify-center !p-4 md:!p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePS(null)}
              className="!absolute !inset-0 !bg-black/90 !backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="!relative !w-full !max-w-5xl !max-h-[90vh] !bg-zinc-950/90 !backdrop-blur-2xl !border !border-red-600/30 !rounded-[2.5rem] !overflow-hidden !shadow-2xl shadow-red-600/20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePS(null)}
                className="!absolute !top-6 !right-6 !z-20 !w-10 !h-10 !rounded-full !bg-zinc-900/50 !flex !items-center !justify-center !border !border-white/10 hover:!border-red-600 !transition-all !text-white"
              >
                <X className="!w-5 !h-5" />
              </button>

              <div className="!h-full !overflow-y-auto custom-scrollbar !p-8 md:!p-12 !pb-20">
                {/* Modal Content */}
                <div className="!mb-10">
                  <div className="!inline-block !px-3 !py-1 !bg-red-600/20 !border !border-red-600/40 !rounded-full !text-[8px] !text-red-500 !font-bold !tracking-[0.4em] !uppercase !mb-4">
                    {activePS.domain}
                  </div>
                  <h3 className="!text-2xl md:!text-4xl !font-black !text-white !tracking-widest !uppercase !mb-6 !leading-tight">
                    {activePS.title}
                  </h3>
                  <div className="!h-[1px] !w-full !bg-gradient-to-r !from-red-600/50 !to-transparent"></div>
                </div>

                <div className="!grid !grid-cols-1 lg:!grid-cols-12 !gap-12">
                  <div className="lg:!col-span-7 !space-y-10">
                    {/* Background */}
                    <section>
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <Layout className="!w-3 !h-3" /> Background
                      </h5>
                      <p className="!text-sm !text-gray-300 !leading-relaxed !font-sans !normal-case">
                        {activePS.background}
                      </p>
                    </section>

                    {/* Problem Statement */}
                    <section className="!bg-zinc-900/30 !p-6 !rounded-3xl !border !border-white/5">
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <AlertCircle className="!w-3 !h-3" /> Problem Statement
                      </h5>
                      <p className="!text-sm md:!text-base !text-white !font-bold !leading-relaxed !tracking-wide !uppercase">
                        {activePS.problemStatement}
                      </p>
                    </section>

                    {/* Key Objectives */}
                    <section>
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <Target className="!w-3 !h-3" /> Key Objectives
                      </h5>
                      <ul className="!grid !grid-cols-1 !gap-3">
                        {activePS.keyObjectives.map((obj, i) => (
                          <li key={i} className="!flex !gap-3 !text-xs !text-gray-400 !font-sans !normal-case">
                            <span className="!text-red-500 !mt-1">•</span> {obj}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Scope */}
                    <section>
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <ScopeIcon className="!w-3 !h-3" /> Scope
                      </h5>
                      <div className="!flex !flex-wrap !gap-2">
                        {activePS.scope.map((item, i) => (
                          <span key={i} className="!px-3 !py-1.5 !bg-zinc-900/30 !border !border-white/5 !rounded-lg !text-[10px] !text-gray-300 !font-sans !normal-case">
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="lg:!col-span-5 !space-y-10">
                    {/* Challenges */}
                    <section className="!bg-red-950/10 !border !border-red-900/20 !p-8 !rounded-[2rem]">
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-6">
                        <X className="!w-3 !h-3 !text-red-600" /> Current Challenges
                      </h5>
                      <div className="!space-y-6">
                        {Object.entries(activePS.challenges).map(([level, items]) => (
                          items && items.length > 0 && (
                            <div key={level}>
                              <div className="!text-[8px] !text-red-600/70 !font-bold !tracking-[0.3em] !uppercase !mb-2">
                                {level.replace(/([A-Z])/g, ' $1')}
                              </div>
                              <ul className="!space-y-2">
                                {items.map((item, i) => (
                                  <li key={i} className="!text-[10px] !text-gray-400 !leading-tight !normal-case !font-sans">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        ))}
                      </div>
                    </section>

                    {/* Innovation Opportunities */}
                    <section>
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <Sparkles className="!w-3 !h-3" /> Innovation Focus
                      </h5>
                      <div className="!space-y-3">
                        {activePS.innovationOpportunities.map((opp, i) => (
                          <div key={i} className="!flex !items-start !gap-3 !p-3 !bg-zinc-900/20 !rounded-xl !border !border-white/5">
                            <div className="!w-1.5 !h-1.5 !rounded-full !bg-red-600 !mt-1.5"></div>
                            <p className="!text-[11px] !text-gray-300 !normal-case !font-sans">{opp}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Deliverables */}
                    <section>
                      <h5 className="!flex !items-center !gap-2 !text-red-500 !text-[10px] !font-bold !tracking-[0.4em] !uppercase !mb-4">
                        <FileText className="!w-3 !h-3" /> Expected Deliverables
                      </h5>
                      <div className="!grid !grid-cols-1 !gap-2">
                        {activePS.deliverables.map((del, i) => (
                          <div key={i} className="!flex !items-center !gap-3 !px-4 !py-2 !bg-gradient-to-r !from-zinc-900/30 !to-transparent !border-l-2 !border-red-600 !text-[10px] !text-white !tracking-wider !uppercase">
                            {del}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #09090b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default ProblemStatements;
