"use client";

export default function StarsLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small stars */}
      <div className="stars animate-twinkle"></div>
      {/* Bigger stars */}
      <div className="stars2 animate-twinkle2"></div>
    </div>
  );
}
