import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';


@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
        ListaDeAlunosComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
