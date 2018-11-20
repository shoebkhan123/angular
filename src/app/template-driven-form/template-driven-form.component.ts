import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  topic = ['angular', 'Node', 'Mongo', 'Express'];

  userModel = new User('', 'shoeb.0103@gmail.com', 1234567890,'angular', 'morning', true) ;
  constructor() { }

  ngOnInit() {
  }
  send(){
    alert('data sent...');
  }

}
