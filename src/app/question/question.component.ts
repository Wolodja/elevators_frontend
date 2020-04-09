import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  numberOfElevators: number;

  numberOfFloors: number;

  showElevatorError: boolean = false;
  showFloorError: boolean = false;

  ngOnInit(): void {
  }

  validateAndProceed(): void {
    if (this.validNumberOfElevators() && this.validNumberOfFloors()) {
      this.router.navigate(['/requests/' + this.numberOfElevators + "/" + this.numberOfFloors]);
    }
  }
  validNumberOfElevators(): boolean {
    if (this.numberOfElevators && this.numberOfElevators >= 0) {
      this.showElevatorError = false;
      return true;
    } else {
      this.showElevatorError = true;
      return false;
    }
  }

  validNumberOfFloors(): boolean {
    if (this.numberOfFloors && this.numberOfFloors >= 0) {
      this.showFloorError = false;
      return true;
    } else {
      this.showFloorError = true;
      return false;
    }
  }

}
