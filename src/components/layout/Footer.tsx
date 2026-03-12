import React from 'react';
import { Palette, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/10 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#FF5A1F]" />
            <span className="text-sm font-bold text-[#00FF66] tracking-tight">OpenCoverMaker</span>
          </div>
          <span className="text-xs text-neutral-500 hidden sm:inline-block">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-xs text-neutral-500">
            <a href="#" className="hover:text-[#00FF66] transition-colors">Templates</a>
            <a href="#" className="hover:text-[#00FF66] transition-colors">Tutorials</a>
            <a href="#" className="hover:text-[#00FF66] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#00FF66] transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-500 hover:text-[#00FF66] transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com/hengtuibabai/video-cover-maker" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#00FF66] transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
