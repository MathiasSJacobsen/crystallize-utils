import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/shapes/**/*.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        // Setting the `documentMode` to `string` is giving wrong types so commenting it out for now
        // documentMode: 'string',
        useTypeImports: true,
        skipTypename: true,
      },
      plugins: [],
    },
  },
};

export default config;
