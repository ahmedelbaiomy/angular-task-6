import { Component, Input } from '@angular/core';
import { ActiveUsersService } from '../../services/active-users.service';

@Component({
  selector: 'app-in-active',
  templateUrl: './in-active.component.html',
  styleUrl: './in-active.component.scss'
})
export class InActiveComponent {
  @Input() Users:any;

  constructor(private inActiveUsers:ActiveUsersService){}
  setActive(id:number){
    this.inActiveUsers.toggleActive(id)
  }
}
