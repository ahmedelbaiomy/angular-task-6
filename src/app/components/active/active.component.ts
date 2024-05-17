import { Component, Input,OnInit } from '@angular/core';
import { ActiveUsersService } from '../../services/active-users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent{
  constructor(private ActiveUsers:ActiveUsersService) {}
  @Input() Users:any;


  setInActive(id:number){
    this.ActiveUsers.toggleActive(id);
  }
}
