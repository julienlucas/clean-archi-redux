import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api2.andragog.xyz/api-v2/graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/infrastructure/api/schema/types.generated.ts': {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/infrastructure/api/queries': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '../types.generated.ts',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '../baseApi',
            exportHooks: true,
          },
        },
      ],
      config: {
        maybeValue: 'T',
      },
    },
  },
};

export default config;
