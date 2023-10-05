import { camel2snake } from "../utils";

/**
 * 화면 기본 템플릿
 *
 * @param flow 플로우 이름
 * @param screen 스크린 이름
 */
const screen = (flow: string, screen: string) => `
import { View } from "react-native";

import { FLOW } from "@/constants";

const ${screen} = () => {
  return <View></View>;
};
    
export default {
  component: ${screen}, 
  name: FLOW.${camel2snake(flow).toUpperCase()}.${camel2snake(
  screen.replace("Screen", "")
).toUpperCase()},
};
`;

/**
 * 화면 export 템플릿
 * @param screen 화면 이름
 * @returns
 */
const exportScreen = (screen: string) =>
  `export { default as ${screen} } from "./${screen}";`;

const exportScreenDir = (file: string) => `export * from "./${file}"`;

const exportFlowDir = (file: string) =>
  `export * as ${file.toLowerCase()} from "./${file}"`;

export const template = {
  screen,
  exportScreen,
  exportScreenDir,
  exportFlowDir,
};
