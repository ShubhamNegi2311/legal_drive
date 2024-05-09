module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          contexts: './src/contexts',
          data_models: './src/data_models',
          hooks: './src/hooks',
          locales: './src/locales',
          navigation: './src/navigations',
          screens: './src/screens',
          styles: './src/styles',
          utils: './src/utils',
          store: './src/store',
          custom_modules: './src/custom_modules',
        },
      },
    ],
    'react-native-reanimated/plugin',
    // ['transform-remove-console', { exclude: ['error', 'warn'] }]
  ],
};
