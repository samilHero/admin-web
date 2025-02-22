import { StorybookConfig } from '@storybook/nextjs';

/** @type {StorybookConfig} */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/nextjs',
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (!config.module || !config.module.rules) {
      return config;
    }
    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === '...') {
          return rule;
        }

        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
    
    return config;
  }
};

export default config;
