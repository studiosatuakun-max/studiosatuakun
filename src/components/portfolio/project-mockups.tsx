"use client";

export function ProjectMockup({ title }: { title: string }) {
  if (title === "Smart Tender") return <SmartTenderMockup />;
  if (title === "Smart POS") return <SmartPOSMockup />;
  if (title === "Jasurd.com") return <JasurdMockup />;
  if (title === "SkorAkhir.com") return <SkorAkhirMockup />;
  if (title === "vitation.id") return <VitationMockup />;
  if (title === "Selfify.id") return <SelfifyMockup />;
  
  return <div className="w-full h-full bg-white/5" />;
}

function SmartTenderMockup() {
  return (
    <div className="flex w-full h-full bg-[#0d1117] text-white overflow-hidden text-[5px] sm:text-[6px] font-sans">
      {/* Sidebar */}
      <div className="w-[12%] h-full bg-[#161b22] flex flex-col items-center py-2 border-r border-white/5 gap-3">
        <div className="w-4 h-4 rounded bg-yellow-400/20 flex items-center justify-center text-yellow-400">
          <div className="w-2 h-2 border border-current rounded-sm"></div>
        </div>
        <div className="w-4 h-4 rounded bg-white/5 flex flex-col gap-[1px] items-center justify-center text-white/40">
           <div className="flex gap-[1px]"><div className="w-1 h-1 bg-current rounded-sm"></div><div className="w-1 h-1 bg-current rounded-sm"></div></div>
           <div className="flex gap-[1px]"><div className="w-1 h-1 bg-current rounded-sm"></div><div className="w-1 h-1 bg-current rounded-sm"></div></div>
        </div>
        <div className="w-3 h-0.5 bg-white/20 rounded-full mt-auto mb-2"></div>
      </div>
      
      {/* Main Content */}
      <div className="w-[88%] h-full flex flex-col p-2 gap-2">
        {/* Header */}
        <div className="flex justify-between items-center h-4">
           <div className="flex gap-2 bg-[#161b22] border border-white/5 rounded-full px-2 py-0.5 items-center">
             <span className="text-yellow-400 flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-current"></div>Market</span>
             <span className="text-white/40">Bidding</span>
             <span className="text-white/40">Project</span>
           </div>
           <div className="flex gap-1 items-center">
             <div className="bg-[#161b22] border border-white/5 rounded-full w-16 h-3 flex items-center px-1.5">
               <div className="w-1 h-1 rounded-full border border-white/40"></div>
               <div className="w-8 h-0.5 bg-white/10 ml-1 rounded-full"></div>
             </div>
             <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full flex items-center gap-1">
               <div className="w-1 h-1 rounded-full bg-current"></div> Online
             </div>
           </div>
        </div>

        {/* Title Area */}
        <div className="flex justify-between items-end mt-1">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[8px] sm:text-[10px] font-bold">Intelligence Overview</span>
              <span className="bg-green-500/20 text-green-400 px-1 rounded text-[4px]">Q3 2026</span>
            </div>
            <div className="text-[4px] text-white/40 mt-0.5">Real-time insights dari pipeline tender, performa proposal, dan operasi proyek.</div>
          </div>
          <div className="flex gap-1">
            <div className="bg-[#161b22] border border-white/5 px-2 py-1 rounded text-[4px]">Filter Data</div>
            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-[4px]">Generate Report</div>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-4 gap-1.5 h-10 mt-0.5">
          <div className="bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col justify-between relative overflow-hidden">
             <div className="text-[4px] text-white/40">TOTAL PIPELINE</div>
             <div className="text-[8px] font-bold">Rp 94.2M</div>
             <div className="text-[4px] text-green-400">+12.5%</div>
             {/* bg graphic */}
             <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-green-500/5"></div>
          </div>
          <div className="bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col justify-between relative">
             <div className="text-[4px] text-white/40">TENDER AKTIF</div>
             <div className="text-[8px] font-bold">24</div>
             <div className="text-[4px] text-green-400">+4</div>
          </div>
          <div className="bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col justify-between relative">
             <div className="text-[4px] text-white/40">AVG WIN PROBABILITY</div>
             <div className="text-[8px] font-bold">68%</div>
             <div className="text-[4px] text-green-400">+2.1%</div>
          </div>
          <div className="bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col justify-between relative">
             <div className="text-[4px] text-white/40">PROYEK BERJALAN</div>
             <div className="text-[8px] font-bold">12</div>
             <div className="text-[4px] text-white/40">On Track</div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex gap-1.5 flex-1 min-h-0 mt-0.5">
          {/* Table */}
          <div className="w-[60%] bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col gap-1">
             <div className="font-bold text-[6px]">Top Peluang Tender</div>
             <div className="flex text-[4px] text-white/40 border-b border-white/5 pb-0.5 mt-1">
               <div className="w-[50%]">NAMA PROYEK</div>
               <div className="w-[20%]">NILAI (HPS)</div>
               <div className="w-[15%]">RISK</div>
               <div className="w-[15%]">WIN PROB.</div>
             </div>
             <div className="flex flex-col gap-1.5 mt-0.5 overflow-hidden">
               <div className="flex items-center text-[4px] sm:text-[5px]">
                 <div className="w-[50%] truncate pr-1">Pengadaan Server Smart & Infrastruktur</div>
                 <div className="w-[20%]">Rp 15.2M</div>
                 <div className="w-[15%]"><span className="border border-green-500/20 text-green-400 px-1 py-0.5 rounded-sm text-[3px]">Low</span></div>
                 <div className="w-[15%] flex items-center gap-1"><div className="w-4 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-green-400"></div></div> 85%</div>
               </div>
               <div className="flex items-center text-[4px] sm:text-[5px]">
                 <div className="w-[50%] truncate pr-1">Jasa Konsultan IT & Keamanan Siber</div>
                 <div className="w-[20%]">Rp 8.1M</div>
                 <div className="w-[15%]"><span className="border border-yellow-500/20 text-yellow-400 px-1 py-0.5 rounded-sm text-[3px]">Medium</span></div>
                 <div className="w-[15%] flex items-center gap-1"><div className="w-4 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[62%] h-full bg-yellow-400"></div></div> 62%</div>
               </div>
               <div className="flex items-center text-[4px] sm:text-[5px]">
                 <div className="w-[50%] truncate pr-1">Pembuatan Sistem Smart City Tahap I</div>
                 <div className="w-[20%]">Rp 42.5M</div>
                 <div className="w-[15%]"><span className="border border-red-500/20 text-red-400 px-1 py-0.5 rounded-sm text-[3px]">High</span></div>
                 <div className="w-[15%] flex items-center gap-1"><div className="w-4 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[35%] h-full bg-red-400"></div></div> 35%</div>
               </div>
             </div>
          </div>
          
          {/* Activity */}
          <div className="w-[40%] bg-[#161b22] border border-white/5 rounded-md p-1.5 flex flex-col gap-1">
             <div className="font-bold text-[6px]">System Activities</div>
             <div className="flex flex-col gap-2 mt-1.5">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#0d1117] border border-white/5 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-sm border border-green-500/50"></div></div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-[4px] leading-tight text-white/80">Smart Analyzer menyelesaikan scoring untuk tender Smart City.</div>
                     <div className="text-[3px] text-white/40">10 mnt lalu</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded bg-[#0d1117] border border-white/5 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full border border-blue-500/50"></div></div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-[4px] leading-tight text-white/80">Dokumen KAK Server BUMN berhasil diekstrak otomatis.</div>
                     <div className="text-[3px] text-white/40">45 mnt lalu</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartPOSMockup() {
  return (
    <div className="flex w-full h-full bg-white text-zinc-800 overflow-hidden text-[5px] sm:text-[6px] font-sans">
      <div className="w-[15%] h-full bg-zinc-50 border-r border-zinc-200 flex flex-col py-2 px-1 gap-2">
         <div className="h-3 w-3/4 bg-blue-600 rounded-sm mb-2 mx-auto"></div>
         <div className="h-2 w-full bg-blue-100 rounded-sm"></div>
         <div className="h-2 w-full bg-transparent border border-zinc-200 rounded-sm"></div>
         <div className="h-2 w-full bg-transparent border border-zinc-200 rounded-sm"></div>
         <div className="mt-auto h-6 w-full bg-zinc-200 rounded-sm"></div>
      </div>
      <div className="w-[55%] h-full p-2 flex flex-col gap-2 bg-zinc-100">
         <div className="flex justify-between items-center bg-white p-1.5 rounded shadow-sm border border-zinc-200">
            <div className="h-2 w-24 bg-zinc-200 rounded-full"></div>
            <div className="h-2 w-8 bg-zinc-200 rounded-full"></div>
         </div>
         <div className="grid grid-cols-3 gap-1.5 flex-1">
            {[...Array(6)].map((_, i) => (
               <div key={i} className="bg-white rounded border border-zinc-200 flex flex-col p-1 shadow-sm">
                  <div className="flex-1 bg-zinc-100 rounded-sm mb-1"></div>
                  <div className="h-1 w-3/4 bg-zinc-800 rounded-full mb-0.5"></div>
                  <div className="h-1 w-1/2 bg-blue-600 rounded-full"></div>
               </div>
            ))}
         </div>
      </div>
      <div className="w-[30%] h-full bg-white border-l border-zinc-200 p-2 flex flex-col shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
         <div className="font-bold mb-1">Current Order</div>
         <div className="text-[4px] text-zinc-500 mb-2">Order #0042 • Dine In</div>
         <div className="flex-1 flex flex-col gap-1 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between items-center border-b border-zinc-100 pb-1">
                <div className="flex flex-col gap-0.5"><div className="h-1 w-12 bg-zinc-800 rounded-full"></div><div className="h-0.5 w-6 bg-zinc-400 rounded-full"></div></div>
                <div className="h-1 w-6 bg-zinc-800 rounded-full"></div>
              </div>
            ))}
         </div>
         <div className="mt-auto pt-1 border-t border-dashed border-zinc-300 flex flex-col gap-1">
            <div className="flex justify-between"><span className="text-[4px]">Subtotal</span><span className="text-[4px]">Rp 150.000</span></div>
            <div className="flex justify-between"><span className="text-[4px]">Tax (11%)</span><span className="text-[4px]">Rp 16.500</span></div>
            <div className="flex justify-between font-bold text-[6px] mt-0.5"><span>Total</span><span>Rp 166.500</span></div>
            <div className="w-full h-4 bg-blue-600 rounded-md mt-1 flex items-center justify-center text-white font-bold">Charge</div>
         </div>
      </div>
    </div>
  );
}

