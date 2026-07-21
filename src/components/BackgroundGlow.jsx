import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-[#0b0f19]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Radial Gradient Glow Orbs */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full orb-cyan opacity-40 blur-3xl animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute top-[40%] -right-[15%] w-[700px] h-[700px] rounded-full orb-blue opacity-30 blur-3xl animate-pulse"
        style={{ animationDuration: '12s' }}
      />
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[650px] h-[650px] rounded-full orb-purple opacity-25 blur-3xl animate-pulse"
        style={{ animationDuration: '10s' }}
      />

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0b0f19]/60 to-[#0b0f19]" />
    </div>
  );
}
