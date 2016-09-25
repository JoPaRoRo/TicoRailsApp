import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SchedulePage } from '../schedule/schedule';
import { RoutePage } from '../route/route';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public homeTab: any;
  public scheduleTab: any;
  public routeTab: any;
  public mapTab: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeTab = HomePage;
    this.scheduleTab = SchedulePage;
    this.routeTab = RoutePage;
    this.mapTab = MapPage
  }
}
