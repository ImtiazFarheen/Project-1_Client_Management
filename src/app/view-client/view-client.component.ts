import { Component, OnInit } from '@angular/core';
import { IClient } from './view-client';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cm-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit{
  
  pageTitle: string = "Create Client";
  // clients: IClient[] = [];
  clients: any = [];
  filteredClients: any=[];
  // filteredClients: IClient[] =[];
  message:string='';
  errorMessage: string = '';
  sub!: Subscription;
  private _listFilter : string = '';
  // constructor(private http: HttpClient) { }

  constructor(private clientService: ClientService) {}

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    console.log("in setter" , value);
    this.filteredClients = this.performFilter(value);
  }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    // this.http.get('http://localhost:3005/getClients').subscribe((response)=>
    // {
    //   this.clients=response;
    //   this.filteredClients = response;
    // },
    // (error)=>{console.error('Error fetching the client',error);}
    // );

    this.sub = this.clientService.getClients().subscribe({
      next: clients => {
        this.clients = clients;
        this.filteredClients = this.clients;
      },
      error: err => this.errorMessage = err
    });
  }


  

    performFilter(filterBy: string) : IClient[]{
      filterBy = filterBy.toLowerCase();
      return this.clients.filter((client : IClient)=>
      client.NAME.toLowerCase().includes(filterBy));
    }

}
