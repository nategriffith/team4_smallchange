import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>SmallChange | Leap</h1>
    <h4>Angular project is running (without Storybook!)</h4>
    <p>
      You got to this page, because you ran the 'ng serve' command to launch this project.
      Stop your local server and run 'npm run storybook' instead.
    </p>
  `,
})
export class AppComponent {
}
