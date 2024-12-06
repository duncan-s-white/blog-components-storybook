import React from "react";
import { Preview } from "@storybook/react";
import '../src/css/tailwind.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { // Adds the dark mode to the Docs Page  (https://github.com/storybookjs/storybook/discussions/28495)
      container: (props: any) => {
        const el = document.querySelector("html");
        const theme =
          props?.context.store.userGlobals.globals.theme === "dark"
            ? themes.dark
            : themes.light;
        el!.dataset["theme"] = props?.context.store.userGlobals.globals.theme;
        const newProps = { ...props, theme };
        return React.createElement(DocsContainer, newProps);
      },
    },
  }
};

export const decorators = [
  // Sets the theme in the preview (https://github.com/storybookjs/storybook/discussions/25183)
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark bg-gray-950 text-white',
    },
    defaultTheme: 'light',
  }),
  // Example decorator, this would be Global can be set per Component / Story
  // (Story) => (
  //   <div className="bg-gray-950">
  //     {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //     <Story />
  //   </div>
  // )
];

export default preview;
