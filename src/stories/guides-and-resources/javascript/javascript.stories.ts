import { Story, Meta } from '@storybook/angular/types-6-0';
import { JavascriptComponent } from 'src/stories/guides-and-resources/javascript/javascript/javascript.component';

export default {
  title: 'Guides and Resources/Javascript/Javascript Example',
  component: JavascriptComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<JavascriptComponent> = (args: JavascriptComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Example';