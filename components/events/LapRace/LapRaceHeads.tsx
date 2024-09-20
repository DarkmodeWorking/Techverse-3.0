export function LapRaceHeads() {
    return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
         <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {/* event price */}
          </span>{" "}   
        </p>
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        For any furthur queries please contact:
        </p>
        <div className="sm:flex justify-between">
          <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Event Head: Alyvia Biswas <br />
            Phone: +91 96933 89037 <br />
            Email: alyvia02510@gmail.com
          </p>
          <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            Co-Event Head: Surajit Paul <br />
            Phone: +91 90648 38737 <br />
            Email: surajitpaul1304@gmail.com
          </p>
        </div>
      </div>
    );
  };