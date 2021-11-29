import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Quote } from './quote.model';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post<any>(`${this.baseUrl}user-login.php`,{'email':email,'password':password})
  }

  signUp(user:User){
    return this.http.post<any>(`${this.baseUrl}user-registration.php`,user)
  }

  checkPassword(userID:string,password:string){
    return this.http.post<any>(`${this.baseUrl}user/check-password.php`,{"userID":userID,"password":password});
  }

  changePassword(userID:string,password:string){
    return this.http.post<any>(`${this.baseUrl}user/change-password.php`,{"userID":userID,"password":password});
  }

  getUser(id:string){
    return this.http.get<User>(`${this.baseUrl}user/get-user.php?id=${id}`);
  }

  updateUser(user:User){
    return this.http.post<any>(`${this.baseUrl}user/update-user.php`,user);
  }

  addQuote(quote:Quote){
    return this.http.post<any>(`${this.baseUrl}user/get-quote.php`,quote);
  }
  
  addTicket(ticket:Ticket){
    return this.http.post<any>(`${this.baseUrl}user/create-ticket.php`,ticket);
  }

  getUserTickets(userID:string){
    return this.http.get<Ticket[]>(`${this.baseUrl}user/get-tickets.php?id=${userID}`)
  }
  

}
