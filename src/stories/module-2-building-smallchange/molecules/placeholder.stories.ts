import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { ExamplePlaceholderComponent } from 'src/app/_example/placeholder/placeholder.component';
import { ExamplePlaceholderComponent as ExampleChildPlaceholderComponent } from 'src/app/_example/placeholder/placeholder.component';

/**
 * In order to configure your new components to show up in this project, do the folowing:
 *  1) copy this file, and rename it "[component-name].stories.ts" without the [] characters, of course.
 *  2) search through this file for the TODOs, and follow the instructions.
 */

export default {
  // TODO - replace the 'Placeholder' word with the readable name of your new component
  title: "Module 2: Building SmallChange/Molecules/Placeholder",
  // TODO - replace the 'ExamplePlaceholderComponent' word with the class name of
  //        your new component, and update the import at the top of the file.
  component: ExamplePlaceholderComponent,
  decorators: [
    // This moduleMetadata({...}) config is like the @NgModule({...}) config you would see in a pure-Angular project.
    // Each story in Storybook is a little mini-application, and so each story's moduleMetadata needs to be custom-defined.
    moduleMetadata({
      imports: [
        CommonModule, // Angular's CommonModule includes the common directives and pipes used in templating.
      ],
      declarations: [
        // Molecules often need to know about other atoms, so add the components this one should know about here:
        ExampleChildPlaceholderComponent
      ],
      providers: [
        // We are not using Angular Services here in SmallChange, so this array remains empty.
      ]
    })
  ]
} as Meta;

// TODO - replace the 'ExamplePlaceholderComponent' word with the class name of your new component
const Template: Story<ExamplePlaceholderComponent> = (args: ExamplePlaceholderComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Component output';
