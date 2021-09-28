import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:9090/customer" ;
   }
   public addCustomer(customer: Customer): Observable<Customer>{
     return this.http.post<Customer>(this.url, customer) ;
   }
   public updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.url, customer) ;
  }
  public deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(this.url+"/{customerId}") ;
   }
  public getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url+ "s") ;
  }
  public getCustomerBycustomerId(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + "/customerId/" + customerId);
  }
  public getCustomersBycustomerName(customerName:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url+ "s") ;
  }
  public getCustomersBycustomerEmailId(customerEmailId:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url+ "s") ;
  }
}