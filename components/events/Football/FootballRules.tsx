export function FootballRules() {
    return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto"></p>
        <h2 className="text-xl font-bold mb-4">Tournament Rules and Regulations</h2>
          <ol className="list-decimal list-inside text-base text-neutral-600 dark:text-neutral-400">
            <li>TOURNAMENT TYPE: 3 V 3 (+1 SUB).</li>
            <li>ALL CARDS ARE ALLOWED.</li>
            <li>
              DURING MATCH, IF ANYONE USES FOUL LANGUAGE, THE INDIVIDUAL WILL BE SHOWN A YELLOW CARD. 
              2 YELLOW CARDS MEAN A RED CARD, WHICH WILL RESULT IN SUSPENSION FOR 1 MATCH.
            </li>
            <li>EXTERNAL ACCESSORIES LIKE JOYSTICK OR TRIGGER ARE NOT ALLOWED.</li>
            <li>
              IF ANYONE FACES LAG ISSUES OR NETWORK ISSUES DURING THE MATCH AND GETS DISCONNECTED, 
              THEN A REMATCH WITH REMAINING TIME WOULD BE ARRANGED, KEEPING THE PREVIOUS SCORE IN RECORD.
            </li>
            <li>THE REGISTRATION FEE IS NON-REFUNDABLE.</li>
            <li>NO ONLINE PARTICIPATION IS ALLOWED. THIS IS A LAN TOURNAMENT.</li>
            <li>
              IF A MATCH IS TIED, THEN BEST VS BEST WILL BE PLAYED.
            </li>
            <li>IPADS OR ANY SORT OF TABLETS ARE NOT ALLOWED.</li>
            <li>SLOTS ARE LIMITED. LATE ENTRIES WILL NOT BE ENTERTAINED.</li>
            <li>
              ALL TEAMS AND PARTICIPANTS MUST ARRIVE ON TIME. IF ANY TEAM DOES NOT REPORT AT THE 
              REPORTING TIME / MATCH TIME, THEN THE OPPONENT TEAM WILL GET A WALKOVER.
            </li>
            <li>THE DECISION OF EVENT HEADS WILL BE FINAL.</li>
          </ol>

        </div>
    );
  };