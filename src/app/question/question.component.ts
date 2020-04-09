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

  showError : boolean = false;

  ngOnInit(): void {
  }

  validateAndProceed(): void {
    if (this.numberOfElevators && this.numberOfElevators >= 0) {
      this.router.navigate(['/requests/'+ this.numberOfElevators]);
    } else{
      this.showError = true;
      console.log("Incorrect number of elevators!");
    }
  }

}
