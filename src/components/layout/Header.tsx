import React from 'react';
import { Palette } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#141414] border-b border-white/10 sticky top-0 z-50 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="w-6 h-6 text-[#FF5A1F]" />
          <h1 className="text-xl font-bold text-[#00FF66] tracking-tight">OpenCoverMaker</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['Templates', 'Tutorials', 'Gallery', 'About'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="w-[100px] hidden md:block"></div> {/* Spacer to keep nav centered if needed, or just let it be */}
      </div>
    </header>
  );
}
