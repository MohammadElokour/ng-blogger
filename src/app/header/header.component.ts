import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('btn-transition', [
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      state('open', style({
        transform: 'rotate(90deg)'
      })),
      transition('closed <=> open', animate(200))
    ]),
    trigger('menu-transition', [
      state('closed', style({
        transform: 'translateY(-100px)',
        opacity: '0',
      })),
      state('open', style({
        transform: 'translateY(0px)',
        opacity: '1',
      })),
      transition('closed <=> open', animate(200)),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false;
  state = 'closed'
  constructor() { }

  ngOnInit(): void {
  }



  isMobileMenuOpen() {
    this.state == 'closed'?  this.state = 'open' : this.state = 'closed';
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
