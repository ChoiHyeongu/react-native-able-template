import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as flow from "@/flow";

import type { RootStackParamList } from "./App.type";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "VirtualizedLists should never be nested",
]);

const AppFlowStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <AppFlowStack.Navigator>
        {Object.entries(flow).map(([flowKey, screens]) => (
          <AppFlowStack.Group key={flowKey}>
            {Object.entries(screens).map(([, screen]) => (
              <AppFlowStack.Screen
                key={`${flowKey}-${screen.name}`}
                name={screen.name}
                component={screen.component}
              />
            ))}
          </AppFlowStack.Group>
        ))}
      </AppFlowStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
