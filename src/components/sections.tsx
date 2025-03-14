import React from 'react';

export const HeroSection = () => (
  <section className="centered-container">
    <h1>
      FLEXIBLE
      <br />
      FUNCTIONS
    </h1>
    <p className="text-xl max-w-2xl text-center text-gray-600 mb-8">
      An industrial research and development AI lab building practical use cases using 
      current state-of-the-art machine learning systems in different domains.
    </p>
  </section>
);

export const AboutSection = () => (
  <section className="section">
    <div className="content-container">
      <h2>Our Vision</h2>
      <p>
        AI is the new electricity and has the potential to transform multiple industries. We believe we are entering one of the greatest eras of technology.
      </p>
      <p>
        While we hear a lot about potential use cases and how AI is going to automate everything, much of the value in AI is still untapped and undiscovered.
        To unleash the potential of AI, we are bridging the gap between research and real-world applications by building the application layer for AI.
      </p>
      
      {/* More content as in the page.tsx file */}
    </div>
  </section>
);

// You can create other section components in a similar way