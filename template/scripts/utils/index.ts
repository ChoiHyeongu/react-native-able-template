import fs from "fs";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

export function exist(dir: string) {
  try {
    fs.accessSync(
      dir,
      fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK
    );
    return true;
  } catch {
    return false;
  }
}

export async function mkdir(dir: string) {
  await fs.promises.mkdir(dir);
}

export async function write(path: string, fileContent: string) {
  await fs.promises.writeFile(path, fileContent);
}

export async function scan(query: string) {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(query);
  rl.close();
  return answer;
}

export function camel2snake(value: string) {
  return value.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}

export async function ls(path: string) {
  const result = await fs.promises.readdir(path);
  return result;
}
