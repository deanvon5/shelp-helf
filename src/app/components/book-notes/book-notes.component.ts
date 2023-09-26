import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private readonly bookService: BookService,private readonly userService:UserService, private readonly activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let bookId = Number(this.activeRoute.snapshot.paramMap.get('bookIdParam'))

    this.bookService.GetBookById(bookId)
      .subscribe({
        next: book => this.currentBook = book
      })

  }

  exampleSwitch(){
    this.bookService.SwitchMapExample()
  }

  get user() :User{
    return this.userService.user
}



}
