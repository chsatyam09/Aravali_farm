"use client";

import Navigation from '@/app/components/Navigation'
import GurgaonHome from "./GurgaonHome";

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ margin: 0, padding: 0 }}>
      {/* Navigation bar */}
      <Navigation />

      {/* Home content */}
      <GurgaonHome />
      
    </main>
  );
}
