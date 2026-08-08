// HeroBanner.tsx

import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/background-logo.jpeg')",
       }}
      />
    </section>
  );
};

export default HeroBanner;