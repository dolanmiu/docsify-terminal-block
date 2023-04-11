type LineType = "info" | "error" | "success" | "warning" | "default";
export type LinePayload = {
  prefix?: string;
  type: LineType;
  text: string;
};

export const parseLine = (line: string): LinePayload => {
  // String comes in this format
  // $|npm run start
  // or
  // $|warning|npm run build
  // where $ is the prefix and warning is the type
  let [prefix, type, text] = line.split("|") as (string | undefined)[];

  if (text === undefined) {
    text = type;
  }

  if (type === undefined) {
    type = "default";
    text = prefix;
    prefix = undefined
  }

  if (
    type !== "info" &&
    type !== "error" &&
    type !== "success" &&
    type !== "warning"
  ) {
    type = "default";
  }

  return {
    prefix,
    type: (type as LineType) || "default",
    text: text ?? "",
  };
};
