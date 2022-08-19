import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MSIUKAPIService } from '../msi-uk-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersList$!:Observable<any[]>;
  constructor(private service:MSIUKAPIService) { }
  @Input() user:any;
  username:string="";
  password:string="";
  ngOnInit(): void {
    this.username = this.user.username;
    this.password = this.user.password;
    this.usersList$ = this.service.getUsersList();
  }

  getUser(){
      this.service.getUserbyID(this.username).subscribe(res=>{
        if(res.password == this.password && res.approved == true){
          var closeModalBtn = document.getElementById('login-modal-close');
          if(closeModalBtn){
            closeModalBtn.click();
          }
          var showLogSuccess = document.getElementById('login-success-alert');
          var showWelcome = document.getElementById('Welcome');
          var btn1 = document.getElementById("btn1");
          var btn2 = document.getElementById("btn2");
          var btn3 = document.getElementById("btn3");
            if(showLogSuccess && showWelcome && btn1 && btn2 && btn3){
              showLogSuccess.style.display = "block";
              showWelcome.style.display = "block";
              btn1.style.display="none";
              btn2.style.display="none";
              btn3.style.display="none";
            }

          setTimeout(function(){
            if(showLogSuccess){
              showLogSuccess.style.display = "none";
            }
          },4000)
      }
      else{
        var failed = document.getElementById("login-failed-alert");
        if(failed){
          failed.style.display="block";
        }
      }
    });
      
    }

}
