"use client";
import React from "react";
import { TextRevealCard, TextRevealCardTitle } from "./ui/text-reveal-card";

export function CoreTeam() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0E0E10] min-h-screen w-full py-10">
      <TextRevealCardTitle className="text-3xl text-white mb-10 text-center">
        Meet our Core Team members
      </TextRevealCardTitle>

      {/* Grid layout for team members with equal space distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10">
        <TextRevealCard
          text="Shampurna Rakshit"
          revealText="Convener"
          className="w-full break-words whitespace-normal leading-tight"
          
        />
        <TextRevealCard
          text="Zishan Khan Chowdhury"
          revealText="Convener"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Arijit Nandi"
          revealText="Convener"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Champak Kundu"
          revealText="Finance"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Nanda Lal Das"
          revealText="Tech Lead"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Sudipta Sen"
          revealText="Media Head"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Undefined"
          revealText="Marketing Head"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Aniket Das"
          revealText="Co-ordinator"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Arghyadip Roy"
          revealText="Co-ordinator"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Ankita Ghosh"
          revealText="Co-ordinator"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Riya Banerjee"
          revealText="SPOC"
          className="w-full break-words whitespace-normal leading-tight"
        />
        <TextRevealCard
          text="Smarta Das"
          revealText="SPOC"
          className="w-full break-words whitespace-normal leading-tight"
        />
           <TextRevealCard
          text="Mohok Bhanja"
          revealText="Explorer"
          className="w-full break-words whitespace-normal leading-tight"
        />
           <TextRevealCard
          text="Triyasha Kuri"
          revealText="Decorations"
          className="w-full break-words whitespace-normal leading-tight"
        />
      </div>
    </div>
  );
}
