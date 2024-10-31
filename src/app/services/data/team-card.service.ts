import { Injectable } from '@angular/core';
import { TeamCard } from 'src/app/classes/team-card';

@Injectable({
  providedIn: 'root'
})
export class TeamCardService {
  private _teamCards: TeamCard[];

  constructor(){
    this._teamCards = [
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation"),
      new TeamCard("/assets/img/team-1.jpg", "Full Name", "Designation")
    ];
  }

  get TeamCards(){
    return this._teamCards;
  }
}
