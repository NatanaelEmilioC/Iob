import { Component, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  imageSrc = 'assets/images/kraken_logo.jpeg'
  imageAlt = 'Kraken controle teste'


  dataMockSucess: any[] = [
    {UUID: '4b8ddffa-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'sdd', STATUS: 'PASS', AÇÃO: ''},
    {UUID: '5a7fe300-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'Helium', STATUS: 'PASS', AÇÃO: ''},
    {UUID: '61a0974c-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'Lithium', STATUS: 'PASS', AÇÃO: ''},
    {UUID: '6720e9f6-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'Carbon', STATUS: 'PASS', AÇÃO: ''}
  ];

  dataMockUnsucess: any[] = [
    {UUID: '70fb47d2-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'Beryllium', STATUS: 'FAIL', AÇÃO: ''},
    {UUID: '772b6178-440a-11ed-b878-0242ac120002', DESCRIÇÃO: 'Boron', STATUS: 'FAIL', AÇÃO: ''}
  ];

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
