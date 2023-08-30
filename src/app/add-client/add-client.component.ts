import { Component } from '@angular/core';
import { ClientService } from '../app.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cm-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
 pageTitle = "Create Client";
 message:string='';
 errorMessage: string = '';
 sub!: Subscription;
  NAME: string = '';
  Company: string = '';
    EMAIL: string = '';
    address: string = '';
    clientUrl = 'http://localhost:3005';

    constructor(private clientService: ClientService) {}
    // constructor(private http: HttpClient) {}
    
 addClient(){
  const client={
    NAME:this.NAME,
    Company:this.Company,
    EMAIL:this.EMAIL,
    address:this.address
  };
  
  // this.sub = this.http.post(`${this.clientUrl}/addClients`, client).subscribe(
  this.sub = this.clientService.addClients(client).subscribe(
    (response) => {
      console.log('Response:', response);
    },
    (error) => {
      console.error('Error:', error);
    }
  );
 }
}
