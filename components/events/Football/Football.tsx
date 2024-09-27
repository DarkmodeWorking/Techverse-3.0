export function Football() {
    return (
      <div
        key={"dummy-content"}
        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        Welcome to the e-Football Tournament! <br /> <br />
        Where every pass, tackle, and goal defines champions. Today, players from all corners of the world unite 
          in pursuit of victory, pushing the limits of skill and strategy in the beautiful virtual game. 
          Let the competition ignite, and may the best team rise to glory! <br /> <br />
          <b> MATCH TIME: </b>
          <ul>
            <li>KNOCKOUT STAGE - 7 MINS (ET + PK ON)</li>
            <li>SEMI-FINAL - 8 MINS (ET + PK ON) </li>
            <li>FINAL - 10 MINS (ET + PK ON)</li>
          </ul>
          <br />
          <b>TOURNAMENT FORMAT: </b>
          <ul>
            <li>SLOTS LIMIT: 32 TEAMS</li>
            <li>KNOCKOUT STAGE: TEAMS WILL BE DRAWN UP RANDOMLY</li>
          </ul>
        </p>

      </div>
    );
  };