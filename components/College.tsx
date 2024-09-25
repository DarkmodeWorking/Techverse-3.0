"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Guru Nanak Institute of Technology is a top engineering college in Kolkata. The vision of the college is to entrust the endeavoring professionals with the technical knowledge and professional mastery under the aegis of JIS group, in the year 2003 the technical campus offers undergraduate and postgraduate courses in various fields of engineering. This institute is approved by AICTE, affiliated to Maulana Abul Kalam Azad University of Technology and accredited by UGC, NAAC. It has 'A+' NAAC grade. To amplify teaching and learning in more competent approach, the institute nurtures creative minds, innovations in every technological fields and research initiatives.`;

export function TextGenerateEffectDemo() {
  return (
    <>
        <p style={{ fontFamily: 'CustomFont' }} className=" text-white text-3xl sm:text-5xl font-mono text-center"> Our Institute: Guru Nanak Institute of Technology </p>
        <div className="flex flex-col sm:flex-row m-10 sm:m-20 sm:gap-20 items-center">
            <img className="h-[16rem] w-[16rem] sm:h-[35rem] sm:w-[35rem] rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105 mb-10 sm:mb-0" src="/gallery/NIGHT-VIEW-COLLEG.jpg" alt="" />
            <TextGenerateEffect words={words} />
        </div>
    </>
  );
}
