
import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { User } from "src/app/models/user";
import { BookService } from "src/app/services/book.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-book-shelf",
    templateUrl: "./bookshelf.component.html",
    styleUrls: ["./bookshelf.component.css"]
})
export default class BookShelfComponent implements OnInit {



    constructor(private readonly bookService: BookService, private readonly userService: UserService) {

    }

    books?: Book[] = []

    ngOnInit(): void {
        // fetch the books
        this.bookService.GetBooks()
            .subscribe({
                next: booksData => this.books = booksData
            })

    }

    handleBookSelected() {
        console.log("your child has needs")
    }

    get user() :User{
        return this.userService.user
    }


}