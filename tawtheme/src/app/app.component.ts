import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Wordpress Template', url: '/folder/Outbox', icon: 'paper-plane', },
    { title: 'Project', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Support', url: '/folder/Archived', icon: 'archive' },
    { title: 'My Account', url: '/myaccount', icon: 'trash' },
    { title: 'Notification', url: '/notification', icon: 'warning' },
    { title: 'Login', url: '/login', icon: 'warning' }
    // { title: 'Forgot Password', url: '/folder/Spam', icon: 'warning' },
    // { title: 'Reset Password', url: '/folder/Spam', icon: 'warning' }
  ];
  constructor() {}
}