function JasurdMockup() {
  return (
    <div className="flex flex-col w-full h-full bg-[#fafafa] text-zinc-900 overflow-hidden text-[5px] sm:text-[6px] font-sans">
       {/* Navbar */}
       <div className="h-5 bg-white border-b border-zinc-200 flex items-center justify-between px-3 shadow-sm">
         <div className="flex items-center gap-1">
           <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
           <div className="font-bold text-[6px] tracking-tighter">JASURD</div>
         </div>
         <div className="w-1/3 h-3 bg-zinc-100 rounded-full border border-zinc-200 flex items-center px-1.5">
           <div className="w-1 h-1 border border-zinc-400 rounded-full"></div>
         </div>
         <div className="flex gap-1.5 items-center">
           <div className="w-6 h-2 bg-zinc-200 rounded-full"></div>
           <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
         </div>
       </div>
       {/* Content */}
       <div className="flex-1 p-3 flex flex-col gap-3">
         {/* Hero Banner */}
         <div className="w-full h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-2 flex flex-col justify-center">
           <div className="h-2 w-1/3 bg-white/90 rounded-sm mb-1"></div>
           <div className="h-1 w-1/2 bg-white/70 rounded-sm mb-2"></div>
           <div className="h-3 w-16 bg-white rounded-md"></div>
         </div>
         {/* Categories */}
         <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-3 w-12 bg-white border border-zinc-200 rounded-full"></div>
            ))}
         </div>
         {/* Products */}
         <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
               <div key={i} className="bg-white rounded-md border border-zinc-200 flex flex-col p-1">
                  <div className="h-10 w-full bg-zinc-100 rounded-sm mb-1"></div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full mb-0.5"></div>
                  <div className="h-1 w-2/3 bg-zinc-400 rounded-full mb-1.5"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-1/2 bg-purple-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                  </div>
               </div>
            ))}
         </div>
       </div>
    </div>
  );
}

