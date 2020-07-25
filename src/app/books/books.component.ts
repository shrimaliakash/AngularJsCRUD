import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

	constructor(public router: Router, public formBuilder: FormBuilder, public service: NotificationsService) { }

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
}