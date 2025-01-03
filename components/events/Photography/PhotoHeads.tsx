export function PhotoHeads() {
  return (
    <div
    key={"dummy-content"}
    className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
       <p className="text-center mb-10 text-white font-bold text-base md:text-xl"> 
          SOLO - &#8377; 50 
        </p>
        <p className=" pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
      <div className="sm:flex justify-between">
        <p className=" pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
          Event Head: Swayam Mondal <br />
          Phone: +91 62902 47709 <br />
          Email: swayamondal@gmail.com
        </p>
        <p className=" pb-10 text-neutral-400 text-xs md:text-xl font-sans max-w-3xl mx-auto">
          Co-Event Head: Daipayan Kumar <br />
          Phone: +91 76794 96675 <br />
          Email: daipayan.kumar13@gmail.com
        </p>
      </div>
    </div>
  );
};