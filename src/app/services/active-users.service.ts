import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {


  constructor() { }
  Users=[{
    'name':'Baiomy',
    'status':'active'
  },
  {
    'name':'Max',
    'status':'inActive'
  },
  {
    'name':'Anna',
    'status':'inActive'
  },
  {
    'name':'Mohamed',
    'status':'active'
  },
  {
    'name':'Ahmed',
    'status':'active'
  },
  {
    'name':'Mohamed',
    'status':'inActive'
  },
];

  toggleActive(id:number){
    this.Users[id].status= this.Users[id].status === 'active'?'inActive':'active' ;
  }

  
  // getActive(){
  //   return this.Users.filter(users => users.status === 'active');
  // }
  // getInActive(){
  //   return this.Users.filter(users => users.status === 'active');
  // }
  // getUsers() {
  //   return this.Users;
  // }


}
