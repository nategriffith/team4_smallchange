import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { FooterBarComponent } from 'src/app/molecules/footer-bar/footer-bar.component';
import { ParagraphTextComponent } from 'src/app/atoms/paragraph-text/paragraph-text.component';

export default {
  title: 'Module 1: Foundations/Section 2: Molecules/Footer Bar',
  component: FooterBarComponent,
  decorators: [
    // This moduleMetadata({...}) config is like the @NgModule({...}) config you would see in a pure-Angular project.
    // Each story in Storybook is a little mini-application, and so each story's moduleMetadata needs to be custom-defined.
    moduleMetadata({
      imports: [
        CommonModule, // Angular's CommonModule includes the common directives and pipes used in templating.
      ],
      declarations: [
        // As per the Module 1 Component Tree Diagram, this component needs to know about the following Atoms:
        ParagraphTextComponent,
      ],
      providers: [
        // We are not using Angular Services here in SmallChange, so this array remains empty.
      ]
    })
  ]
} as Meta;

const Template: Story<FooterBarComponent> = (args: FooterBarComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Component output';