function SkorAkhirMockup() {
  return (
    <div className="flex flex-col w-full h-full bg-[#111] text-white overflow-hidden text-[5px] sm:text-[6px] font-serif">
      <div className="h-6 border-b border-white/10 flex flex-col items-center justify-center relative">
        <div className="text-[8px] font-black tracking-widest text-red-500 uppercase">SkorAkhir</div>
        <div className="flex gap-2 mt-0.5 text-[3px] text-white/60 font-sans uppercase">
          <span>Bola</span><span>MotoGP</span><span>Basket</span><span>E-Sports</span>
        </div>
      </div>
      <div className="flex flex-1 p-2 gap-2 font-sans">
        {/* Main Article */}
        <div className="w-[65%] flex flex-col gap-1.5">
          <div className="w-full h-20 bg-zinc-800 rounded-sm relative overflow-hidden">
             <div className="absolute bottom-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded-sm text-[3px] font-bold">LIGA INGGRIS</div>
          </div>
          <div className="font-bold text-[7px] leading-tight">Manchester City Resmi Memenangkan Gelar Liga Ke-4 Beruntun</div>
          <div className="text-[4px] text-white/50">Pep Guardiola mencatatkan sejarah baru di Premier League...</div>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            <div className="flex gap-1">
              <div className="w-8 h-6 bg-zinc-800 rounded-sm shrink-0"></div>
              <div className="flex flex-col gap-0.5"><div className="h-1 w-full bg-white/80 rounded-sm"></div><div className="h-1 w-2/3 bg-white/40 rounded-sm"></div></div>
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-6 bg-zinc-800 rounded-sm shrink-0"></div>
              <div className="flex flex-col gap-0.5"><div className="h-1 w-full bg-white/80 rounded-sm"></div><div className="h-1 w-2/3 bg-white/40 rounded-sm"></div></div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-[35%] flex flex-col gap-1">
           <div className="font-bold text-[5px] uppercase border-b border-white/10 pb-0.5">Live Scores</div>
           <div className="flex flex-col gap-1">
             {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-zinc-900 rounded-sm p-1 border border-white/5 flex flex-col gap-0.5">
                   <div className="flex justify-between items-center text-[4px]"><span className="flex items-center gap-0.5"><div className="w-1 h-1 bg-white/20 rounded-full"></div> ARS</span><span>2</span></div>
                   <div className="flex justify-between items-center text-[4px]"><span className="flex items-center gap-0.5"><div className="w-1 h-1 bg-white/20 rounded-full"></div> MUN</span><span>0</span></div>
                   <div className="text-[3px] text-red-500 mt-0.5">78'</div>
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function VitationMockup() {
  return (
    <div className="flex w-full h-full bg-[#f8f9fa] overflow-hidden">
      {/* Editor Sidebar */}
      <div className="w-[30%] h-full bg-white border-r border-zinc-200 p-2 flex flex-col gap-1.5">
         <div className="h-2 w-1/2 bg-zinc-800 rounded-sm mb-1"></div>
         <div className="h-1.5 w-full bg-zinc-200 rounded-sm"></div>
         <div className="h-1.5 w-full bg-zinc-200 rounded-sm"></div>
         
         <div className="h-1.5 w-1/3 bg-zinc-800 rounded-sm mt-2 mb-0.5"></div>
         <div className="w-full h-8 border border-dashed border-zinc-300 rounded-md flex items-center justify-center">
            <div className="w-2 h-2 border border-zinc-400 rounded-sm"></div>
         </div>
         
         <div className="grid grid-cols-2 gap-1 mt-1">
           <div className="h-4 bg-zinc-100 border border-zinc-200 rounded-sm"></div>
           <div className="h-4 bg-zinc-100 border border-zinc-200 rounded-sm"></div>
         </div>
         <div className="mt-auto h-4 w-full bg-zinc-900 rounded-md"></div>
      </div>
      {/* Live Preview Area */}
      <div className="w-[70%] h-full bg-zinc-100 flex items-center justify-center p-2 relative">
         {/* Mobile Phone Mockup */}
         <div className="w-20 h-[90%] bg-white rounded-xl shadow-lg border-2 border-zinc-300 overflow-hidden relative flex flex-col items-center">
            {/* Notch */}
            <div className="w-6 h-1 bg-zinc-300 absolute top-0 rounded-b-md"></div>
            {/* Invitation Content */}
            <div className="w-full h-1/3 bg-rose-100/50 mb-2 flex items-end justify-center pb-2">
              <div className="w-6 h-6 rounded-t-full border border-rose-200 bg-white"></div>
            </div>
            <div className="h-1 w-1/2 bg-rose-800/80 rounded-full mb-0.5"></div>
            <div className="h-0.5 w-1/3 bg-rose-800/40 rounded-full mb-2"></div>
            
            <div className="h-0.5 w-2/3 bg-zinc-300 rounded-full mb-0.5"></div>
            <div className="h-0.5 w-1/2 bg-zinc-300 rounded-full mb-2"></div>
            
            <div className="w-3/4 h-6 border border-rose-200 rounded-md mt-1 bg-rose-50/50"></div>
            <div className="w-1/2 h-2 bg-rose-600 rounded-full mt-2"></div>
         </div>
      </div>
    </div>
  );
}

function SelfifyMockup() {
  return (
    <div className="flex w-full h-full bg-[#111318] text-zinc-100 overflow-hidden font-sans">
       <div className="w-[25%] h-full bg-[#181C25] border-r border-white/5 flex flex-col p-2 gap-2">
         <div className="font-bold text-[6px] text-indigo-400 mb-1">Selfify Space</div>
         <div className="flex flex-col gap-1">
           <div className="h-3 w-full bg-white/10 rounded-sm flex items-center px-1 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div></div>
           <div className="h-3 w-full bg-transparent rounded-sm flex items-center px-1 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div></div>
           <div className="h-3 w-full bg-transparent rounded-sm flex items-center px-1 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div></div>
         </div>
       </div>
       <div className="w-[75%] h-full flex flex-col">
         <div className="h-6 border-b border-white/5 flex items-center px-2 justify-between">
           <div className="h-1 w-12 bg-white/20 rounded-full"></div>
           <div className="w-3 h-3 bg-white/10 rounded-full"></div>
         </div>
         <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
            {/* Post 1 */}
            <div className="bg-[#181C25] rounded-md border border-white/5 p-1.5 flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-indigo-500/20"></div>
                <div className="h-0.5 w-8 bg-white/40 rounded-full"></div>
              </div>
              <div className="h-1 w-full bg-white/80 rounded-full mt-0.5"></div>
              <div className="h-1 w-5/6 bg-white/80 rounded-full"></div>
              <div className="flex gap-1 mt-1 border-t border-white/5 pt-1">
                 <div className="h-0.5 w-4 bg-white/20 rounded-full"></div>
                 <div className="h-0.5 w-4 bg-white/20 rounded-full"></div>
              </div>
            </div>
            {/* Post 2 */}
            <div className="bg-[#181C25] rounded-md border border-white/5 p-1.5 flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
                <div className="h-0.5 w-10 bg-white/40 rounded-full"></div>
              </div>
              <div className="h-1 w-[90%] bg-white/80 rounded-full mt-0.5"></div>
              <div className="h-1 w-2/3 bg-white/80 rounded-full"></div>
            </div>
         </div>
       </div>
    </div>
  );
}
