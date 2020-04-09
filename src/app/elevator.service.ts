import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { range, Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class ElevatorService {
  baseUrl = 'http://localhost:8081/rest/v1/';
  requestElevator = 'requestElevator/';
  requestInsideElevator = 'requestInsideElevator/';
  url: any;

  constructor(private http: Http) {

  }
  requestInsideElevators(elevatorId: number, floor: number) {
    this.url = this.baseUrl + this.requestInsideElevator + elevatorId + '/' + floor;
    return this.http.get(this.url).pipe
    (map(res => res.json()), catchError(this.handleError));
  }

  requestElevators(elevatorId: number, direction: String) {
    this.url = this.baseUrl + this.requestElevator + elevatorId + '/' + direction;
    return this.http.get(this.url).pipe
    (map(res => res.json()), catchError(this.handleError));
  }

  public handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
