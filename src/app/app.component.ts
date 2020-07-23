import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'BookStore';

	constructor(private service: NotificationsService) {
	}

	onSuccess(message) {
		this.service.success('Success', message, {
			timeOut: 1000,
			animate: 'fade',
			showProgressBar: true
		});
	}

	onError(message) {
		this.service.error('Error', message, {
			timeOut: 1000,
			animate: 'fade',
			showProgressBar: true
		});
	}
}
