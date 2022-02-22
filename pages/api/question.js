// json format

export const questions = [
  {
    id: "0",
    topic: "bacteriology",
    question:
      "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.",
    choices: ["WBC", "RBC", "NPM", "Platelet"],
    rationale:
      "1 Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.",
  },
  {
    id: "1",
    topic: "hematology",
    question:
      "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.",
    choices: ["WBC", "RBC", "NPM", "Platelet"],
    rationale:
      "2 Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.",
  },
  {
    id: "2",
    topic: "clinical microscopy",
    question: "What is the cell that helps the body from bleeding?",
    choices: ["WBC", "RBC", "NPM", "Platelet"],
    rationale: "3 WBC is the cell that helps the body from infection",
  },
];

// Filter the rationale by the current key
export const filterRationale = (key, rationale) => {
  return rationale[key];
}
