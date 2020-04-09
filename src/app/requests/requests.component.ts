import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  noOfElevators: number[] = [1, 2, 3, 4, 5, 6];
  noOfFloors: number[]= [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  title = 'app';
  selElevator: number;
  selFloor: number;
  responseRec: any;
  errorMsg: any;
  tofloor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
