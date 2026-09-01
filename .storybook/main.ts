const config = {
  stories: ['../src/packages/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  }
};

export default config;
