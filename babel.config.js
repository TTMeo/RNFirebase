module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./"
        ],
        "extensions": [
          ".js",
          ".ios.js",
          ".android.js"
        ],
        "alias": {
          "utils": "./src/Utils",
          "backend": "./src/Backend",
          "assets": "./src/Assets",
          "frontend": "./src/Frontend"
        }
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "transform-remove-console"
      ]
    }
  }
}
