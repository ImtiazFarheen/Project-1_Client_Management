import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cm-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent {

  pageTitle = "Create a meeting schedule";
  Topic:string="";
  People:number=0;
  Date:string='';
  Time:string='';
  message:string='';

  clientMeetings: any = [];
  errorMessage: string = '';
  sub!: Subscription;

  addSchedule(){
    
  }
}
