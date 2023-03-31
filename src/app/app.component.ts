import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ariane-admin-frontend';

  blockedDocument: boolean = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth <= 1366) {
      this.blockedDocument = true;
    } else {
      this.blockedDocument = false;
    }
  }
}
