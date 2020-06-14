import { Component } from '@angular/core';
import * as qoutes from 'quotesy';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  qoute = {
    author: '',
    text: ''
  }

  constructor() {
    this.qoute = qoutes.random();
  }

}
