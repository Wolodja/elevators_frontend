import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ElevatorService } from '../elevator.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  noOfElevators: number[];
  noOfFloors: number[];
  selectedElevator: number;
  selectedFloorInElevator: number;
  requestOnFloor: number;
  responseRec: any;
  errorMsg: any;
  

  constructor(
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private elevatorService: ElevatorService
  ) { }

  ngOnInit(): void {
    let elevatorAmount = +this.route.snapshot.paramMap.get('elevatorAmount');
    this.noOfElevators = [...Array(elevatorAmount).keys()].map(elevatorNumber => elevatorNumber + 1);
    
    let floorsAmount = +this.route.snapshot.paramMap.get('floorsAmount');
    this.noOfFloors = [...Array(floorsAmount + 1).keys()];

    this.selectedElevator = this.noOfElevators[0];
    this.selectedFloorInElevator = this.noOfFloors[0];
    this.requestOnFloor = this.noOfFloors[0];
  }

  requestInsideElevator() {
    
    if (this.selectedElevator == null || this.selectedFloorInElevator == null) {
      alert('Select Elevator / Floor value cannot be blank');
    } else {
      this.elevatorService.requestInsideElevators(this.selectedElevator, this.selectedFloorInElevator).subscribe(
        (data) => { this.responseRec = data, alert(data); },
        error => this.errorMsg = error);
      this.openSnackBar('Inside Elevator Request Posted', 'OK');
    }
  }

  requestElevator(direction: string) {
    if (this.requestOnFloor == null) {
      alert('Select Floor value cannot be blank');
    }  else {
      this.elevatorService.requestElevators(this.requestOnFloor, direction).subscribe(
        (data) => { this.responseRec = data, alert(data); },
        error => this.errorMsg = error);
      this.openSnackBar('Request Posted', 'OK');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['red-snackbar']
    });
  }

}
