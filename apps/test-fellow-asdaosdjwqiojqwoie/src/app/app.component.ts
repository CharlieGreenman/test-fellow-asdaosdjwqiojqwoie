import { Component } from '@angular/core';

@Component({
  selector: 'test-fellow-asdaosdjwqiojqwoie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-fellow-asdaosdjwqiojqwoie';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
