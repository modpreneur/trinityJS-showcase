System.config({
  baseURL: "/trinityJS-skeleton/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundles/babel.bundle.min.js": [
      "npm:babel-core@5.8.34/external-helpers",
      "npm:babel-core@5.8.34",
      "npm:babel-core@5.8.34/browser"
    ]
    //,
    //"bundles/trinity.bundle.js": [
    //  "github:modpreneur/trinityJS@master",
    //  "github:modpreneur/trinityJS@master/trinity",
    //  "github:modpreneur/trinityJS@master/App",
    //  "github:modpreneur/trinityJS@master/Controller",
    //  "github:modpreneur/trinityJS@master/Services",
    //  "github:modpreneur/trinityJS@master/Router",
    //  "github:modpreneur/trinityJS@master/Store",
    //  "github:modpreneur/trinityJS@master/Gateway",
    //  "github:modpreneur/trinityJS@master/TrinityForm",
    //  "github:modpreneur/trinityJS@master/TrinityTab",
    //  "github:modpreneur/trinityJS@master/Collection",
    //  "github:modpreneur/trinityJS@master/utils/Xhr",
    //  "github:modpreneur/trinityJS@master/utils/closureEvents",
    //  "github:modpreneur/trinityJS@master/utils/Dom",
    //  "github:modpreneur/trinityJS@master/utils/classlist"
    //]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "lodash": "npm:lodash@3.10.1",
    "trinity": "github:modpreneur/trinityJS@master",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:modpreneur/trinityJS@master": {
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
