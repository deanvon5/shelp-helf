import { NgModule } from "@angular/core";
import { LoginPage } from "./pages/login/login.page";
import { ShelfPage } from "./pages/shelf/shelf.page";
import { NotesPage } from "./pages/notes/notes.page";
import { Routes,RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";


const routes: Routes = [
    {
        path: "", component: LoginPage,canActivate:[LoginGuard]
    },
    {
        path:"shelf",component:ShelfPage,canActivate:[AuthGuard]
    },
    {
        path:"notes/:bookIdParam",component:NotesPage,canActivate:[AuthGuard]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting {

}