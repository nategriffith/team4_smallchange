import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { TextBoxPasswordComponent } from 'src/app/atoms/text-box-password/text-box-password.component';

export default {
  title: 'Module 1: Foundations/Section 1: Atoms/Text Box (Password)',
  component: TextBoxPasswordComponent,
  decorators: [
    // This moduleMetadata({...}) config is like the @NgModule({...}) config you would see in a pure-Angular project.
    // Each story in Storybook is a little mini-application, and so each story's moduleMetadata needs to be custom-defined.
    moduleMetadata({
      imports: [
        CommonModule, // Angular's CommonModule includes the common directives and pipes used in templating.
      ],
      declarations: [
        // Atoms generally do not need to know about other components, so this array remains empty.
      ],
      providers: [
        // We are not using Angular Services here in SmallChange, so this array remains empty.
      ]
    })
  ]
} as Meta;

const Template: Story<TextBoxPasswordComponent> = (args: TextBoxPasswordComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Component output';