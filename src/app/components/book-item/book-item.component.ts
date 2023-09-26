import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor() { }

  @Input() book?:Book
  @Output() bookSelected: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
  }

  handleBookSelected(){
    this.bookSelected.emit(this.book?.id)
  }

}
