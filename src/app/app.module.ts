import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component'

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ReactiveFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
