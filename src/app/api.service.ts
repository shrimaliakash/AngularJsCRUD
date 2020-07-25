import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	PHP_API_SERVER = "http://localhost:3001";
	isbn = '';
	httpHeaders = new HttpHeaders({
		'Content-Type' : 'application/json',
		'Cache-Control': 'no-cache',
		'Access-Control-Allow-Origin': '*'
	});

	options = {
		headers: this.httpHeaders
	};

	constructor(private httpClient: HttpClient) { }
	
	updateBook(isbn: string, title: string, author: string, publish_date: string, publisher: string, numOfPages: string) {
		var id = localStorage.getItem('id');
		return this.httpClient.post(`${this.PHP_API_SERVER}/book/${id}`,{isbn,title, author,publish_date,publisher,numOfPages}, this.options)
			.pipe(map((response: any) =>
				response
		));
	}
}
