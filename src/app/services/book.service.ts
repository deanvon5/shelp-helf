
import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
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

    // get book
    public SwitchMapExample(): void {

        this.http.get<any>(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=1-6`)
            .pipe(
                switchMap((jokeData) => {
                    return this.http.get<Book>(`https://thoughtful-vagabond-fibre.glitch.me/books/${jokeData.id}`)
                })
            )
            .subscribe({
                next: (book: Book) => {
                    console.log(book.title)
                }
            })

    }


}