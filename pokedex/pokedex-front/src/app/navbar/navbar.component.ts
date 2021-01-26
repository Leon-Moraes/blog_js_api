import { Component, OnInit } from '@angular/core';

declare var expandMenu: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  expandMenu() {
    if(MouseEvent) {
      document.querySelector("#menu-item-1")?.setAttribute('style', 'display:block!important')
    } 
  }
  closeMenu() {
      document.querySelector("#menu-item-1")?.setAttribute('style', 'display:none!important')
  }

  constructor() {

   }

  ngOnInit(): void {
    
  }
}