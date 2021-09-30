import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:9090/bus" ;
   }
   public addBus(bus: Bus): Observable<Bus>{
     return this.http.post<Bus>(this.url, bus) ;
   }
   public updateBus(bus: Bus): Observable<Bus>{
    return this.http.post<Bus>(this.url, bus) ;
  }
  public deleteBus(busId: number): Observable<any> {
   return this.http.delete(this.url + "/busId/" + busId) ;
  }
  public getAllBuses(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url+ "es") ;
  }
  public getBusBybusId(busId: number): Observable<Bus> {
    return this.http.get<Bus>(this.url + "/busId/" + busId);
  }
  public getBusesBybusName(busName:string): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url+ "es/busName/"+ busName) ;
  }
  public getBusesBybusSource(busSource:string): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url+ "es/busSource/"+busSource) ;
  }
  public getBusesBybusType(busType:string): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url+ "es/busType/"+busType) ;
  }
}
