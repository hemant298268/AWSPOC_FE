import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef  } from '@angular/core';
import {ApiCallService} from './api-call.service';
import { timer } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { NgIf } from '@angular/common';


export interface PeriodicElement {
  th_sym_name: string;
  th_timestamp: string;
  th_symbol_volume: number;
  th_trade_price: string;
  th_trade_profit: string;
  c: string
}

interface main {
  statusCode: number;
  body: PeriodicElement;
  encoded: boolean;
}

let ELEMENT_DATA: PeriodicElement[] = [
  ];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  timer;
  jsonData: main;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getPortfolioList();
  }

  constructor(private apiSVC: ApiCallService, private changeDetectorRefs: ChangeDetectorRef) {
    this.timer = setInterval(() => {
      this.getPortfolioList();
      console.log("Refreshing");
      console.log(ELEMENT_DATA)
      this.changeDetectorRefs.detectChanges();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    }, 10000);
  }
  title = 'tBot-FE';
  displayedColumns: string[] = ['th_sym_name', 'th_timestamp', 'th_symbol_volume', 'th_trade_price', 'th_trade_profit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  

    getPortfolioList() {
    this.apiSVC.getPortfolioList().subscribe(value => {
      this.jsonData = JSON.parse(value);
      console.log("jsonData" + this.jsonData.statusCode);
      ELEMENT_DATA = JSON.parse(JSON.stringify(this.jsonData.body));
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      console.log("dataSource" + this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  refresh() {
    this.getPortfolioList();
  }


}


