import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { RoutePage } from '../route/route';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public homeTab: any;
  public newsTab: any;
  public routeTab: any;
  public mapTab: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeTab = HomePage;
    this.newsTab = NewsPage;
    this.routeTab = RoutePage;
    this.mapTab = MapPage
  }
}
