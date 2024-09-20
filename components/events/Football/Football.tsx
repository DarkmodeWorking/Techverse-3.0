export function Football() {
    return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Welcome to the e-Football Tournament!</h2>
        <p className="text-base mb-4">
          Where every pass, tackle, and goal defines champions. Today, players from all corners of the world unite 
          in pursuit of victory, pushing the limits of skill and strategy in the beautiful virtual game. 
          Let the competition ignite, and may the best team rise to glory!
        </p>

        <h3 className="text-lg font-semibold mb-2">Match Time:</h3>
        <ul className="list-disc list-inside text-base text-neutral-600 dark:text-neutral-400">
          <li>GROUP STAGE - 6 MINS</li>
          <li>KNOCKOUT STAGE - 8 MINS (ET + PK ON)</li>
          <li>FINAL - 10 MINS (ET + PK ON)</li>
        </ul>

      </div>
    );
  };