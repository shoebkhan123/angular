import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  



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
