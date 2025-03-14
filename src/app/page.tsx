import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* About Section */}
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
          
          <h3 className="mt-10">Our Approach</h3>
          <p>
            Flexible Functions is an industrial research and development AI lab building practical use cases using current state-of-the-art machine learning 
            systems in different domains. We do this while researching how to build new user products and experiences while integrating the use of cutting-edge 
            foundation models.
          </p>
          <p>
            We expect the practical aspect of building use cases for AI will inform research on how to take advantage of AI to build new products and experiences 
            and how to tackle the challenges that currently prevent AI from being more prevalent across various industries.
          </p>
          <p>
            We believe we can only build useful applications by engaging end users and domain experts and seeing what problems we can help them tackle using AI. 
            This approach will increase the adoption of AI and in turn lead to increased investment in scaling the field.
          </p>

          <h3 className="mt-10">Research Focus</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>What is needed to make AI&apos;s predictive power useful in real-world applications</li>
            <li>How to tie model results to decisions - decision analysis</li>
            <li>Selecting metrics that align with business decisions</li>
            <li>Making AI operate more efficiently and cost-effectively</li>
            <li>Leveraging large multimodal models to improve current use cases, build new products and experiences</li>
          </ul>

          <h3 className="mt-10">Use Case: Demand Forecasting</h3>
          <p>
            Supply chains today are more vulnerable to unforeseen shocks/disruptions be it pandemics, wars, climate change, etc. 
            Overstocking leads to wasted inventory, tied-up capital, missed opportunities for fulfillment, and dissatisfied customers.
          </p>
          <p>
            We offer a dynamic inventory management system that uses various machine learning algorithms taking advantage of 
            diverse datasets to forecast demand at all levels with pinpoint accuracy. This enables you to always have the right 
            products stocked up. The goal is to forecast when and what every customer is going to purchase and optimize price 
            and experience.
          </p>
          <p className="italic">
            &ldquo;Imagine being able to predict, with pinpoint accuracy, exactly what every customer was going to buy every day, 
            in every location and what price they&apos;d be willing to pay.&rdquo;
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section pb-20">
        <div className="content-container">
          <h2>Company Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Solve hard problems by solving small problems</li>
            <li>DIY policy</li>
            <li>Be explicit in conversation</li>
            <li>Data-driven decisions - decisions must be backed by actual math</li>
            <li>100% dedication - must be top priority</li>
            <li>Open source</li>
            <li>Learn through practice (by doing)</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        <p>Science is better when shared.</p>
        <p className="mt-2">© {new Date().getFullYear()} Flexible Functions</p>
      </footer>
    </main>
  )
}