import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService) {
    this.userService.getUser().subscribe(
      (res:User)=>{
        this.user = res;
      }
    );
   }

  ngOnInit() {
  }

}
