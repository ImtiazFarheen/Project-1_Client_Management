import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientService } from '../app.service';

@Component({
  selector: 'cm-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  
  pageTitle = "Meeting Schedule List";
  Topic:string="";
  People:number=0;
  Date:string='';
  Time:string='';
  message:string='';

  clientMeetings: any = [];
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchMeetings();
  }

  fetchMeetings() {
    this.sub = this.clientService.getSchedules().subscribe({
      next: clientMeetings => {
        this.clientMeetings = clientMeetings;
      },
      error: err => this.errorMessage = err
    });
  }

  deleteSchedule(){
    
  }
}
