
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class BookService {




    constructor(private readonly http: HttpClient) {


    }

    // get books
    public GetBooks(): Observable<Book[]> {

        return this.http.get<Book[]>('https://thoughtful-vagabond-fibre.glitch.me/books')

    }

    // get book
    public GetBookById(bookId: number): Observable<Book> {

        return this.http.get<Book>(`https://thoughtful-vagabond-fibre.glitch.me/books/${bookId}`)

    }


}