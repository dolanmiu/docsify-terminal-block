export type LinePayload = {
  prefix: string;
  type: "info" | "error" | "success" | "warning" | "default";
  text: string;
};

export const parseLine = (line: string): LinePayload => {
  // String comes in this format
  // $|npm run start
  // or
  // $|warning|npm run build
  // where $ is the prefix and warning is the type
  let [prefix, type, text] = line.split("|");

  if (text === undefined) {
    text = type;
  }

  return {
    prefix,
    type: type || "default",
    text,
  };
};
