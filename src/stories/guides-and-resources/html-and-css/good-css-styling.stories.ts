import { Story, Meta } from '@storybook/angular/types-6-0';
import { GoodStylingComponent } from './good-styling/good-styling.component';

export default {
  title: 'Guides and Resources/HTML and CSS/Good CSS Styling',
  component: GoodStylingComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<GoodStylingComponent> = (args: GoodStylingComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Example';