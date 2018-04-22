import { Component } from '@angular/core';

@Component({
    // not needed when routing to the page.
    // selector: 'app-home',
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
