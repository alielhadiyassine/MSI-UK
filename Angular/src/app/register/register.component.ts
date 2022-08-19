import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MSIUKAPIService } from '../msi-uk-api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usersList$!:Observable<any[]>;

  constructor(private service:MSIUKAPIService) { }

  @Input() user:any;
  username:string="";
  password:string="";
  approved:boolean=false;
  firstName:string="";

  ngOnInit(): void {
    this.username = this.user.username;
    this.password = this.user.password;
    this.approved = this.user.approved;
    this.firstName = this.user.firstName;
    this.usersList$ = this.service.getUsersList();
  }



  addUser(){
    var user = {
      username:this.username,
      password:this.password,
      firstName:this.firstName
    }
    this.service.addUser(user).subscribe(res=>{
      var closeModalBtn = document.getElementById('register-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showRegSuccess = document.getElementById('register-success-alert');
      if(showRegSuccess){
        showRegSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showRegSuccess){
          showRegSuccess.style.display = "none";
        }
      },4000)
    })
  }

}
