/* eslint-disable max-depth */
import { generateFlowConstant } from "./generate-flow-constant";
import { generateScreens } from "./generate-screen";
import { PATH } from "../constants";
import { template } from "../templates/screen.template";
import { ls, mkdir, scan, write } from "../utils";

/**
 * 플로우 생성
 * @param name 플로우 이름
 */
async function generateFlowDir(name: string) {
  const path = `${PATH.FLOW}/${name}`;

  await mkdir(path);
  await mkdir(`${path}/screens`);

  write(`${path}/index.ts`, 'export * from "./screens";');

  const flows = await ls(PATH.FLOW);
  const exportCode = flows
    .filter((it: string) => it !== "index.ts")
    .map(template.exportFlowDir)
    .join("\n");

  write(`${PATH.FLOW}/index.ts`, exportCode);
}

export async function main() {
  const flow = await scan("Enter flow name: ");
  const screensStr = await scan("Enter screen names: ");
  const screens = screensStr.split(" ").map((it: string) => `${it}Screen`);

  await generateFlowDir(flow);
  await generateScreens(flow, screens);
  await generateFlowConstant();
}

main();
