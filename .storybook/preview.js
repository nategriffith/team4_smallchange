import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: { inlineStories: true },

  options: {
    storySort: {
      order: [
        'Welcome to SmallChange',
        'Definition of Done',

        'Module 1: Foundations', [
          'Module Overview',
          'Section 1: Atoms', [
            'Logo',
            'Nav Bar Link',
            'Header Text',
            'Paragraph Text',
            'Form Label',
            'Text Box (Standard)',
            'Text Box (Password)',
            'Button',
            'Link',
          ],
          'Section 2: Molecules', [
            'Header Bar',
            'Nav Bar',
            'Page Title',
            'Footer Bar',
            'Username Form Control',
            'Password Form Control',
          ],
          'Section 3: Organisms', [
            'Login Form',
          ],
          'Section 4: Completed Page', [
            'Login Page',
          ],
        ],
        "Module 2: Building SmallChange", [
          'Module Overview',
          'Atoms',
          'Molecules',
          'Organisms',
          'Pages',
        ],
        'Guides and Resources', [
          'Angular', ['Resources'],
          'Storybook', ['Features of Storybook', 'Building Out Storybook'],
          'Git', ['Git Cheatsheet'],
          'HTML and CSS', ['Introduction', 'Bad CSS Styling', ['Example'], 'Good CSS Styling', ['Example']],
          'Javascript', ['Introduction', 'Javascript Example', ['Example']],
          'Credits',
        ]
      ]
    }
  },

  previewTabs: {
    canvas: {
      title: 'Component output',
    },
  },
}
