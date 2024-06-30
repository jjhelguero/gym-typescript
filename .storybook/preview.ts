import type { Preview } from '@storybook/react';
import '../tailwind.config.js';
import { withThemeByClassName } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
