import { Component, OnInit } from '@angular/core';
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

	createBook() {
		if(this.addForm.status == 'INVALID'){
		} else {
			this.isSubmitted = true;
			this.isbn = this.addForm.controls.isbn.value;
			this.title = this.addForm.controls.title.value;
			this.author = this.addForm.controls.author.value;
			this.publish_date = this.addForm.controls.publish_date.value;
			this.publisher = this.addForm.controls.publisher.value;
			this.numOfPages = this.addForm.controls.numOfPages.value;
			this.apiService.createBook(this.isbn, this.title, this.author, this.publish_date, this.publisher, this.numOfPages).subscribe(
				(res) => res.success == false ? this.service.error('Error', res.message, {
					position: ["top", "left"],
					timeOut: 2000,
					animate: 'fade',
					showProgressBar: true
				}) 
				: this.service.error('Success', res.message, {
					position: ["top", "left"],
					timeOut: 2000,
					animate: 'fade',
					showProgressBar: true
				}),
				(err) => this.service.error('Error', err.error.message, {
					position: ["top", "left"],
					timeOut: 2000,
					animate: 'fade',
					showProgressBar: true
				})
			);
		}
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
				(res) => this.router.navigate(['/book']),
				(err) => this.service.error('Error', err.error.message, {
					position: ["top", "left"],
					timeOut: 2000,
					animate: 'fade',
					showProgressBar: true
				})
			);
		}
	}
}
