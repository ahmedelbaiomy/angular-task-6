import { Component} from '@angular/core';
import { ActiveUsersService } from './services/active-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private ActiveUsers:ActiveUsersService){}
  Users:any=[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Users=this.ActiveUsers.Users;
  }

}
