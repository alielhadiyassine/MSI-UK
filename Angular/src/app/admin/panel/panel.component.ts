import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MSIUKAPIService } from 'src/app/msi-uk-api.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  usersList$!:Observable<any[]>;

  constructor(private service:MSIUKAPIService) { }

  ngOnInit(): void {
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
    if(el?.style.display==="none" && el2?.style.display==="none" && el3?.style.display==="block" && el4?.style.display=="block")
    {el.style.display="block";
    el2.style.display="block";
    el3.style.display="none";
    el4.style.display="none";}
  }

  viewUnAppr(){
    var el = document.getElementById("btn-unappr");
    var el2 = document.getElementById("approved");
    var el3 = document.getElementById("unapproved");
    var el4 = document.getElementById("btn-appr");
    if(el?.style.display=="block" && el2?.style.display=="block" && el3?.style.display=="none" && el4?.style.display=="none")
    {
      el.style.display="none";
      el2.style.display="none";
      el3.style.display="block";
      el4.style.display="block";}
  }

  }
