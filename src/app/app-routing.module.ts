import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'book'},
  	{ path: 'book', component: BooksComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
