const rawInput = "   CMD:deploy --env=PROD --force   ";
const parseCommand = function (rawInput = "") {
  const word = rawInput.trim().toLowerCase();
  if (!word.startsWith("cmd:")) {
    return null;
  }

  const [commandToken, ...flags] = word.split(" ");
  const action = commandToken.slice(4);

  if (!action) {
    return null;
  }

  const isForced = flags.includes("--force");
  return {action, isForced};
};

console.log(parseCommand(rawInput));
