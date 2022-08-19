import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MSIUKAPIService } from './msi-uk-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private service:MSIUKAPIService) { }
  usersList$!:Observable<any[]>;
  ngOnInit(): void {
    this.usersList$ = this.service.getUsersList();
  }
  modalClose(){
    this.usersList$ = this.service.getUsersList();
  }
  approveUser(item:any){
    item.approved = true;
    this.service.updateUser(item.username,item).subscribe(res=>{
      this.usersList$ = this.service.getUsersList();
    });
    }

  deleteUser(item:any){
    this.service.deleteUser(item.username).subscribe(res=>{
      this.usersList$ = this.service.getUsersList();
    });
  }

  viewAppr(){
    var el = document.getElementById("btn-unappr");
    var el2 = document.getElementById("approved");
    var el3 = document.getElementById("unapproved");
    var el4 = document.getElementById("btn-appr");
    if(el&& el2 && el3 && el4)
    {el.style.display="inline-block";
    el2.style.display="block";
    el3.style.display="none";
    el4.style.display="none";}
  }

  viewUnAppr(){
    var el = document.getElementById("btn-unappr");
    var el2 = document.getElementById("approved");
    var el3 = document.getElementById("unapproved");
    var el4 = document.getElementById("btn-appr");
    if(el&& el2 && el3&& el4)
    {
      el.style.display="none";
      el2.style.display="none";
      el3.style.display="block";
      el4.style.display="inline-block";}
  }
  Home(){
    window.location.reload();
  }

}
