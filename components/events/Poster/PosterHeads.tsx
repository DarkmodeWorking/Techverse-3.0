export function PosterHeads() {
    return (
      <div
        key={"dummy-content"}
        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-center mb-10 text-white font-bold text-base md:text-xl"> 
          TEAM - &#8377; 100
        </p>
        <p className="pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
        <div className="sm:flex justify-between">
          <p className="pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
            Event Head: Leesha Saha <br />
            Phone: +91 81002 11820  <br />
            Email: sahaleesha004@gmail.com
          </p>
          <p className="pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
            Co-Event Head: Angana Kundu <br />
            Phone: +91 98320 187747 <br />
            Email: angana1408@gmail.com
          </p>
        </div>
      </div>
    );
  };