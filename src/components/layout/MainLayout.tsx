import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-[#0A0A0A] text-white font-sans overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
