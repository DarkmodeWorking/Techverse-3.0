import { div } from 'framer-motion/client';
import React from 'react';

const VisionHackTracks = () => {
  return (
    <div  key={"dummy-content"}
    className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <section className='pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto'>
      <header>
        <h1>Project Sectors Announcement for Hackathon Participants</h1>
        <p>Hello Innovators!</p>
        <p>
          We&apos;re thrilled to reveal the broad sectors in which you&apos;ll be
          developing your ideas, giving you the freedom to approach each area
          with your unique perspective and creativity. The selected sectors are
          designed to inspire you and open doors to innovative problem-solving.
        </p>
      </header>

      <section className='pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto'>
        <h2>Here are the sectors you&apos;ll explore:</h2>

        <article>
          <h3>1. Retail & E-commerce</h3>
          <p>
            Reimagine how people connect with products, services, and
            experiences, whether it&apos;s through inventive tools for organization,
            customer experience, or entirely new concepts in commerce.
          </p>
        </article>

        <article>
          <h3>2. Finance & Fintech</h3>
          <p>
            Help empower individuals and communities with fresh ideas in
            budgeting, saving, or financial literacy—find solutions that make
            financial management more intuitive and accessible.
          </p>
        </article>

        <article>
          <h3>3. Education & E-learning</h3>
          <p>
            Enrich learning and teaching through engaging, innovative
            tools—think beyond the classroom with platforms, quizzes, or
            interactive content that connect students and educators.
          </p>
        </article>

        <article>
          <h3>4. Environmental & Sustainability</h3>
          <p>
            Imagine new ways to promote eco-conscious practices, inspire
            environmental responsibility, and create a sustainable future. Your
            ideas could change how we care for our planet.
          </p>
        </article>

        <article>
          <h3>5. Student Innovation</h3>
          <blockquote>
            Let your imagination run wild and surprise the world with something
            no one has ever dreamed of. This is your chance to bring something
            truly unique to life. Whether practical or wildly creative, surprise
            us with ideas the world has yet to see.
          </blockquote>
        </article>
      </section>

      <section className='pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto'>
        <h2>Pitch Deck Requirements</h2>
        <p>In addition to your projects, we require a full-fledged pitch deck that includes the following components:</p>
        <ul>
          <li><strong>The Problem:</strong> Clearly outline the issue you are addressing.</li>
          <li><strong>The Solution:</strong> Describe the solution you are bringing and how it works.</li>
          <li><strong>Market Research:</strong> Provide insights on market size, market validation, and other relevant data.</li>
          <li><strong>Key Differentiators:</strong> Highlight what sets your solution apart from others.</li>
          <li><strong>Revenue Model:</strong> Outline how your solution will generate revenue.</li>
          <li><strong>Use Cases & User Benefits:</strong> Illustrate practical use cases and the benefits users will gain.</li>
          <li><strong>Technology:</strong> Detail the technology stack and tools you plan to utilize.</li>
        </ul>
        <br />
        <p>
          For further reference, you can look into this: &nbsp;
          <b> <a className='hover:text-purple-700 underline' href="https://drive.google.com/file/d/1P_GvclE5koIsu7oswCh22eVPIhmkh8TY/view?usp=drive_link">Pitch Deck Example</a></b>
        </p>
      </section>

      <footer className='pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto'>
        <p>
          We can&apos;t wait to see how you shape these sectors with your ingenuity.
          Let your imagination run free, and best of luck!
        </p>
      </footer>
    </section>

    </div>
  );
};

export default VisionHackTracks;
