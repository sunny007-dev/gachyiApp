import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  foods = [
    {value: 'spa-0', viewValue: 'Spanish'},
    {value: 'eng-1', viewValue: 'English'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
