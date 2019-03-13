import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kosher';
  subtitle = 'kosher 2';
  content = 'the content of the thing';

  //Init method
  ngOnInit():void{
    this.title='WORD!!!';
  }
}
