import { Component, OnInit } from '@angular/core';

export interface Designation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-regular-form',
  templateUrl: './regular-form.component.html',
  styleUrls: ['./regular-form.component.scss']
})
export class RegularFormComponent implements OnInit {

  designations: Designation[] = [
    { value: "junior software engineer", viewValue: "Junior Software Engineer" },
    { value: "software engineer", viewValue: "Software Engineer" },
    { value: "senior software engineer", viewValue: "Senior Software Engineer" },
    { value: "system analyst", viewValue: "System Analyst" },
    { value: "project manager", viewValue: "Project Manager" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
