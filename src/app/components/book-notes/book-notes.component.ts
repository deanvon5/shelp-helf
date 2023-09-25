import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.css']
})
export class BookNotesComponent implements OnInit {

  currentBook?: Book

  constructor(private readonly bookService: BookService,private readonly userService:UserService) { }

  ngOnInit(): void {
    this.bookService.GetBookById(1)
      .subscribe({
        next: book => this.currentBook = book
      })

  }

  get user() :User{
    return this.userService.user
}



}
