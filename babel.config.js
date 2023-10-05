module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "^@/(.+)": "./src/\\1",
        },
      },
    ],
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
