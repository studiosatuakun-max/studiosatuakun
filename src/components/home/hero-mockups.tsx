"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LayoutDashboard, Users, Settings, Activity, Search, Bell, Server, Code, Terminal, Box, ShoppingCart, CreditCard, Store, Smartphone, Globe, Database, Cloud, Cpu } from "lucide-react";

export function CentralHubView() {
  const nodes = [
    { icon: <Globe className="w-10 h-10 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />, label: "WEB", angle: 0, color: "text-blue-400", hex: "#60A5FA" },
    { icon: <Smartphone className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />, label: "MOBILE", angle: 72, color: "text-emerald-400", hex: "#34D399" },
    { icon: <Database className="w-10 h-10 text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />, label: "DATA", angle: 144, color: "text-purple-400", hex: "#C084FC" },
    { icon: <Cloud className="w-10 h-10 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" />, label: "CLOUD", angle: 216, color: "text-sky-400", hex: "#38BDF8" },
    { icon: <Code className="w-10 h-10 text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]" />, label: "API", angle: 288, color: "text-rose-400", hex: "#FB7185" },
  ];

  const radius = 220;

  return (
    <motion.div 
      key="central-hub"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center text-white/90 relative z-10 font-sans absolute inset-0 bg-[#020202] overflow-hidden"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-3000"></div>

      <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
        {/* Global SVG for all connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: "translateZ(-1px)" }}>
          <defs>
            <radialGradient id="core-glow">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Lines from Center to Nodes */}
          {nodes.map((node, i) => {
            const x = (Math.cos((node.angle * Math.PI) / 180) * radius).toFixed(2);
            const y = (Math.sin((node.angle * Math.PI) / 180) * radius).toFixed(2);
            return (
              <g key={`line-core-${i}`}>
                {/* Thick glow line */}
                <motion.line 
                  x1="50%" y1="50%" 
                  x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                  stroke={node.hex}
                  strokeWidth="8"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Core solid line */}
                <motion.line 
                  x1="50%" y1="50%" 
                  x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                  stroke={node.hex}
                  strokeWidth="2"
                  strokeOpacity="0.8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Packet outward */}
                <motion.circle r="3" fill="#fff"
                  initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                  animate={{ cx: `calc(50% + ${x}px)`, cy: `calc(50% + ${y}px)`, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                  style={{ filter: `drop-shadow(0 0 10px ${node.hex})` }}
                />
                {/* Packet inward */}
                <motion.circle r="3" fill="#fff"
                  initial={{ cx: `calc(50% + ${x}px)`, cy: `calc(50% + ${y}px)`, opacity: 0 }}
                  animate={{ cx: "50%", cy: "50%", opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 + 1 }}
                  style={{ filter: `drop-shadow(0 0 10px ${node.hex})` }}
                />
              </g>
            );
          })}

          {/* Pentagon connecting outer hubs */}
          {nodes.map((node, i) => {
            const nextNode = nodes[(i + 1) % nodes.length];
            const x1 = (Math.cos((node.angle * Math.PI) / 180) * radius).toFixed(2);
            const y1 = (Math.sin((node.angle * Math.PI) / 180) * radius).toFixed(2);
            const x2 = (Math.cos((nextNode.angle * Math.PI) / 180) * radius).toFixed(2);
            const y2 = (Math.sin((nextNode.angle * Math.PI) / 180) * radius).toFixed(2);
            
            return (
              <g key={`line-outer-${i}`}>
                <motion.line 
                  x1={`calc(50% + ${x1}px)`} y1={`calc(50% + ${y1}px)`}
                  x2={`calc(50% + ${x2}px)`} y2={`calc(50% + ${y2}px)`}
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.circle r="2" fill="#fff"
                  initial={{ cx: `calc(50% + ${x1}px)`, cy: `calc(50% + ${y1}px)`, opacity: 0 }}
                  animate={{ cx: `calc(50% + ${x2}px)`, cy: `calc(50% + ${y2}px)`, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.6 }}
                />
              </g>
            );
          })}
        </svg>

        {/* Core Node */}
        <motion.div 
          className="relative z-20 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.4)] bg-black"
          animate={{ boxShadow: ["0 0 40px rgba(234,179,8,0.4)", "0 0 80px rgba(234,179,8,0.8)", "0 0 40px rgba(234,179,8,0.4)"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-yellow-500/50 animate-ping opacity-20 duration-1000"></div>
          <Cpu className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
          <div className="absolute -bottom-8 text-xs font-bold tracking-[0.3em] text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]">CORE</div>
        </motion.div>

        {/* Orbiting/Connected Nodes */}
        {nodes.map((node, i) => {
          const x = (Math.cos((node.angle * Math.PI) / 180) * radius).toFixed(2);
          const y = (Math.sin((node.angle * Math.PI) / 180) * radius).toFixed(2);

          return (
            <motion.div 
              key={i}
              className="absolute z-10 flex flex-col items-center justify-center"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x, y, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="relative flex items-center justify-center">
                {node.icon}
              </div>
              <div className={`absolute -bottom-8 w-max text-center text-[10px] font-bold tracking-[0.2em] ${node.color} drop-shadow-[0_0_5px_currentColor]`}>{node.label}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function CodeToUIView() {
  const [codeIndex, setCodeIndex] = useState(0);
  const codeString = `function Dashboard() {
  return (
    <Card className="glass">
      <Header title="Analytics" />
      <Metrics data="+12.5%" />
      <Chart type="line" />
    </Card>
  );
}`;

  useEffect(() => {
    if (codeIndex < codeString.length) {
      const timeout = setTimeout(() => {
        setCodeIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCodeIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [codeIndex, codeString.length]);

  return (
    <motion.div 
      key="code-ui"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex text-white/90 relative z-10 font-sans absolute inset-0 bg-[#050505] p-6 gap-6 overflow-hidden"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none"></div>

      {/* Left: Code Editor */}
      <div className="w-1/2 h-full bg-black/40 rounded-xl border border-white/5 p-4 font-mono text-xs sm:text-sm text-white/70 overflow-hidden relative shadow-inner">
        <div className="absolute top-2 left-4 text-[10px] text-white/30 uppercase tracking-widest font-sans">page.tsx</div>
        <pre className="mt-4 overflow-hidden">
          <code className="text-emerald-400/90 whitespace-pre-wrap">
            {codeString.substring(0, codeIndex)}
            <span className="w-2 h-4 bg-white/50 inline-block animate-pulse ml-0.5 align-middle"></span>
          </code>
        </pre>
      </div>

      {/* Right: UI Render */}
      <div className="w-1/2 h-full bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-center p-4 relative overflow-hidden">
         {/* Render UI based on typing progress */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
           animate={{ 
             opacity: codeIndex > 60 ? 1 : 0, 
             scale: codeIndex > 60 ? 1 : 0.9,
             filter: codeIndex > 60 ? "blur(0px)" : "blur(10px)"
           }}
           transition={{ duration: 0.5 }}
           className="w-full max-w-[240px] bg-black/50 border border-white/10 rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col"
         >
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-xs text-white/90 tracking-wide">Analytics</div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: codeIndex > 90 ? 1 : 0, x: codeIndex > 90 ? 0 : -10 }}
              className="mb-4"
            >
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Total Revenue</div>
              <div className="text-xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">+12.5%</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: codeIndex > 110 ? 1 : 0, y: codeIndex > 110 ? 0 : 10 }}
              className="h-16 w-full flex items-end gap-1.5 mt-auto"
            >
               {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                 <motion.div 
                   key={i} 
                   className="flex-1 bg-emerald-500/20 rounded-t-sm relative overflow-hidden" 
                   initial={{ height: 0 }}
                   animate={{ height: codeIndex > 130 + (i * 5) ? `${h}%` : 0 }}
                   transition={{ duration: 0.5, type: "spring" }}
                 >
                   <div className={`w-full h-[2px] rounded-t-sm bg-emerald-500`}></div>
                 </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>
    </motion.div>
  );
}

export function WebsiteView() {
  return (
    <motion.div 
      key="website"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col text-white/90 relative z-10 font-sans absolute inset-0 bg-[#050505] overflow-hidden"
    >
      {/* Aurora Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-yellow-500/10 blur-[120px] animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Website Header */}
      <div className="h-14 flex items-center justify-between px-8 border-b border-white/5 relative z-20 bg-black/50 backdrop-blur-md">
        <div className="font-bold text-sm tracking-tighter">STUDIO<span className="text-yellow-400">SATUAKUN</span></div>
        <div className="flex gap-6 text-[11px] font-medium text-white/60">
          <span className="hover:text-white cursor-pointer transition-colors">Services</span>
          <span className="hover:text-white cursor-pointer transition-colors">Portfolio</span>
          <span className="hover:text-white cursor-pointer transition-colors">About</span>
        </div>
        <div className="px-4 py-1.5 bg-white text-black rounded-full text-[10px] font-bold">Contact Us</div>
      </div>

      {/* Website Hero */}
      <div className="flex-1 flex flex-col items-center justify-center relative p-8 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-3 py-1 border border-white/10 rounded-full text-[9px] mb-6 bg-white/5"
        >
          Premium Digital Solutions
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold tracking-tighter mb-4 max-w-lg"
        >
          Building Digital Products That Drive Growth
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 text-xs mb-8 max-w-md"
        >
          Transforming ideas into high-performance websites and applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <div className="px-5 py-2.5 bg-white text-black rounded-full text-[11px] font-bold">Start Project</div>
          <div className="px-5 py-2.5 border border-white/20 rounded-full text-[11px] font-bold hover:bg-white/5">View Work</div>
        </motion.div>
      </div>
      
      {/* Mini Bento Grid */}
      <div className="h-32 px-8 pb-8 flex gap-4">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex-[2] bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden">
           <div className="text-[10px] font-bold mb-1">Performance</div>
           <div className="text-xl text-emerald-400 font-bold mb-2">99.9%</div>
           <div className="absolute right-0 bottom-0 w-32 h-16">
             <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full opacity-50">
                <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,5" fill="none" stroke="#10b981" strokeWidth="2" />
             </svg>
           </div>
         </motion.div>
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex-[1] bg-gradient-to-br from-yellow-500/20 to-rose-500/20 rounded-xl border border-white/10 p-4">
           <div className="text-[10px] font-bold mb-1">Users</div>
           <div className="text-xl text-white font-bold mb-2">1M+</div>
         </motion.div>
      </div>
    </motion.div>
  );
}

export function AppView() {
  const apps = [
    {
      title: "E-Commerce",
      icon: <ShoppingCart className="w-4 h-4 text-orange-400" />,
      color: "from-orange-500/20 to-transparent",
      header: "Discover",
      content: (
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-24 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
               <div className="text-[9px] font-bold text-white">Summer Sale 50%</div>
             </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 aspect-square bg-white/5 rounded-lg border border-white/10 p-2 flex flex-col justify-end">
              <div className="w-6 h-6 bg-white/10 rounded mb-1"></div>
              <div className="text-[7px] text-white/50">$120</div>
            </div>
            <div className="flex-1 aspect-square bg-white/5 rounded-lg border border-white/10 p-2 flex flex-col justify-end">
              <div className="w-6 h-6 bg-white/10 rounded mb-1"></div>
              <div className="text-[7px] text-white/50">$85</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Smart POS",
      icon: <Store className="w-4 h-4 text-emerald-400" />,
      color: "from-emerald-500/20 to-transparent",
      header: "Checkout",
      content: (
        <div className="flex flex-col gap-2 mt-3 h-full">
          <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-2 flex flex-col gap-1.5">
            {[1,2,3].map(i => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                  <div className="text-[7px] text-white/80">Latte Macchiato</div>
                </div>
                <div className="text-[7px] text-emerald-400">$4.50</div>
              </div>
            ))}
          </div>
          <div className="w-full h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-[9px] font-bold text-black mt-auto">
            Pay $13.50
          </div>
        </div>
      )
    },
    {
      title: "FinTech",
      icon: <CreditCard className="w-4 h-4 text-blue-400" />,
      color: "from-blue-500/20 to-transparent",
      header: "Wallet",
      content: (
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3 relative overflow-hidden">
            <div className="text-[7px] text-white/70 mb-1">Total Balance</div>
            <div className="text-sm font-bold text-white mb-2">$24,500.00</div>
            <div className="flex justify-between items-end">
              <div className="text-[7px] font-mono text-white/50">**** 4212</div>
              <div className="w-4 h-4 rounded-full bg-white/20"></div>
            </div>
          </div>
          <div className="text-[8px] font-bold text-white/80 mt-1">Recent Activity</div>
          <div className="flex flex-col gap-1">
             {[
               { n: "Netflix", v: "-$15.99" },
               { n: "Salary", v: "+$4,200", pos: true }
             ].map((t, i) => (
               <div key={i} className="flex justify-between items-center bg-white/5 rounded p-1.5">
                 <div className="text-[7px]">{t.n}</div>
                 <div className={`text-[7px] ${t.pos ? 'text-emerald-400' : 'text-white'}`}>{t.v}</div>
               </div>
             ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.div 
      key="app"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center text-white/90 relative z-10 font-sans absolute inset-0 bg-[#050505] overflow-hidden gap-6 p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>
      
      {/* Blurred Orbs */}
      <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      {apps.map((app, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 + 0.2 }}
          className="w-48 h-full max-h-[320px] bg-black rounded-[2rem] border-[4px] border-[#1a1a1a] p-1.5 shadow-2xl relative flex flex-col group overflow-hidden shrink-0"
        >
          {/* Top Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-b-xl z-20 flex justify-center items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-white/20"></div>
             <div className="w-8 h-1 rounded-full bg-white/10"></div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 bg-[#0a0a0a] rounded-[1.5rem] overflow-hidden flex flex-col relative z-10">
            <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${app.color} opacity-50 pointer-events-none`}></div>
            
            <div className="px-4 pt-6 pb-2 flex justify-between items-center relative z-10">
              <div className="font-bold text-[11px]">{app.header}</div>
              {app.icon}
            </div>
            
            <div className="flex-1 px-3 relative z-10">
              {app.content}
            </div>
            
            {/* Bottom Nav */}
            <div className="h-10 border-t border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md flex justify-around items-center px-2 z-10">
              {[1,2,3,4].map(idx => (
                <div key={idx} className={`w-3 h-3 rounded-full ${idx === 1 ? 'bg-white/80' : 'bg-white/20'}`}></div>
              ))}
            </div>
          </div>
          
          {/* Label below phone */}
          <div className="absolute -bottom-8 left-0 w-full text-center text-[10px] font-mono text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
            {app.title}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function SoftwareView() {
  return (
    <motion.div 
      key="software"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col text-white/90 relative z-10 font-sans absolute inset-0 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Matrix Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] text-[10px] font-mono text-emerald-500 whitespace-pre leading-none break-all z-0" style={{ writingMode: 'vertical-rl' }}>
        {Array.from({length: 40}).map(() => "01010011 01000001 01010100 01010101 01000001 01001011 01010101 01001110 ".repeat(20)).join('\n')}
      </div>

      {/* Menu Bar */}
      <div className="h-8 border-b border-white/10 flex items-center px-4 gap-4 text-[9px] text-white/60 bg-[#111]">
        <span className="text-white">File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      
      {/* Main IDE Area */}
      <div className="flex-1 flex min-h-0">
        {/* Activity Bar */}
        <div className="w-10 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-[#111]">
          <Box className="w-4 h-4 text-white/80" />
          <Search className="w-4 h-4 text-white/40" />
          <Terminal className="w-4 h-4 text-white/40" />
        </div>
        
        {/* Explorer */}
        <div className="w-40 border-r border-white/10 bg-[#0c0c0c] flex flex-col">
          <div className="px-3 py-2 text-[8px] font-bold text-white/40 uppercase tracking-wider">Explorer</div>
          <div className="flex flex-col px-2 gap-0.5 text-[9px] text-white/60">
            <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/5 cursor-pointer">
              <span className="w-2 h-2 border border-white/40"></span> src
            </div>
            <div className="flex flex-col pl-3">
              <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/5 cursor-pointer text-blue-300">
                <Code className="w-2 h-2" /> index.ts
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 cursor-pointer text-yellow-300">
                <Code className="w-2 h-2" /> engine.ts
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/5 cursor-pointer text-emerald-300">
                <Code className="w-2 h-2" /> utils.ts
              </div>
            </div>
          </div>
        </div>
        
        {/* Editor */}
        <div className="flex-1 flex flex-col bg-[#050505]">
          <div className="h-8 border-b border-white/10 flex items-center px-2 bg-[#0c0c0c]">
            <div className="px-3 py-1 bg-[#050505] text-[9px] text-yellow-300 border-t-2 border-yellow-300 flex items-center gap-2">
              engine.ts <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-[10px] text-white/70 overflow-hidden relative">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-4">
                <div className="text-white/20 text-right select-none flex flex-col gap-1">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8
                </div>
                <div className="flex flex-col gap-1 whitespace-pre">
                  <span className="text-purple-400">import</span> {`{ Core }`} <span className="text-purple-400">from</span> <span className="text-green-300">'@engine/core'</span>;
                  <br/>
                  <span className="text-purple-400">export class</span> <span className="text-yellow-300">Renderer</span> {`{`}
                  {`  `}
                  <span className="text-blue-400">private</span> core: Core;
                  {`  `}
                  <span className="text-blue-400">constructor</span>() {`{`}
                  {`    `}<span className="text-purple-400">this</span>.core = <span className="text-purple-400">new</span> <span className="text-yellow-300">Core</span>();
                  {`  }`}
                  {`}`}
                </div>
              </div>
              
              {/* Animated cursor */}
              <motion.div 
                className="absolute w-1.5 h-3 bg-white/50"
                style={{ top: '8.5rem', left: '7.5rem' }}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Right Panel / Terminal Preview */}
        <div className="w-48 border-l border-white/10 bg-[#0c0c0c] flex flex-col">
          <div className="px-3 py-2 text-[8px] font-bold text-white/40 uppercase tracking-wider border-b border-white/10">Terminal</div>
          <div className="flex-1 p-3 font-mono text-[9px] text-white/60">
            <div className="text-emerald-400">$ npm run dev</div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-1"
            >
              <span className="text-blue-400">info</span>  - ready on http://localhost:3000
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-1 text-white/40"
            >
              event - compiled client and server successfully in 1250 ms (145 modules)
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
