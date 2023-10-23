import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent {
  titlee='Akash santhosh'

  datee=new Date();
  value='';
func()
{
  this.titlee="new input"
  console.log(this.value);
  this.value='default'
}
}
