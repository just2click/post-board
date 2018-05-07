import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'note-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') titleText: string;

  constructor() { }

  ngOnInit() {
  }

}
