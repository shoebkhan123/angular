import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // showFiller = false;
  



form = new FormGroup({
  name : new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.email]),

})






  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessageName() {
    return this.name.hasError('required') ? 'Name is required' :
            '';
  }
  constructor() { }



  ngOnInit() {
  }

  send(){
    
    alert('you cliked me');
  }

}
