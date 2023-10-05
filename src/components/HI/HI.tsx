import { JSX } from "react";

import { StyleSheet, Text } from "react-native";

const HI = (): JSX.Element => {
  return <Text style={styles.title}>{"A.B.L.E"}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HI;
