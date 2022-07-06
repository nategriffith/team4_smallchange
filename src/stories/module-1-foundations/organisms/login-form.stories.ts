import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from 'src/app/organisms/login-form/login-form.component';
import { FormLabelComponent } from 'src/app/atoms/form-label/form-label.component';
import { TextBoxStandardComponent } from 'src/app/atoms/text-box-standard/text-box-standard.component';
import { TextBoxPasswordComponent } from 'src/app/atoms/text-box-password/text-box-password.component';
import { LinkComponent } from 'src/app/atoms/link/link.component';
import { ButtonComponent } from 'src/app/atoms/button/button.component';
import { UsernameFormControlComponent } from 'src/app/molecules/username-form-control/username-form-control.component';
import { PasswordFormControlComponent } from 'src/app/molecules/password-form-control/password-form-control.component';

export default {
  title: 'Module 1: Foundations/Section 3: Organisms/Login Form',
  component: LoginFormComponent,
  decorators: [
    // This moduleMetadata({...}) config is like the @NgModule({...}) config you would see in a pure-Angular project.
    // Each story in Storybook is a little mini-application, and so each story's moduleMetadata needs to be custom-defined.
    moduleMetadata({
      imports: [
        CommonModule, // Angular's CommonModule includes the common directives and pipes used in templating.
      ],
      declarations: [
        // As per the Module 1 Component Tree Diagram, this component needs to know about the following Atoms...:
        FormLabelComponent,
        TextBoxStandardComponent,
        TextBoxPasswordComponent,
        LinkComponent,
        ButtonComponent,
        // ...and the following Molecules:
        UsernameFormControlComponent,
        PasswordFormControlComponent,
      ],
      providers: [
        // We are not using Angular Services here in SmallChange, so this array remains empty.
      ]
    })
  ]
} as Meta;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Component output';