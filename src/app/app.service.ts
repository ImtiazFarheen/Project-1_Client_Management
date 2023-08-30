import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IClient } from "./view-client/view-client";
import { Observable, catchError, tap, throwError } from "rxjs";
import { ISchedule } from "./view-schedule/view-schedule";

@Injectable({
    providedIn: 'root'
})

export class ClientService{

    private clientUrl = 'http://localhost:3005';
    constructor(private http: HttpClient) {}

    getClients(): Observable<IClient[]> {
      const sql='select * from client_details';        
      return this.http.get<IClient[]>(this.clientUrl + '/getClients').pipe(            
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getSchedules(): Observable<ISchedule[]> {
      const sql='select * from meeting_details';        
      return this.http.get<ISchedule[]>(this.clientUrl + '/getSchedules').pipe(            
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    httpOptions = {
      headers: new HttpHeaders({
        'Method':'POST'
        //  'Basic ' + btoa('root:abcdef')
        // Other headers if needed
      })
    };

    addClients(data: any): Observable<any>  {
      const {NAME,Company,EMAIL,address}=data;      
      const sql='insert into client_details values(?,?,?,?)';
      // const sql='insert into client_details values(data.NAME,data.Company,data.EMAIL,data.address)';

      // return this.http.post(`${this.clientUrl}/addClients`, data);
         
      return this.http.post<any>(`${this.clientUrl}/addClients`, data, this.httpOptions).pipe(            
        tap((res:any) => {
          if(res){
            console.error('Error in adding the product',res);
            res.status(204).json({error:'An error occured'});
          }else{
            res.status(200).json({message:'Product added successfully'});
          }

        }),
        catchError(this.handleError)
      );
    }

    deleteSchedule(): Observable<any> {
      const sql='delete from meeting_details where topic=?';        
      return this.http.delete<any>(this.clientUrl + '/deleteSchedules').pipe(            
        tap((data:any) => {
          if(data){
            console.error('Error in deleting the product',data);
            data.status(500).json({error:'An error occured'});
        }else{
          data.status(200).json({message:'Product deleted successfully'});
        }}),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(() => errorMessage);
    }



}