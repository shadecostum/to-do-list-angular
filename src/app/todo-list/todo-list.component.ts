import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

 
  taskSend='';
  listTaskArray:string[]=[];


  submitData()
  {
    
    if(this.taskSend.trim()!=='')
    {
      this.listTaskArray.push(this.taskSend)
    }

    this.taskSend='';
  }

  deleteData(index:number)
  {
    console.log(this.listTaskArray);
    this.listTaskArray.splice(index,1)
    
  }

}
