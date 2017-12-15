import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: ['./ts-button.component.css']
})
export class TsButtonComponent implements OnInit {
  disabled = false;
  message = '버튼이 눌리지 않았다.';

  constructor() { }

  ngOnInit() {
  }

  async click(): Promise<void> {
    this.disabled = true;
    this.message = '버튼이 방금 눌렸다.';
    await timer(5000).toPromise();
    this.disabled = false;
    this.message = '버튼이 눌리지 않았다.';
  }
}
