import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { ApiService } from  '../api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

	constructor(public apiService: ApiService, public router: Router, public formBuilder: FormBuilder, public service: NotificationsService) { }

	addForm:FormGroup;
	updateForm:FormGroup;
	isSubmitted = false;
	isbn = '';
	title = '';
	author = '';
	publish_date = '';
	publisher = '';
	numOfPages = '';
	ngOnInit() {
		this.addForm  =  new FormGroup({
			isbn:  new FormControl(''),
			title:  new FormControl(''),
			author:  new FormControl(''),
			publish_date:  new FormControl(''),
			publisher:  new FormControl(''),
			numOfPages:  new FormControl('')
		});

		this.updateForm  =  new FormGroup({
			id:  new FormControl(''),
			isbn:  new FormControl(''),
			title:  new FormControl(''),
			author:  new FormControl(''),
			publish_date:  new FormControl(''),
			publisher:  new FormControl(''),
			numOfPages:  new FormControl('')
		});
	}

	updateBook() {
		if(this.updateForm.status == 'INVALID'){
		} else {
			this.isSubmitted = true;
			this.isbn = this.updateForm.controls.isbn.value;
			this.title = this.updateForm.controls.title.value;
			this.author = this.updateForm.controls.author.value;
			this.publish_date = this.updateForm.controls.publish_date.value;
			this.publisher = this.updateForm.controls.publisher.value;
			this.numOfPages = this.updateForm.controls.numOfPages.value;
			this.apiService.updateBook(this.isbn, this.title, this.author, this.publish_date, this.publisher, this.numOfPages).subscribe(
				(res) => this.service.success('Success', res.message, {
					position: ["top", "left"],
					timeOut: 500,
					animate: 'fade',
					showProgressBar: true
				}, this.router.navigateByUrl('/book')),
				(err) => this.service.error('Error', err.error.message, {
					position: ["top", "left"],
					timeOut: 500,
					animate: 'fade',
					showProgressBar: true
				}, this.router.navigateByUrl('/book'))
			);
		}
	}

	addBookModelClose() {
		alert('sd');
	}
}