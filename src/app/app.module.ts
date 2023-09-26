import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import BookShelfComponent from './components/book-shelf/bookshelf.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPage } from './pages/login/login.page';
import { ShelfPage } from './pages/shelf/shelf.page';
import { NotesPage } from './pages/notes/notes.page';
import { AppRouting } from './app-routing.module';
import { BookNotesComponent } from './components/book-notes/book-notes.component';
import { BookItemComponent } from './components/book-item/book-item.component';

// [x]-Service (books and users)
// [x]-Lifted state
// [x]-Guarding
// []-Url params
// []-Pipe and Rxjs (switch map)


@NgModule({
  declarations: [
    AppComponent,
    BookShelfComponent,
    LoginFormComponent,
    LoginPage,
    ShelfPage,
    NotesPage,
    BookNotesComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
