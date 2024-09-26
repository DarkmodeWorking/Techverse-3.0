export function ModelDisplayHeads() {
    return (
      <div
        key={"dummy-content"}
        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-center mb-10 text-white font-bold text-base md:text-xl"> 
          SOLO / TEAM - &#8377; 100 
        </p>
        {/* <Image
          src="/images/supercoders.jpeg"
          alt="Macbook mockup from Aceternity UI"
          width={500}
          height={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        /> */}
        <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
        <div className="sm:flex justify-between">
          <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Event Head: Tama Talukder <br />
            Phone: +91 62906 71329 <br />
            Email: tamatalukder329@gmail.com
          </p>
          <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Co-Event Head: Tanushree Dutta <br />
            Phone: +91 74397 60040 <br />
            Email: td92929@gmail.com
          </p>
        </div>
      </div>
    );
  };