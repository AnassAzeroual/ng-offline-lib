import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'offlineDemo';
  status:boolean = true
  checkNetworkStatus(e:boolean)
  {
    this.status = e;
  }
}
