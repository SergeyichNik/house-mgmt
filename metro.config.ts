// Learn more https://docs.expo.io/guides/customizing-metro
import { InputConfigT } from "metro-config";

const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = (() => {
  const config: InputConfigT = getDefaultConfig(__dirname, {
    isCSSEnabled: true,
  });

  const { resolver, transformer } = config;
  config.transformer = {
    ...transformer,
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver?.assetExts?.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver?.sourceExts, "svg", "mjs", "js"],
  };

  return config;
})();
