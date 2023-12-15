/* eslint-disable max-depth */
import { generateFlowConstant } from "./generate-flow-constant";
import { PATH } from "../constants";
import { template } from "../templates/screen.template";
import { ls, mkdir, scan, write } from "../utils";

/**
 * 각 스크린 생성
 * @param path 생성 경로
 * @param flow 상위 플로우
 * @param screen 화면 이름
 */
async function generateScreenDir(path: string, flow: string, screen: string) {
  const target = `${path}/${screen}`;
  await mkdir(target);
  write(`${target}/index.ts`, template.exportScreen(screen));
  write(`${target}/${screen}.tsx`, template.screen(flow, screen));
}

/**
 * 스크린 폴더 생성
 * @param flow 상위 플로우
 * @param screens 생성할 화면 목록
 */

export async function generateScreens(flow: string, screens: string[]) {
  const path = `${PATH.FLOW}/${flow}/screens`;

  for (const screen of screens) {
    await generateScreenDir(path, flow, screen);
  }

  // 모든 screen을 export
  const files = await ls(path);
  write(`${path}/index.ts`, files.map(template.exportScreenDir).join("\n"));
  await generateFlowConstant();
}

async function main() {
  const flow = await scan("Enter flow name: ");
  const screensStr = await scan("Enter screen names: ");
  const screens = screensStr.split(" ").map((it: string) => `${it}Screen`);

  generateScreens(flow, screens);
}

main;
