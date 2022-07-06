import { Story, Meta } from '@storybook/angular/types-6-0';
import { BadStylingComponent } from './bad-styling/bad-styling.component';

export default {
  title: 'Guides and Resources/HTML and CSS/Bad CSS Styling',
  component: BadStylingComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BadStylingComponent> = (args: BadStylingComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Example';
