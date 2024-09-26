export function LapRaceRules() {
    return (
      <div
        key={"dummy-content"}
        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className=" pb-10 text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <b>Rules and Regulations</b>
       
          <ol>
            <br /><li>
            <h2><b>Bot Specification:</b></h2>
             1. The size of the robot must not exceed 25cm x 25cm x 25cm (L x B x H) (10% tolerance).
            </li>
            <li>
             2. There is no restriction on wheel size, types, and numbers.
            </li>
            <li>
             3. The voltage must not exceed a maximum of 18 volts.
            </li>
            <li>
             4. The weight of the robot must not exceed 3kg.
            </li>
            <li>
             5. Robots may be wired or wireless. For wired robots, the size of the wire must be at least 12 feet long to cover the whole arena without any disturbance.
            </li>
            <li>
             6. Any ready-made car, IC engines, or hydraulic systems are not allowed.
            </li>
          </ol>

          <br /><h2><b>Game Rules:</b></h2>
          <ol>
            <li>
             1. 1 trial and 1 final chance will be given to the participants.
            </li>
            <li>
             2. 3 laps of the track are a must, with no time limit.
            </li>
            <li>
             3. 3 hand touches if the bot is de-tracked and can&apos;t be brought back to the track.
            </li>
            <li>
             4. 1 technical timeout for 2 minutes.
            </li>
            <li>
             5.  1 flag fall will cost the participants +10 seconds to the time elapsed for 3 laps.
            </li>
            <li>
             6.  One driver can participate one time with the same bot. If re-registration is done, then the old record of participation will be null and void.
            </li>
          </ol>

          <br /><h2><b>General Rules:</b></h2>
          <ol>
            <li>
            1.  Any ill-behavior or intentional damage to the arena will result in disqualification.
            </li>
            <li>
            2.  The event head&apos;s decision will be final; under any circumstances, rules can be altered if needed by the organizing authority.
            </li>
          </ol>
          </p>
        </div>
    );
  };