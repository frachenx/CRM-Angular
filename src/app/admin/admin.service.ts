import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Login } from './login.model';
import { User } from '../user/user.model';
import { Quote } from '../user/quote.model';
import { Ticket } from '../user/ticket.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(adminName:string,adminPassword:string){
    return this.http.post<any>(`${this.baseUrl}admin-login.php`,{"name":adminName,"password":adminPassword});
  }

  visitors(){
    return this.http.get<Login[]>(`${this.baseUrl}admin/logins.php`)
  }

  users(){
    return this.http.get<User[]>(`${this.baseUrl}admin/users.php`)
  }

  quotes(){
    return this.http.get<Quote[]>(`${this.baseUrl}admin/quotes.php`);
  }

  tickets(){
    return this.http.get<Ticket[]>(`${this.baseUrl}admin/tickets.php`);
  }

  checkOldPassword(adminID:string,password:string){
    return this.http.post<any>(`${this.baseUrl}admin/check-password.php`,{"adminID":adminID,"password":password})
  }

  changePassword(adminID:string,password:string){
    return this.http.post<any>(`${this.baseUrl}admin/change-password.php`,{"adminID":adminID,"password":password});
  }

  deleteUser(userID:string){
    return this.http.get<any>(`${this.baseUrl}admin/delete-user.php?id=${userID}`);
  }

  viewTicket(ticketID:string){
    return this.http.get<Ticket>(`${this.baseUrl}admin/view-ticket.php?id=${ticketID}`);
  }

  ticketRemark(ticketID:string,remark:string){
    return this.http.post<any>(`${this.baseUrl}admin/remark-ticket.php`,{"ticketID":ticketID,"remark":remark});
  }

  viewQuote(quoteID:string){
    return this.http.get<Quote>(`${this.baseUrl}admin/view-quote.php?id=${quoteID}`);
  }

  quoteRemark(quoteID:string,remark:string){
    return this.http.post<any>(`${this.baseUrl}admin/remark-quote.php`,{"quoteID":quoteID,"remark":remark});
  }
  
}
