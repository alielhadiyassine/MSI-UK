import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MSIUKAPIService } from '../msi-uk-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:MSIUKAPIService) { }
  @Input() admin:any;
  username:string="";
  password:string="";
  ngOnInit(): void {
    this.username = this.admin.username;
    this.password = this.admin.password;
  }

  getAdmin(){
      this.service.getAdmin(this.username).subscribe(res=>{
        if(res.password == this.password){
          var closeModalBtn = document.getElementById('admin-login-modal-close');
          if(closeModalBtn){
            closeModalBtn.click();
          }
          var Panel = document.getElementById("Panel");
          var btn1 = document.getElementById("btn1");
          var btn2 = document.getElementById("btn2");
          var btn3 = document.getElementById("btn3");
            if(Panel&&btn1 && btn2 && btn3){
              Panel.style.display="block";
              btn1.style.display="none";
              btn2.style.display="none";
              btn3.style.display="none";
            }

      }
      else{
        var failed = document.getElementById("admin-login-failed-alert");
        if(failed){
          failed.style.display="block";
        }
      }
    });
      
    }

}
