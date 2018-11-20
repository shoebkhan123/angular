import { FormControl, Validators } from '@angular/forms';
import { TestService } from './../service/test.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //1 we are calling service by using depency injection
  //1 i need TestService
  //2 private src : TestService;
  name = new FormControl('', [Validators.required]);

  userName:string = "";
  res:any;
  errMsg: string = "";
  showErrr:boolean = false;
  show: boolean = false;
  getErrorMessageName() {
    return this.name.hasError('required') ? 'User name is required' :
            '';
  }
  constructor(private ser: TestService,private http: HttpClient) { 
    //1 let svc = new TestService();
    //1 svc.printToConsole('test service component');
    //2 this.src = src  
    // 2 = constrctor(private ser: TestService)
    this.ser.printToConsole('Got the service');
  }

  ngOnInit() {

   let obs =  this.http.get('https://api.github.com/users/shoebkhan123');
  //  obs.subscribe((res) => console.log(res));


  }
  search(){
    if(this.userName === ''){
      this.showErrr = true;
      // this.errMsg = "User name can not be empty.";

    }
   else{
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((res) => {
     this.show = true;

      this.res = res;
      console.log(res);
    })
  }
   }

}
