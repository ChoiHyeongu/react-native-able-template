import { PATH } from "../constants";
import { ls, write } from "../utils";

function isNotIndex(f: string) {
  return f !== "index.ts";
}

export async function generateFlowConstant() {
  let flows = await ls(PATH.FLOW);
  flows = flows.filter(isNotIndex);

  const key: { [key: string]: any } = {};

  for (const flow of flows) {
    let screens = await ls(`${PATH.FLOW}/${flow}/screens`);
    screens = screens.filter(isNotIndex);

    for (const screen of screens) {
      const name = screen.replace("Screen", "");

      // eslint-disable-next-line max-depth
      if (!key[flow]) {
        key[flow] = {};
      }

      key[flow][name] = name;
    }
  }

  write(
    `${PATH.CONSTANTS}/SCREEN.ts`,
    `export const FLOW = ${JSON.stringify(key).toUpperCase()}`
  );
}
