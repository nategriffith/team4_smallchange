import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { LogoComponent } from 'src/app/atoms/logo/logo.component';
import { NavBarLinkComponent } from 'src/app/atoms/nav-bar-link/nav-bar-link.component';
import { HeaderTextComponent } from 'src/app/atoms/header-text/header-text.component';
import { ParagraphTextComponent } from 'src/app/atoms/paragraph-text/paragraph-text.component';
import { FormLabelComponent } from 'src/app/atoms/form-label/form-label.component';
import { TextBoxStandardComponent } from 'src/app/atoms/text-box-standard/text-box-standard.component';
import { TextBoxPasswordComponent } from 'src/app/atoms/text-box-password/text-box-password.component';
import { ButtonComponent } from 'src/app/atoms/button/button.component';
import { LinkComponent } from 'src/app/atoms/link/link.component';
import { HeaderBarComponent } from 'src/app/molecules/header-bar/header-bar.component';
import { NavBarComponent } from 'src/app/molecules/nav-bar/nav-bar.component';
import { PageTitleComponent } from 'src/app/molecules/page-title/page-title.component';
import { FooterBarComponent } from 'src/app/molecules/footer-bar/footer-bar.component';
import { UsernameFormControlComponent } from 'src/app/molecules/username-form-control/username-form-control.component';
import { PasswordFormControlComponent } from 'src/app/molecules/password-form-control/password-form-control.component';
import { LoginFormComponent } from 'src/app/organisms/login-form/login-form.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';

export default {
  title: 'Module 1: Foundations/Section 4: Page/Login Page',
  component: LoginPageComponent,
  decorators: [
    // This moduleMetadata({...}) config is like the @NgModule({...}) config you would see in a pure-Angular project.
    // Each story in Storybook is a little mini-application, and so each story's moduleMetadata needs to be custom-defined.
    moduleMetadata({
      imports: [
        CommonModule, // Angular's CommonModule includes the common directives and pipes used in templating.
      ],
      declarations: [
        // As per the Module 1 Component Tree Diagram, this component needs to know about the following Atoms...:
        LogoComponent,
        NavBarLinkComponent,
        HeaderTextComponent,
        ParagraphTextComponent,
        FormLabelComponent,
        TextBoxStandardComponent,
        TextBoxPasswordComponent,
        ButtonComponent,
        LinkComponent,
        // ... and the following Molecules...:
        HeaderBarComponent,
        NavBarComponent,
        PageTitleComponent,
        FooterBarComponent,
        UsernameFormControlComponent,
        PasswordFormControlComponent,
        // ... and the following Organisms:
        LoginFormComponent,
      ],
      providers: [
        // We are not using Angular Services here in SmallChange, so this array remains empty.
      ]
    })
  ]
} as Meta;

const Template: Story<LoginPageComponent> = (args: LoginPageComponent) => ({
  props: args,
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
DefaultStory.storyName = 'Component output';