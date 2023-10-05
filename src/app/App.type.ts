import type { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  [key: string]: Partial<{ [propKey: string]: unknown }>;
};
export type RootStackNavigationProps = NavigationProp<RootStackParamList>;
export type RootStackRouteProps = RouteProp<RootStackParamList>;
