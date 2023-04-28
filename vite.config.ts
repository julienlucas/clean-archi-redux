import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env': Object.entries(env).reduce(
        (prev, [key, val]) => {
          return {
            ...prev,
            [key]: val,
          };
        },
        {
          APP_VERSION: JSON.stringify(version),
        }
      ),
    },
    server: {
      port: 4200,
      proxy: {
        '/api': {
          target: env.API_V1_BASE_URL,
          changeOrigin: true,
          configure: (proxy, options) => {
            // proxy will be an instance of 'http-proxy'
          },
        },
      },
    },
    resolve: {
      alias: {
        '@andragog/domain/usecases': path.resolve(
          __dirname,
          './src/domain/usecases'
        ),
        '@andragog/domain/entities': path.resolve(
          __dirname,
          './src/domain/entities'
        ),
        '@andragog/infrastructure': path.resolve(
          __dirname,
          './src/infrastructure'
        ),
        '@andragog/services': path.resolve(__dirname, './src/services'),
        '@andragog/shared': path.resolve(__dirname, './src/shared'),
        '@andragog/store': path.resolve(__dirname, './src/store/store'),
        '@andragog/userinterface/components': path.resolve(
          __dirname,
          './src/userinterface/components'
        ),
        '@andragog/userinterface/pages': path.resolve(
          __dirname,
          './src/userinterface/pages'
        ),
        '@ui-lib': path.resolve(__dirname, './src/services/ui-library/src/lib'),
        '@ui-lib-v2': path.resolve(
          __dirname,
          './src/services/ui-library-v2/src/lib'
        ),
        '@ui-lib/components': path.resolve(
          __dirname,
          './src/services/ui-library/src/lib/components'
        ),
        '@ui-lib-v2/components': path.resolve(
          __dirname,
          './src/services/ui-library-v2/src/lib/components'
        ),
        '@ui-lib/fields': path.resolve(
          __dirname,
          './src/services/ui-library/src/lib/fields'
        ),
        '@ui-lib-v2/fields': path.resolve(
          __dirname,
          './src/services/ui-library-v2/src/lib/fields'
        ),
        '@ui-lib/icons': path.resolve(
          __dirname,
          './src/services/ui-library/src/lib/icons'
        ),
        '@ui-lib/storybook': path.resolve(
          __dirname,
          './src/services/ui-library/src/lib/storybook'
        ),
        '@ui-lib/styleguide': path.resolve(
          __dirname,
          './src/services/ui-library/src/lib/styleguide'
        ),
      },
    },
  };
});
